import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/** Dev server: render every page on the server, exactly as the static build does. */
function devPrerender(): Plugin {
  return {
    name: 'dev-prerender',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.originalUrl ?? '/'
        const pathname = url.split('?')[0]
        const isPage = req.method === 'GET' && !pathname.startsWith('/@') && !path.extname(pathname)
        if (!isPage) return next()
        try {
          const template = await server.transformIndexHtml(url, fs.readFileSync('index.html', 'utf8'))
          const { render } = await server.ssrLoadModule('/src/entry-server.tsx')
          const result = render(pathname)
          if (result.status === 301) {
            res.writeHead(301, { Location: result.location })
            res.end()
            return
          }
          const html = template.replace('<!--app-head-->', result.head).replace('<!--app-html-->', result.html)
          res.writeHead(result.status, { 'Content-Type': 'text/html; charset=utf-8' })
          res.end(html)
        } catch (error) {
          server.ssrFixStacktrace(error as Error)
          next(error)
        }
      })
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  appType: 'custom',
  plugins: [react(), devPrerender()],
  build: {
    copyPublicDir: !isSsrBuild,
    rollupOptions: isSsrBuild ? undefined : { input: 'index.html' },
  },
}))

import { mathApp } from './math-app'
import { schoolOperations } from './school-operations'
import { seedpay } from './seedpay'

// Order here is the order on the homepage and the Work page.
export const projects = [seedpay, schoolOperations, mathApp]

export const publishedProjects = projects.filter((p) => p.published)

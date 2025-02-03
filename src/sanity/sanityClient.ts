
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-30',
  useCdn: false, // Important for real-time updates
  token: process.env.SANITY_API_TOKEN, 
  // Add your token for write permissions
})

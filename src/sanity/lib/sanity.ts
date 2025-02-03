import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "jswtbojc",
    dataset: "production",
    apiVersion: "2025-01-30",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}
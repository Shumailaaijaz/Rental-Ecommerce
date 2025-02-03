import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'  // Import the Sanity client

// Create an image builder instance using the Sanity client
const builder = imageUrlBuilder(client)

/**
 * Function to generate a Sanity image URL.
 * @param {any} source - The image reference object from Sanity.
 * @returns {string} The generated image URL.
 */
export function urlFor(source: any) {
  return builder.image(source)
}

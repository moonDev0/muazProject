import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'piedrbpf', // Replace with your project ID
  dataset: 'production', // Replace with your dataset nameyarn
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-07-29', // Use a UTC date string
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
s
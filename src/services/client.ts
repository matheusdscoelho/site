import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: false,
    token: process.env.SANITY_PROJECT_TOKEN,
    apiVersion: '2024-03-01'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

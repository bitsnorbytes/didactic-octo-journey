import {createClient} from "@sanity/client";
// import { projectId,dataset,apiVersion } from "$lib/server/secrets";
import { env } from "$env/dynamic/private";
// export const projectId = env.PROJECT_ID;
// export const dataset = env.DATASET;
// export const apiVersion = env.API_VERSION;
const client = createClient({
  projectId: env.PROJECT_ID,
  dataset: env.DATASET,
  apiVersion: env.API_VERSION,
  useCdn: false
});
export async function load({ params }) {
    const data = await client.fetch(`*[_type == 'post'] 
    {
      "title": title,
      "publishedDate": publishedAt,
      "coverImageURL": coverImage.asset->url,
      "slug": slug.current
    }`);
    return {
      posts: data ?? [],
    };
  }
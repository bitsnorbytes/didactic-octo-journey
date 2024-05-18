import {createClient} from "@sanity/client";
import { projectId,dataset,apiVersion } from "$lib/server/secrets";
const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
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
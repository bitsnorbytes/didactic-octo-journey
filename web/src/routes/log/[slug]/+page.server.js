import {createClient} from "@sanity/client";
import { projectId,dataset,apiVersion } from "$lib/server/secrets";
const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false
});
export async function load({ params }) {
  const data = await client.fetch(`*[_type == 'post' && slug.current == '` + params.slug + `'][0]{
      "title": title,
      "publishedDate": publishedAt,
      "coverImageURL": coverImage.asset->url,
      body[]{
        _type == 'image' => { 
           "imageURL": asset->url
        },
      _type != 'reference' => @,
       }
    }`);
    return {
      post: data ?? [],
    };
  }
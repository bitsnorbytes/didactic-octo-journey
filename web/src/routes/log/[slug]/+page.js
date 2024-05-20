import { client } from "$lib/sanity";
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
import { client } from "$lib/sanity";
export async function load({ params }) {
  const data = await client.fetch(`*[_type == 'post'] 
    {
      "title": title,
      "publishedDate": publishedAt,
      "coverImageURL": coverImage.asset->url,
      "slug": slug.current
    }`);

  if (data) {
    return {
      posts: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}
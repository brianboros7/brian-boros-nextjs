export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}
  
// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const request = getStrapiURL(path);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data)
    return data;
}
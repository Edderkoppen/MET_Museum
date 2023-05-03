export const baseUrl =
  "https://collectionapi.metmuseum.org/public/collection/v1";

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetcher(...args: Parameters<typeof fetch>) {
  const [url, ...rest] = args;
  const res = await fetch(`${baseUrl}${url}`, ...rest);

  await sleep(200);

  return await res.json();
}

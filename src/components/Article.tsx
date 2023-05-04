import useSWR from "swr";

import "../styles/article.scss";

function fetcher(...args: Parameters<typeof fetch>) {
  return fetch(...args).then((res) => res.json());
}

export default function Article(props: { id: number }) {
  const query = useSWR(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      props.id,
    fetcher
  );
  if (query.error) return <h1>failed to load</h1>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <main className="main-block image">
      <img
        className="imgSize"
        src={query.data.primaryImageSmall}
        alt="Card cap"
      />
      <h5>{query.data.objectName}</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the cards content.
      </p>
      <a href="https://google.com" className="">
        Go somewhere
      </a>
    </main>
  );
}

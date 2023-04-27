import "../styles/article.scss";

import "../compoments.scss/Article.scss";

function fetcher(...args: Parameters<typeof fetch>) {
  return fetch(...args).then((res) => res.json());
}

export default function Article(props: { id: number }) {
  const query = useSWR(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      props.id,
    fetcher
  );
  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return (
    <main className="main-block image">
      <img
        className="imgSize"
        src={query.data.primaryImageSmall}
        alt="Card image cap"
      />
      <h5>{query.data.objectName}</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="">
        Go somewhere
      </a>
    </main>
  );
}

 import "../compoments.scss/Article.scss"
 import useSWR from "swr";
 import ArticleCard from "./ArticleCard";"./ArticleCard"
 import { ArticleDetail } from "@/types";

import "../compoments.scss/Article.scss";

function fetcher(...args: Parameters<typeof fetch>) {
  return fetch(...args).then((res) => res.json());
}

 export default function Article(){
  const ObjectQuery = useSWR(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" ,
    fetcher
  );
  if (ObjectQuery.error) return <div>failed to load</div>;
  if (ObjectQuery.isLoading) return <div>Loading...</div>;
  if (!ObjectQuery.data.isHighlight) return null;

  return (
    // <main className="main-block image">
    //   <div className="Block-Sizing">
    //     <img className="imgSize" src={ObjectQuery.data.primaryImageSmall} alt="Card image cap"/>
    //     <h5>{ObjectQuery.data.objectName}</h5>
    //     <p>{ObjectQuery.data.period}{ObjectQuery.data.dynasty}</p>
    //     <a href="#" className="">Detail</a>
    //   </div>
    // </main>
    <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "repeat(4, 1fr)",
          margin: "1rem 0",
        }}
      >
        {ObjectQuery.data.objectID.map((article) => (
          <ArticleCard key={article.objectID} article={article} />
        ))}
      </div>
  );
}

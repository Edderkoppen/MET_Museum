import React from "react";
import { Link } from "react-router-dom";

import { ArticleDetail } from "@/types";


export default function ArticleCard(props: { article: ArticleDetail }) {
  const { article } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
        style={{
            transition: "background-color 0.2s ease-in-out",
            backgroundColor: isHovered ? "green" : undefined,
        }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>{article.objectName}</div>
        <img src={article.primaryImageSmall} alt={article.objectName} height={64} />
      <div>
        
      </div>
    </div>
  );
}

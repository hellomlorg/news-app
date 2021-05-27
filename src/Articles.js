import React from "react";


const ArticleItem = props => {
    const { article } = props;
    return(
    <div className="provider">
     <h1>< a href={article.url}>{article.title}</a> </h1>
     <p style={{ margin: "20px 0" }}>
            {article.description}
     </p>
     <p>{article.publishedAt.split("T")[0]}</p>
    <img className="picture" src={article.urlToImage} alt="" />
    </div>
 );
};

const Articles = props => {
  return (
    <>
      {props.articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </>
  );
};

export default Articles;

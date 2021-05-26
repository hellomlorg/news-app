import React from "react";


const ArticleItem = props => {
    const { article } = props;
    return(
    <>
     <h1>{article.title} </h1>
     <p style={{ margin: "20px 0" }}>
            {article.description}
          </p>
          <a href={article.url}>{article.source.name}</a>
         
         <p>{article.publishedAt.split("T")[0]}</p>
        <img src={article.urlToImage} alt="hello friend" />
        </>
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

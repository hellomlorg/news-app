import React from "react";
import { getArticles } from "./api";
import Articles from './Articles';
import Searchbar from './Searchbar';
import './App.css';


class App extends React.Component {
  state = {
    articles: [],
    Topic: "",
    totalResults: "",
    is_loading: false,
    Error: ""
  };

  searchForTopic = async topic => {
    try {
      this.setState({ is_loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        Topic: topic,
        totalResults: response.totalResults
      });
    } catch (error) {
      this.setState({ Error: "Could not find any articles" });
    }
    this.setState({ is_loading: false });
  };

  render() {
    
    const {
      articles,
      Error,
      is_loading,
      Topic,
      totalResults
    } = this.state;
    
    return (
      <>
       <Searchbar searchForTopic={this.searchForTopic} />
        
        {is_loading && (
          <p style={{ textAlign: "center" }}>Hold on a sec..Searching for articles...</p>
        )}
        {articles.length > 0 && (
          <h2>
            Found {totalResults} articles on "{Topic}"
          </h2>
        )}
        
        {articles.length > 0 && <Articles articles={articles} />}
        {Error && <p>Couldn't find any articles on {Topic} </p>}
        
        <footer className = "footerpart">
          Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
        </footer>
      </>
    );
  }
}



export default App;
import { NEWS_API_KEY } from "./config";

export const getBitcoinArticles = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
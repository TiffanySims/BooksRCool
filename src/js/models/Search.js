import axios from "axios";
import { key, proxy } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${this.query}&printType=books&filter=ebooks&maxResults=20`
      );
      this.result = res.data.items;
    } catch (error) {
      alert(error);
    }
  }
}

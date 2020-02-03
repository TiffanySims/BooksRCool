import axios from "axios";

export default class Book {
  constructor(id) {
    this.id = id;
  }

  async getbook() {
    try {
      const res = await axios(
        `https://www.googleapis.com/books/v1/volumes/${this.id}`
      );
      console.log(res);
      this.title = res.data.volumeInfo.title;
      this.author = res.data.volumeInfo.authors[0];
      this.img = res.data.volumeInfo.imageLinks.thumbnail;
      this.url = res.data.volumeInfo.previewLink;
      this.rating = res.data.volumeInfo.averageRating;
      this.description = res.data.volumeInfo.description;
      this.page = res.data.volumeInfo.pageCount;
      this.date = res.data.volumeInfo.publishedDate;
      this.category = res.data.volumeInfo.categories[0];
    } catch (error) {
      console.log(error);
      alert("Something went wrong :(");
    }
  }
}

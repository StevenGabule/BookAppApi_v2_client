import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/books";

class BookService {
  getBooks() {
    return axios.get(API_URL);
  }
}

export default new BookService();

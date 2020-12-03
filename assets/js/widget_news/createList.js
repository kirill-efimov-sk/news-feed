export default function getListNews(data) {
  class ListNews {
    constructor() {
      this._newsList = data;
    }
    get newsList() {
      return this._newsList;
    }
    set newsList(value) {
      this._newsList = value;
    }
  }

  let dataNews;
  let userNews = new ListNews();

  console.log('обращение к объекту для рендера данных..');
  userNews.newsList = data;
  return dataNews = userNews.newsList;
}
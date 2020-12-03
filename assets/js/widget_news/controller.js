import getListNews from './createList.js'
import data from './data.js'


export default function controller (boolVolume) {
  let dataNews = {};
  if (boolVolume) {
    //если true - вернуть объект для рендера
    return dataNews = getListNews(data);
  } else {
    //если false - вернуть кол-во элементов объекта по значению count
    let countNews = getListNews(data.count);
    return countNews;
  }
}
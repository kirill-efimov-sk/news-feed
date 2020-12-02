import getListNews from './createList.js'
import data from './data.js'

export default function controller (boolVolume) {
  let dataNews = {};
  if (boolVolume) {
    //если true - вернуть объект для рендера
    console.log('запрос к кол-ву элементов в объекте..');
    return dataNews = getListNews(data);
  } else {
    //если false - вернуть кол-во элементов объекта по значению count
    console.log('переход к рендеру...');
    let countNews = getListNews(data.count);
    return countNews;
  }
}

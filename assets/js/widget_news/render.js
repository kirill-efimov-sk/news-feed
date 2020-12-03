import createWidget from './widget.js'


export default function render(data) {
  //проверка данных перед выводом
  console.log(data);
  console.log('старт процедуры загрузки контента..');

  let count = Number(document.querySelector('#count').innerText);
  let renderCount = document.querySelectorAll('.user-news').length;
  let newsParent = document.querySelector('#newsData');

  let elemH2 = document.createElement('h2');
  newsParent.appendChild(elemH2);

  if (renderCount<count) {
    for(let key in data) {
      if (key !== 'count') {
        createWidget(data[key], newsParent, elemH2);
      }
    }
  } else {
    //скрываем или возвращаем элементы при вызове рендера
    //реализовано чтобы не рендерить то, что уже есть на странице
    let historyState = document.querySelector('#newsData').classList;
    if (historyState[1] === 'user-news-none') {
      newsParent.classList.add('user-news-active');
      newsParent.classList.remove('user-news-none');
    } else {
      newsParent.classList.add('user-news-none');
      newsParent.classList.remove('user-news-active');
    }
  }
}
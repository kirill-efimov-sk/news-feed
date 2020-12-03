export default function createWidget(data, newsParent, elemH2) {
  //на реакте реализация более легковесна
  let elem = document.createElement('div');
  let elemH3 = document.createElement('h3');
  let elemAuthor = document.createElement('h4');
  let elemDate = document.createElement('div');
  let elemUrl = document.createElement('a');
  let elemState = document.createElement('input');
  let elemLabel = document.createElement('label');
  let elemSpan = document.createElement('span');

  elem.classList.add('user-news');
  elem.id = 'newsActive';
  elemDate.classList.add('date-news');
  elemUrl.classList.add('url-news');
  elemState.classList.add('state-news');
  
  elemH2.innerText = 'Лента новостей';
  elemH3.innerText = data[0][0];
  elemAuthor.innerText = data[0][1];
  elemDate.innerText = data[0][2];
  elemUrl.innerText = 'Для перехода к статье нажмите тут';
  elemSpan.innerText = data[0][4];

  elem.setAttribute('onclick', 'counter()')
  elemUrl.setAttribute('href', data[0][3]);
  elemState.setAttribute('type', 'checkbox');

  newsParent.appendChild(elemLabel);
    elemLabel.appendChild(elem);
      elem.appendChild(elemH3);
      elem.appendChild(elemAuthor);
      elem.appendChild(elemDate);
      elem.appendChild(elemUrl);
      elem.appendChild(elemState);
      elem.appendChild(elemSpan);

      console.log('загрузка новости завершена..');
}
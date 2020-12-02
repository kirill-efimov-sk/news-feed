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
        //реализация на react была бы удобнее
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
        elemH3.innerText = data[key][0][0];
        elemAuthor.innerText = data[key][0][1];
        elemDate.innerText = data[key][0][2];
        elemUrl.innerText = 'Для перехода к статье нажмите тут';
        elemSpan.innerText = data[key][0][4];

        elemUrl.setAttribute('href', data[key][0][3]);
        elemState.setAttribute('type', 'checkbox');

        newsParent.appendChild(elemLabel);
          elemLabel.appendChild(elem);
            elem.appendChild(elemH3);
            elem.appendChild(elemAuthor);
            elem.appendChild(elemDate);
            elem.appendChild(elemUrl);
            elem.appendChild(elemState);
            elem.appendChild(elemSpan);
         
      }
    }
  } else {
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
import controller from './controller.js'
import render from './render.js' 


//добавляем кол-во новостей
//для этого вызываем контроллер, который возвращает по false кол-во новостей
let count = controller(false);
let elemCount = document.querySelector('#count');
    elemCount.innerText = count;


var btnNews = document.querySelectorAll('#usElem');
//IIF чтобы не загружать global scope
(function () {
  function rendering() {
    let data = controller(true);
    render(data);
  }

  //слушаем нажатия кнопки (event loop)
  document.addEventListener('keydown', function attach(e) {
    var valCode = e.keyCode;
    if (valCode===78 || valCode===89) {
      rendering()
    }
    document.removeEventListener('click', attach, false);
  })
  //слушаем нажатия мышью (event loop)
  btnNews.forEach(btnNews => {
    btnNews.onclick = function () {
      rendering()
    }
  });
})()
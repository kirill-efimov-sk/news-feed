import controller from './controller.js'
import render from './render.js' 


let count = controller(false);
  let elemCount = document.querySelector('#count');
  elemCount.innerText = count;


var btnNews = document.querySelectorAll('#usElem');
//IIF чтобы не загружать global scope
(function () {
  //слушаем нажатия кнопки (event loop)
  document.addEventListener('keydown', function attach(e) {
    var valCode = e.keyCode;
      if (valCode===78 || valCode===89) {
        let data = controller(true);
        render(data);
      }
    document.removeEventListener('click', attach, false);
  })
  //слушаем нажатия мышью (event loop)
  btnNews.forEach(btnNews => {
    btnNews.onclick = function () {
      let data = controller(true);
      render(data);
    }
  });
})()
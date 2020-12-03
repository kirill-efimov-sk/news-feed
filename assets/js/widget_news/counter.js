function counter() {
  let parentElem = document.querySelectorAll('#count')[0]
  let elem = document.querySelectorAll('.user-news')

  let counter = Number(elem.length);
  let counter_checkeds = Number(document.querySelectorAll('input:checked').length);
  console.log('кол-во прочитанных новостей='+counter_checkeds);
    let newCounter = counter - counter_checkeds;
    
  parentElem.innerText = +newCounter;
}
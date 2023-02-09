var btnElement = document.querySelector('button');

function viec1() {
  console.log("viec 1")
}

btnElement.addEventListener('click', viec1);

setTimeout(function(){
  btnElement.removeEventListener('click', viec1);
}, 3000);


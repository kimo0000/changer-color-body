const btn = document.querySelector('.btn');

btn.onclick = changeColorBody;

function changeColorBody () {
     document.body.style.backgroundColor = "#" + Math.random().toString().slice(2, 8);
}
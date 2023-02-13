let meme = document.getElementById("imega");
let names = document.getElementById("name");
let btn = document.getElementById("btn");

const url = "https://api.imgflip.com/get_memes";

let getMeme = () => {
    fetch(url)
    .then((data)=> data.json())
    .then((item)=>{
      meme.innerHTML = item.url;
      names.innerHTML = item.name;
    });
};

window.addEventListener("load", getMeme);
btn.addEventListener("click", getMeme);
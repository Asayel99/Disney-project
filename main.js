
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex =0; 

const createSlide = () => {
    if (slideIndex > movies.length) {
    }
     
    //create DOM Elements

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


     //attaching all elements
     imgElement.appendChild(document.createTextNode(''));
     h1.appendChild(document.createTextNode(movies
     [slideIndex].name));
     p.appendChild(document.createTextNode(movies
     [slideIndex].des));
     content.appendChild(h1);
     content.appendChild(p);
     slide.appendChild(content);
     slide.appendChild(imgElement);
     carousel.appendChild(slide);

     //setting up images

     imgElement.src = movies[slideIndex].name;
     slideIndex++;
    

     //setting elements classname
     slide.className = 'slider';
     content.className = 'slide-content';
     h1.className = 'movie-title';
     p.className = 'movie-des';

     sliders.push(slide);

     //adding sliding effect

     if (sliders.length){
         sliders[0].style.marginleft = 'calc(-$ { 100* (sliders.length -2)} % -${30 *  (sliders.length -2)}px)';
        }
     }



for (let i = 0; i < 3; i++){
    createSlide();
}

setInterval(()=>  {
   createSlide();
}, 3000);

//sliding 
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;

next.onelick = ()=>{
    active += 1;
    reloadslider()
}
function reloadslider(){
    let checkLeft = items[active].offsetleft;
    list.style.left = -checkLeft + 'px';
}


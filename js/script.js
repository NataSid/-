// import {images, leftArrow, rightArrow, articleArr, imgArr} from './initialData.js';
const prev = document.querySelectorAll('.button_left_arrows');
const next = document.querySelectorAll('.button_right_arrows');
const slides = document.querySelectorAll('.flat_slider');
const dots = document.querySelectorAll('.dot');
const sochis = document.querySelectorAll('.button_right_title');


let index = 0;


const activeSlide = n => {
    for(slide of slides)  {
       slide.classList.remove('active');
   }
   slides[n].classList.add('active');
}


const activeDot = n => {
    for(dot of dots)  {
        dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}

prepereCurentSlide = ind => {
    activeSlide(index);
    activeDot(index);
    setEntity(index);
    activeSochi(index);
   

}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepereCurentSlide(index);
    } else {
        index++;
        prepereCurentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        prepereCurentSlide(index);
    } else {
        index--;
        prepereCurentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepereCurentSlide(index);
    })   
})
  

sochis.forEach((items, indexSochis) => {
    items.addEventListener('click', () => {
        index = indexSochis;
        prepereCurentSlide(index);
    })   
})


const entities = [
    {
        City: 'Rostov-on-Don LCD admiral',
        apartamentArea: '81 m2',
        repairTime: '3.5 months',
    },
    {
        City: 'Sochi Thieves',
        apartamentArea: '105 m2',
        repairTime: '4 months',
        
    },
    {
        City: 'Rostov-on-Don Patriotic',
        apartamentArea: '93 m2',
        repairTime: '3 months'
      
    }
  ]

    let City = document.querySelector('.complect_project_dd1')
    let apartamentArea = document.querySelector('.complect_project_dd2')
    let repairTime = document.querySelector('.complect_project_dd3')
    
    let setEntity = (index) => {
        City.innerText = entities[index].City,
        apartamentArea.innerText = entities[index].apartamentArea,
        repairTime.innerText = entities[index].repairTime
    }
    
    const activeSochi = elem => {
        for (let sochi of sochis) {
            sochi.classList.remove('active');
   }
        sochis[elem].classList.add('active');
}

document.querySelector('.button_right_arrows').onclick = nextSlide;
document.querySelector('.button_left_arrows').onclick = prevSlide;

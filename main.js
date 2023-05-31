const images = document.querySelector(".images");
const icons = document.querySelectorAll(".image-slide span");
const firstSlide = document.querySelectorAll(".slide")[0]; 

let isStart = false, prevPageX, prevScrollLeft;
let scrollWidth = images.scrollWidth - images.clientWidth;

const showhideIcon = () =>{
    icons[0].style.display = images.scrollLeft == 0 ? "none" : "block";
    icons[1].style.display = images.scrollLeft == scrollWidth ? "none" : "block";
}

icons.forEach(icon =>{
    icon.addEventListener("click", () => {
       let firstSlideWidth = firstSlide.clientWidth + 150;
       images.scrollLeft += icon.id == "left" ? - firstSlideWidth : firstSlideWidth; 
       setTimeout(() => showhideIcon(), 30);
    })
})

const dragStart = (e) => {  
    isStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = images.scrollLeft;
}
const dragging = (e) =>{
    if(!isStart) return;
    e.preventDefault();
    images.classList.add("drag")
    let positionDiff = e.pageX - prevPageX
    images.scrollLeft = prevScrollLeft - positionDiff;
    showhideIcon(); 
} 

const dragStop = () => {
    isStart = false;
    images.classList.remove("drag")
}

images.addEventListener("mousedown", dragStart);
images.addEventListener("mousemove", dragging);
images.addEventListener("mouseup", dragStop);

// ===== profile sidebar =======
const active = document.querySelector("#active");
const profileInfo = document.querySelector(".profile-info");

active.addEventListener("click", () =>{
    profileInfo.classList.toggle("appear")
})

// ======= Message-box ====== 

const show = document.querySelector("#show");
const solid = document.querySelector("#solid");
const messageBox = document.querySelector(".message-box");

show.addEventListener("click", () =>{
    messageBox.classList.toggle("display")
});

solid.addEventListener("click", () =>{
    messageBox.classList.remove("display")
});


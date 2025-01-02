const targetDiv = document.querySelector(".bodyContainer2");
const targetDiv2 = document.querySelector(".bodyContainer3");
const targetDiv3 = document.querySelector(".bodyContainer4");
const targetDiv4 = document.querySelector(".bodyContainer5");
const targetDiv5 = document.querySelector("footer");


const options = {
    threshold:0,
    rootMargin:"0px 0px 0px 0px",
    root:null
};

const observer = new IntersectionObserver(function(entities){
    entities.forEach(entry =>{
        console.log(entry.target)
        const intersecting = entry.isIntersecting;
        if(intersecting){
            entry.target.classList.add("opacityon");
            observer.unobserve(entry.target);
        }else{
            entry.target.classList.remove("opacityon");
        }
    })
},options);

observer.observe(targetDiv);
observer.observe(targetDiv2);
observer.observe(targetDiv3);
observer.observe(targetDiv4);

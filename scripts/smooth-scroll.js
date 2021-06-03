let offset = 0;
let currentRequest;

const body = document.body;
const scrollWrapper = document.querySelector("#scroll-area");
const pageHeight = body.getBoundingClientRect().height;
const scrollSpeed = 0.08;  


function handleScroll() {
    offset += (window.pageYOffset - offset) * scrollSpeed;
    scrollWrapper.style.transform = `translateY(-${offset}px) translateZ(0)`;

    currentRequest = requestAnimationFrame(handleScroll);
}   

document.addEventListener('scroll', function () {
  cancelAnimationFrame(currentRequest);
  handleScroll(); 
});

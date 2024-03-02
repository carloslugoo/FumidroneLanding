const spinnerWrapperElement= document.querySelector('.spinnerWrapper');

window.addEventListener('load', ()=>{
    spinnerWrapperElement.style.oppacity='0'; 
    setTimeout(()=>{
    spinnerWrapperElement.style.display='none';
    },200)
});

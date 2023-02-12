const btnModal = document.querySelector('.btnModal');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');

btnModal.addEventListener('click',()=>{
    videoContainer.classList.add('show');
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
})
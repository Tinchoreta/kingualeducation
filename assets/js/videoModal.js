const btnModal = document.querySelector('.btnModal');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');
const mainVideo = document.querySelector('#mainVideoPresentation');

btnModal.addEventListener('click',()=>{
    videoContainer.classList.add('show');
    
    // close.style.bottom = String(ObtenerBottom(videoContainer) + 50).concat("px") ;
    // close.style.right = String(ObtenerRight(videoContainer) + 50).concat("px");
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
    mainVideo.pause();
    mainVideo.currentTime = 0;
})

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        videoContainer.classList.remove('show');
        mainVideo.pause();
        mainVideo.currentTime = 0;
    }
  })

//   function ObtenerBottom(elemento){
//     let posicion = 0;
//     if (elemento){
//      posicion = elemento.getBoundingClientRect();
//      return posicion.bottom;   
//     }
//     else return -1;
//   }

//   function ObtenerRight(elemento){
//     let posicion = 0;
//     if (elemento){
//      posicion = elemento.getBoundingClientRect();
//      return posicion.right;   
//     }
//     else return -1;
//   }
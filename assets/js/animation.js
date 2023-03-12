const appearObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       
        if (entry.isIntersecting) {
            entry.target.classList.add( 'show' );
            
        }
        else {
            entry.target.classList.remove( 'show' );
        }
    }); 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => appearObserver.observe(el));


// const glowObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
       
//         if (entry.isIntersecting) {
//             entry.target.classList.add( 'glow' );
            
//         }
//         else {
//             entry.target.classList.remove( 'glow' );
//         }
//     }); 
// });

// const glowElement = document.querySelectorAll('.glow');
// glowElement.forEach((el) => glowObserver.observe(el));


const button = document.getElementById('my-button');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {


            button.classList.add('highlight');


            setTimeout(() => {
                
                button.classList.remove('highlight');
            }, 3000);
        } else {
            
            button.classList.remove('highlight');
        }
    });
});

observer.observe(button);
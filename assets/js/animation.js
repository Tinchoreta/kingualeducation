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



// Resaltar botones cuándo sean visibles (.IntersectionObserver)

const highlightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        setTimeout(() => {


            if (entry.isIntersecting) {

                if (entry.target.classList.contains('collapsed')) {
                    
                    entry.target.classList.add('highlight')


                    setTimeout(() => {

                        entry.target.classList.remove('highlight');
                    }, 2000);
                }
            } else {

                entry.target.classList.remove('highlight');
            }
        }, 1500);
    });
});

const highlightedButtons = document.querySelectorAll('.highlightButton');

highlightedButtons.forEach((el) => {


        highlightObserver.observe(el)

});



// Resaltar divs cuándo sean visibles (.IntersectionObserver)

const highlightDivObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      setTimeout(() => {
        
      
        if (entry.isIntersecting) {


            entry.target.classList.add('highlightDiv');
            

            setTimeout(() => {
                
                entry.target.classList.remove('highlightDiv');
            }, 2000);

            

        } else {
            
            entry.target.classList.remove('highlightDiv');
        }
    }, 1500);
    
   

    });
});

const highlightedDivs = document.querySelectorAll('.highlightDiv');

highlightedDivs.forEach((el) => {


        highlightDivObserver.observe(el)

});

  

const appearRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       
        if (entry.isIntersecting) {
            entry.target.classList.add( 'showRight' );
            
        }
        else {
            entry.target.classList.remove( 'showRight' );
        }
    }); 
});

const hiddenRightElements = document.querySelectorAll('.hiddenRight');
hiddenRightElements.forEach((el) => appearRightObserver.observe(el));

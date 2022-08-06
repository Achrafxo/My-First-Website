let mayBool = false ;

let myBurger = document.querySelector(".icon");
let mylist = document.querySelector('.theLink');

myBurger.addEventListener('click', () => {
    mayBool = !mayBool ;
    
    
    if (mayBool) {
        myBurger.classList.add('open') ;
        mylist.classList.add('Active') ;
        
        
    } else {
        myBurger.classList.remove('open') ;
        mylist.classList.remove('Active') ;
    }

})
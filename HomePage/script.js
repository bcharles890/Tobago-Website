const buttons = document.querySelectorAll("[data-carosel-button]") //function used to selected the data carosel button


buttons.forEach(button => {
    button.addEventListener("click", ()=> {                        
       const offset = button.dataset.caroselButton === "next" ? 1: -1  // when next is clicked it will either go up in the carosel index by 1 or decrese by 1
       const slides = button
       .closest("[data-carosel]")
       .querySelector("[data-slides]")

       const activeSlide = slides.querySelector("[data-active]")
       let newIndex = [...slides.children].indexOf(activeSlide) + offset
       if(newIndex < 0)newIndex = slides.children.length - 1
       if(newIndex >= slides.children.length) newIndex = 0

       slides.children[newIndex].dataset.active = true
       delete activeSlide.dataset.active

    })
}) // carosel code ends here

window.onscroll = function() {scrollFunction()}; // this code is for the navbar that appears one the user scrolls

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){  //if the document is scrolled then the navbar appears 
        document.getElementById("navbar").style.top = "0"; 
    } else{
        document.getElementById("navbar").style.top = "-90";  //else the navbar is hidden above the top of document
    }
}

function changeTitleColor(){
    
     let homepage = document.querySelector('homepage');
     let colorSelection = homepage.innerHTML.style.color
    homepage.addEventListener( 'click', function turnRed (){
        document.querySelector.homepage.style = 'red';
    })
}



/*function dropDownMenu(){

    let menuIcon = document.querySelector('#menu-icon');
    let dropdownMenu = document.querySelector('#dropdown-menu');


    if(dropdownMenu == document.style.visibility == 'none'){

        dropdownMenu.addEventListener('click', e => {
            dropdownMenu.style.visibility == 'visible'

        });
    }
    

    
} */

const hiddenMenu = document.getElementById(dropdown-menu);
const menuIcon = document.getElementsByClassName('menu-icon')

menuIcon.addEventListener('onclick', e => {
    hiddenMenu.style.visibility = 'none';
});




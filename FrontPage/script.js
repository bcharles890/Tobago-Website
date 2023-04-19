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
        document.getElementById("navbar").style.top = "0"; //if the navbar is at the top of the page then it is hidden
    } else{
        document.getElementById("navbar").style.top = "-90";  //need an else statement for navbar
    }
}



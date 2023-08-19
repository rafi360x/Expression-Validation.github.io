

//select all Refarances
let Email_Btn = document.getElementById('email_handle')
Phone_Btn = document.getElementById('Phone_handle')
post_Btn = document.getElementById('Post_handle')
let email_inp_value =  document.getElementById('email_inp')
let phone_inp = document.getElementById('number_inp')
let post_inp = document.getElementById("post_inp")
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneRegex = /^01\d{9}$/;
const zipCodeRegex = /^\d{4}$/;
window.onload = main()


/**
 * This Function Can Call Some Important Refarences
 */
function main(){
    document.querySelector(".cart").style.display = 'none'
    document.querySelector(".cart1").style.display = 'none'
    document.querySelector(".cart2").style.display = 'none'
}

// add event lisners
Email_Btn.addEventListener("click", () => {
    document.querySelector(".cart").style.display = 'block'
    document.querySelector(".cart1").style.display = 'none'
    document.querySelector(".cart2").style.display = 'none'
    email_inp_value.addEventListener("keyup", (e) =>  {
        //console.log(e.target.value)
        if (emailRegex.test(e.target.value)) {
            document.querySelector('.status_text').textContent = "Valid Email"
            e.target.style.border = "2px solid green"
        } else {
            document.querySelector('.status_text').textContent = "Invalid email!"
            e.target.style.border = "2px solid red"
             
        }
        
    })

})

Phone_Btn.addEventListener("click", () => {
    document.querySelector(".cart").style.display = 'none'
    document.querySelector(".cart1").style.display = 'block'
    document.querySelector(".cart2").style.display = 'none'

    phone_inp.addEventListener("keyup", (e) =>  {
        //console.log(e.target.value)
        if (phoneRegex.test(e.target.value)) {
            document.querySelector('.status_text2').textContent = "Valid Number"
            e.target.style.border = "2px solid green"
        } else {
            document.querySelector('.status_text2').textContent = "Invalid Number!"
            e.target.style.border = "2px solid red"
             
        }
        
    })

})

post_Btn.addEventListener("click", () => {
    document.querySelector(".cart").style.display = 'none'
    document.querySelector(".cart1").style.display = 'none'
    document.querySelector(".cart2").style.display = 'block'
    post_inp.addEventListener("keyup", (e) =>  {
        //console.log(e.target.value)
        if (zipCodeRegex.test(e.target.value)) {
            document.querySelector('.status_text3').textContent = "Valid post code"
            e.target.style.border = "2px solid green"
        } else {
            document.querySelector('.status_text3').textContent = "Invalid post code!"
            e.target.style.border = "2px solid red"
             
        }
        
    })
})
 

document.addEventListener('DOMContentLoaded', LodingHandaler);
function LodingHandaler(){
    setTimeout(function () {
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
        document.querySelector(".loding_templete").style.display = "none"
    }, 5000); 
}
const headingText = "Expression Valid App";
const textElement = document.querySelector('.animated-heading .text');
let index = 0;

function typeEffect() {
    if (index < headingText.length) {
        textElement.textContent += headingText.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();

 
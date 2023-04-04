const random_password = document.getElementById("random-pass");
const copy = document.getElementById("copy");
const result = document.getElementById("result");
const slider = document.getElementById("input")
const button = document.getElementById("button");
const upperCheckbox = document.getElementById("upper");
const lowerCheckbox = document.getElementById("low");
const symbolCheckbox = document.getElementById("symbol");
const numCheckbox = document.getElementById("num")
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const medium = document.getElementById("medium");

const checknul = document.querySelectorAll(".check");


let slider_value = 10;

slider.oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, rgba(24, 23, 31, 1))'
  result.innerHTML = this.value;
  slider_value = this.value;
}

button.addEventListener('click', () => {
  
        generatePassword(slider_value, upperCheckbox.checked,numCheckbox.checked, symbolCheckbox.checked, lowerCheckbox.checked);
        strength();
        // if(slider_value == 0){
        //     medium.textContent="";
        //     one.classList.add("white-style")
        //     two.classList.add("check")
        //     three.classList.add("check")
        //     four.classList.add("white-style")
        //     random_password.textContent = "";

        // }
            // strength();
        // } else if(checknul.classList("styleBorder")){
        //     random_password.textContent = "";
        //     // strength();
        // }
   
  });


copy.addEventListener("click", () => {
    const password = random_password.textContent;
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  });


function generatePassword(length, includeUppercase, includeNumbers, includeSymbols, includeLowercase) {
    // Define the character sets to use in the password
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
    // Combine the character sets and randomly shuffle them
    let allChars = '';
    if(includeUppercase){
        allChars +=upper;
    }
    if(includeNumbers){
        allChars += digits;
    }
    if(includeSymbols){
        allChars += symbols;
    }
    if(includeLowercase){
        allChars += lower
    }
    allChars = allChars.split('').sort(function(){return 0.5-Math.random()}).join('');
  
    // Generate the password by selecting random characters from the shuffled set
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    random_password.textContent = password;



            
  }

//   function checkAll() {
//     var inputs = document.querySelectorAll('.check');
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].checked = true;
//     }
// }
// //create uncheckall function
// function checkAll() {
//     var inputs = document.querySelectorAll('.check');
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].checked = false;
//     }
// }

function strength() {

    if(slider_value == 0){
        medium.textContent="";
        // one.removeAttribute("style", importent)
        one.classList.add("white-style")
        two.classList.add("white-style")
        three.classList.add("white-style")
        four.classList.add("white-style")
        random_password.textContent = "";

    }else 
    if( upperCheckbox.checked && numCheckbox.checked && symbolCheckbox.checked && lowerCheckbox.checked ){
        two.classList.add("stylegreen");
        one.classList.add("stylegreen");
        three.classList.add("stylegreen");
        four.classList.add("stylegreen")

        one.classList.remove("white-style")
        two.classList.remove("white-style")
        three.classList.remove("white-style")
        four.classList.remove("white-style")
        medium.textContent= "STRONG";
        medium.classList.add("strong")
    }else if(upperCheckbox.checked && numCheckbox.checked && symbolCheckbox.checked || lowerCheckbox.checked && upperCheckbox.checked && symbolCheckbox.checked || numCheckbox.checked &&  symbolCheckbox.checked && lowerCheckbox.checked || numCheckbox.checked  && lowerCheckbox.checked && upperCheckbox.checked ){
        two.classList.remove("stylegreen");
        one.classList.remove("stylegreen");
        three.classList.remove("stylegreen");
        four.classList.remove("stylegreen")
        one.classList.remove("white-style")
        two.classList.remove("white-style")
        three.classList.remove("white-style")
        four.classList.remove("white-style")
        
        two.classList.add("style");
        one.classList.add("style");
        three.classList.add("style");
        medium.textContent = "MEDIUM";
        medium.classList.add("medium-medium")
        medium.classList.remove("weak")
        medium.classList.remove("strong");
    }else if(upperCheckbox.checked && numCheckbox.checked || symbolCheckbox.checked && lowerCheckbox.checked || upperCheckbox.checked && symbolCheckbox.checked || numCheckbox.checked &&  symbolCheckbox.checked || lowerCheckbox.checked && upperCheckbox.checked ){
            two.classList.add("style");
            one.classList.add("style");
            three.classList.remove("style");
            one.classList.remove("styleRed");
            one.classList.remove("white-style")
            two.classList.remove("white-style")
            three.classList.remove("white-style")
            four.classList.remove("white-style")


            medium.textContent = "MEDIUM";
            medium.classList.add("medium-medium")
            medium.classList.remove("weak")
        medium.classList.remove("strong");
     } else if(upperCheckbox.checked || numCheckbox.checked || symbolCheckbox.checked || lowerCheckbox.checked ){
            one.classList.add("styleRed");

            two.classList.remove("style");
            three.classList.remove("style");
            one.classList.remove("stylegreen");
            two.classList.remove("stylegreen");
            three.classList.remove("stylegreen");
            four.classList.remove("stylegreen")
            one.classList.remove("white-style")
            two.classList.remove("white-style")
            three.classList.remove("white-style")
            four.classList.remove("white-style")


            medium.textContent = "VERY WEAK";
            medium.classList.remove("strong");
            medium.classList.add("weak")
    } else if(!upperCheckbox.checked && !numCheckbox.checked && !symbolCheckbox.checked && !lowerCheckbox.checked ){
        random_password.textContent = "";
        medium.textContent="";
        one.classList.add("white-style")
        two.classList.add("white-style")
        three.classList.add("white-style")
        four.classList.add("white-style")
        random_password.textContent = "";
    } 
    // inputs[i].checked = true;
    
 }




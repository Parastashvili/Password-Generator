const uppercase = document.getElementById("cb1");
const lowercase = document.getElementById("cb2");
const numbers = document.getElementById("cb3");
const symbols = document.getElementById("cb4");
let rangesvalue = document.getElementById("char_n");
let ranges = document.getElementById("range_value");
let sirtule = document.getElementById("texturi");
let tooweak = document.getElementById("one");
let weak = document.getElementById("two");
let medium = document.getElementById("three");
let strong = document.getElementById("four");
const button = document.getElementById("gen_but")
let password = document.getElementById("main_password");
let copied=document.getElementById("copied")
ranges.oninput = range_value;


function range_value() {
    let value = Number(ranges.value);
    ranges.innerHTML = value;
};
ranges.addEventListener("input", function () {
    rangesvalue.textContent = ranges.value;
});

let streng = 0;
uppercase.addEventListener('change', () => {
    if (uppercase.checked) {
        streng++;
        strength();
    }
    else {
        streng--;
        strength();
    }
});
lowercase.addEventListener('change', () => {
    if (lowercase.checked) {
        streng++;
        strength();
    }
    else {
        streng--;
        strength();
    }
});
numbers.addEventListener('change', () => {
    if (numbers.checked) {
        streng++;
        strength();
    }
    else {
        streng--;
        strength();
    }
});
symbols.addEventListener('change', () => {
    if (symbols.checked) {
        streng++;
        strength();
    }
    else {
        streng--;
        strength();
    }
});

function strength() {
    if (streng == 1) {
        sirtule.innerHTML = "TOO WEAK"
        tooweak.style.backgroundColor = "#F64A4A"
        tooweak.style.border = "0px"
        tooweak.style.width = "8px"
        tooweak.style.height = "26px"
        weak.style.backgroundColor = "transparent"
        weak.style.border = "2px solid #E6E5EA"
        weak.style.width = "4px"
        weak.style.height = "22px"
        medium.style.backgroundColor = "transparent"
        medium.style.border = "2px solid #E6E5EA"
        medium.style.width = "4px"
        medium.style.height = "22px"
        strong.style.backgroundColor = "transparent"
        strong.style.border = "2px solid #E6E5EA"
        strong.style.width = "4px"
        strong.style.height = "22px"
    } else if (streng == 2) {
        sirtule.innerHTML = "WEAK"
        tooweak.style.backgroundColor = "#FB7C58"
        tooweak.style.border = "0px"
        tooweak.style.width = "8px"
        tooweak.style.height = "26px"
        weak.style.backgroundColor = "#FB7C58"
        weak.style.border = "0px"
        weak.style.width = "8px"
        weak.style.height = "26px"
        medium.style.backgroundColor = "transparent"
        medium.style.border = "2px solid #E6E5EA"
        medium.style.width = "4px"
        medium.style.height = "22px"
        strong.style.backgroundColor = "transparent"
        strong.style.border = "2px solid #E6E5EA"
        strong.style.width = "4px"
        strong.style.height = "22px"
    } else if (streng == 3) {
        sirtule.innerHTML = "MEDIUM"
        tooweak.style.backgroundColor = "#F8CD65"
        tooweak.style.border = "0px"
        tooweak.style.width = "8px"
        tooweak.style.height = "26px"
        weak.style.backgroundColor = "#F8CD65"
        weak.style.border = "0px"
        weak.style.width = "8px"
        weak.style.height = "26px"
        medium.style.backgroundColor = "#F8CD65"
        medium.style.border = "0px"
        medium.style.width = "8px"
        medium.style.height = "26px"
        strong.style.backgroundColor = "transparent"
        strong.style.border = "2px solid #E6E5EA"
        strong.style.width = "4px"
        strong.style.height = "22px"
    } else if (streng == 4) {
        sirtule.innerHTML = "STRONG"
        tooweak.style.backgroundColor = "#A4FFAF"
        tooweak.style.border = "0px"
        tooweak.style.width = "8px"
        tooweak.style.height = "26px"
        weak.style.backgroundColor = "#A4FFAF"
        weak.style.border = "0px"
        weak.style.width = "8px"
        weak.style.height = "26px"
        medium.style.backgroundColor = "#A4FFAF"
        medium.style.border = "0px"
        medium.style.width = "8px"
        medium.style.height = "26px"
        strong.style.backgroundColor = "#A4FFAF"
        strong.style.border = "0px"
        strong.style.width = "8px"
        strong.style.height = "26px"
    } else {
        sirtule.innerHTML = ""
        tooweak.style.backgroundColor = "transparent"
        tooweak.style.border = "2px solid #E6E5EA"
        tooweak.style.width = "4px"
        tooweak.style.height = "22px"
        weak.style.backgroundColor = "transparent"
        weak.style.border = "2px solid #E6E5EA"
        weak.style.width = "4px"
        weak.style.height = "22px"
        medium.style.backgroundColor = "transparent"
        medium.style.border = "2px solid #E6E5EA"
        medium.style.width = "4px"
        medium.style.height = "22px"
        strong.style.backgroundColor = "transparent"
        strong.style.border = "2px solid #E6E5EA"
        strong.style.width = "4px"
        strong.style.height = "22px"

    }

}
function generate_pass() {
    let letters_count = Number(ranges.value);
    let suggested_pass = [];
    const loweralphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperalphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symboloebi = '!@#$%^&*()_+';
    while (suggested_pass.length < letters_count) {
        if (uppercase.checked) {
            const randomLetter = upperalphabet[Math.floor(Math.random() * upperalphabet.length)];
            suggested_pass.push(randomLetter)
            if(suggested_pass.length >= letters_count){
                break;
            }
        }
        if (numbers.checked) {
            const randomnumber = number[Math.floor(Math.random() * number.length)];
            suggested_pass.push(randomnumber)
            if(suggested_pass.length >= letters_count){
                break;
            }
        }
        if (symbols.checked) {
            const randomsymbols = symboloebi[Math.floor(Math.random() * symboloebi.length)];
            suggested_pass.push(randomsymbols)
            if(suggested_pass.length >= letters_count){
                break;
            }
        }
        if (lowercase.checked) {
            const randomLetterLower = loweralphabet[Math.floor(Math.random() * loweralphabet.length)];
            suggested_pass.push(randomLetterLower)
            if(suggested_pass.length >= letters_count){
                break;
            }
        }

    }
    password.innerHTML = (suggested_pass.join(""));
    password.style.opacity = 1;
    copied.style.display="none";
    console.log(letters_count)

}

button.addEventListener("click", function () {
    if (uppercase.checked || numbers.checked || symbols.checked || lowercase.checked) {
        generate_pass();
    } else {
        alert("Please choose minimum one criteria")
    }

});

const copyIcon = document.getElementById("copy_icon");
copyIcon.addEventListener("click", () => {
    const passwordText = document.getElementById("main_password").textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        copied.style.display="block";
        password.style.opacity = 0;
    }, () => {
        alert("Failed to copy text to clipboard");
    });
});


let slider_color=document.getElementById("range_value");
slider_color.oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #fff ' + value + '%, white 100%)'
  };
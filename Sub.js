let one = document.querySelectorAll(".one1")
let onep = document.querySelectorAll(".eins")

let two = document.querySelectorAll(".two")
let twop = document.querySelectorAll(".zwei")

let three = document.querySelectorAll(".three")
let threep = document.querySelectorAll(".drei")

let four = document.querySelectorAll(".four")
let fourp = document.querySelectorAll(".vier")

let five = document.querySelectorAll(".five")
let fivep = document.querySelectorAll(".funf")

let pirveli = document.querySelector(".Pirveli")
let meore = document.querySelector(".Meore")
let mesame = document.querySelector(".Mesame")
let meotxe = document.querySelector(".Meotxe")
let mexute = document.querySelector(".Mexute")

let Arrow1 = document.querySelector(".Arrow1")
let Arrow2 = document.querySelector(".Arrow2")
let Arrow3 = document.querySelector(".Arrow3")
let Arrow4 = document.querySelector(".Arrow4")
let Arrow5 = document.querySelector(".Arrow5")

let Button = document.querySelector(".Create")

let Decaf2 = document.querySelector(".Decaf2")
let Decaf = document.querySelector(".Decaf")
let Checkout = document.querySelector(".Checkout")


Rotate(Arrow1 , one)
Rotate(Arrow2 , two)
Rotate(Arrow3 , three)
Rotate(Arrow4 , four)
Rotate(Arrow5 , five)

Makecyan(one , pirveli , onep)
Makecyan(two , meore , twop)
Makecyan(three , mesame , threep)
Makecyan(four , meotxe , fourp)
Makecyan(five, mexute, fivep)


function Rotate(Arrow , number) {   
        Arrow.addEventListener("click", function () {
            Arrow.classList.toggle("Rotate")
            for (let z = 0; z < number.length; z++){
                number[z].classList.toggle("Display")
            }
            for (let j = 0; j < Arrow.length; j++) {
                if (j !== i) {
                    Arrow.classList.remove("Rotate")  
                }
                
            }
        })
    }


function Makecyan(number, number2, number3) {
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", function () {
            number[i].classList.toggle("Getcyan")
            for (let j = 0; j < number.length; j++) {
                if (j !== i) {
                    number[j].classList.remove("Getcyan")
                }
            }
            if (number[i].classList.contains("Getcyan")) {
                number2.textContent = number3[i].textContent
            } else {
                number2.textContent = "______"
            }
            
        })
    }
} 

Button.addEventListener("click", function () {
    Checkout.classList.add("Display")
    Decaf2.innerHTML = Decaf.innerHTML
})

var prod = document.querySelectorAll(".prod")
var buttonLogin = document.querySelector("#login")
var loginPage = document.querySelector("#loginPage")
buttonLogin.addEventListener("click", function () {
    if (regPage.style.display = "block") {
        var label = document.querySelectorAll(".nameI")
        for (var s = 0; s < label.length; s++) {
            label[s].style.color = "black"
        }
        var inpReg = document.querySelectorAll(".inputReg")
        for (var i in inpReg) {
            inpReg[i].value = ""
        }
        regPage.style.display = "none"
    }
    loginPage.style.display = "block"
})
var closeLogin = document.querySelector("#close")
closeLogin.addEventListener("click", function () {
    var inp1 = document.querySelector("#loginInput")
    inp1.value = ""
    var inp2 = document.querySelector("#passInput")
    inp2.value = ""
    loginPage.style.display = "none"

})

var buttonNewaccount = document.querySelector("#newAccount")
var regPage = document.querySelector("#registration")
buttonNewaccount.addEventListener("click", function () {
    if (loginPage.style.display = "block") {
        var inp1 = document.querySelector("#loginInput")
        inp1.value = ""
        var inp2 = document.querySelector("#passInput")
        inp2.value = ""
        loginPage.style.display = "none"
    }
    loginPage.style.display = "none"
    regPage.style.display = "block"
})
var closeReg = document.querySelector("#closeReg")
closeReg.addEventListener("click", function () {
    regPage.style.display = "none"
    var inpReg = document.querySelectorAll(".inputReg")
    for (var i in inpReg) {
        inpReg[i].value = ""
    }
    var label = document.querySelectorAll(".nameI")
    for (var s = 0; s < label.length; s++) {
        label[s].style.color = "black"
    }

})
var filterPage = document.querySelector("#filterPage")
var closeFilter = document.querySelector("#closeFilter")
var filterIcon = document.querySelector("#filterIcon")
filterIcon.addEventListener("click", function () {
    filterPage.style.display = "block"
    if (operatorPage.style.display == "block") {
        operatorPage.style.display = "none"
        operatorPage.style.display = "none"
        var ul = document.querySelector(".ulOperator")
        operatorPage.removeChild(ul)
    }

})
closeFilter.addEventListener("click", function () {
    filterInputMax.value = ""
    filterInputMin.value = ""
    filterPage.style.display = "none"
})
var operatorIcon = document.querySelector("#operatoricon")
var operatorPage = document.querySelector("#operatorpage")
operatorIcon.addEventListener("click", function () {
    filterPage.style.display = "none"
    if (operatorPage.style.display == "none" || operatorPage.style.display == "") {
        operatorPage.style.display = "block"
        setTimeout(function () {
            var ul = document.createElement("ul")
            var li = document.createElement("li")
            li.innerHTML = "Ինչով կարող ենք օգնել"
            ul.classList = "ulOperator"
            operatorPage.appendChild(ul)
            ul.appendChild(li)
        }, 700)

    }
    else if (operatorPage.style.display == "block") {
        operatorPage.style.display = "none"
        var ul = document.querySelector(".ulOperator")
        operatorPage.removeChild(ul)
    }
})


var regInputClass = document.querySelectorAll(".divReg")
var inputRegName = document.querySelectorAll(".inputReg")
var regLabel = document.querySelectorAll(".nameI")
inputRegName[0].addEventListener("keyup", function () {
    if (inputRegName[0].value.includes("!") ||
        inputRegName[0].value.includes("@") ||
        inputRegName[0].value.includes("#") ||
        inputRegName[0].value.includes("$") ||
        inputRegName[0].value.includes("%") ||
        inputRegName[0].value.includes("^")
    ) {
        regLabel[0].style.color = "red"
    }
    else {
        regLabel[0].style.color = "black"
    }
})
inputRegName[1].addEventListener("keyup", function () {
    if (inputRegName[1].value.includes("@") || inputRegName[1].value.startsWith("+")) {
        regLabel[1].style.color = "black"
    }
    else if ((inputRegName[1].value == "")) {
        regLabel[1].style.color = "black"
    }
    else {

        regLabel[1].style.color = "red"
    }
})
inputRegName[2].addEventListener("keyup", function () {
    if (inputRegName[2].value.includes("!") || inputRegName[2].value.includes("@") ||
        inputRegName[2].value.includes("#") || inputRegName[2].value.includes("$")
    ) {
        regLabel[2].style.color = "black"
    }
    else if ((inputRegName[2].value == "")) {
        regLabel[2].style.color = "black"
    }
    else {
        regLabel[2].style.color = "red"
    }
})


//////
var closeInfDiv = document.querySelector("#closeInfDiv")
closeInfDiv.addEventListener("click", function () {
    prodInformation.style.display = "none"
})

var prod = document.querySelectorAll(".prod")
var buttonLogin = document.querySelector("#login")
var loginPage = document.querySelector("#loginPage")
//////////////////
var info = document.querySelector("#info")
var prodInformation = document.querySelector("#prodInformation")
var imageDiv = document.querySelector("#imageDiv")
var right1 = document.querySelector("#right1")
var left1 = document.querySelector("#left1")
function detali(obj) {
    prodInformation.style.display = "block"
    var imageDetal = document.createElement("img")
    var arrayImg = []
    arrayImg.push(obj.picture)
    arrayImg.push(obj.picture2)
    imageDetal.src = arrayImg[0]
    var index1 = 0
    
    right1.addEventListener("click", function () {
        if (arrayImg[index1 + 1] != undefined) {
            index1 += 1
            imageDetal.src = arrayImg[index1]
        }
    })
    left1.addEventListener("click", function () {
        if (arrayImg[index1 - 1] != undefined) {
            index1 -= 1
            imageDetal.src = arrayImg[index1]
        }
    })

    imageDetal.classList = "imgf"
    imageDiv.appendChild(imageDetal)
    info.innerHTML = ""
    if (obj.type != undefined) {
        var paragraf1 = document.createElement("p")
        paragraf1.innerHTML = obj.type
        paragraf1.style.marginLeft = "10px"
        paragraf1.style.color = "#7A32FF"
        paragraf1.style.fontSize = "35px"
        paragraf1.style.marginTop = "100px"
        paragraf1.style.fontWeight = 900
        info.appendChild(paragraf1)
    }
    var paragraf2 = document.createElement("p")
    paragraf2.style.marginLeft = "10px"
    paragraf2.style.color = "#7A32FF"
    paragraf2.style.fontSize = "25px"
    paragraf2.style.fontWeight = 700
    if (obj.type == undefined) {
        paragraf2.style.marginTop = "100px"
    }
    paragraf2.innerHTML = obj.product
    var paragraf3 = document.createElement("p")
    paragraf3.style.marginLeft = "10px"
    paragraf3.style.color = "#7A32FF"
    paragraf3.style.fontSize = "20px"
    paragraf3.style.fontWeight = "500"
    paragraf3.innerHTML = `Նկարակություն:<br>${obj.information}`
    var moneyDetalDiv = document.createElement("div")
    moneyDetalDiv.classList = "moneyDetalDiv"
    var moneyDetalPar = document.createElement("p")
    moneyDetalPar.classList = "moneyDetalPar"
    moneyDetalPar.innerHTML = `${obj.money} դրամ`
    info.appendChild(paragraf2)
    info.appendChild(paragraf3)
    info.appendChild(moneyDetalDiv)
    moneyDetalDiv.appendChild(moneyDetalPar)

}
var filterSortButton = document.querySelector("#filterSortButton")
function filterFunction(typeFill, productName) {
    typeFill.addEventListener("click", function () {
        prodInformation.style.display = "none"
        var prod = document.querySelectorAll(".prod")
        for (var i = 0; i < prod.length; i++) {
            prod[i].style = undefined
        }
        $(this).css({
            "font-weight": "900",
            "color": "#523886"
        });




        var filteredPrj = products.filter(function (productees) {
            return productees.product.includes(productName)
        })

        var goods = document.querySelector("#goods")

        goods.innerHTML = ""
        productFunciton(filteredPrj)


        filterSortButton.addEventListener("click", function () {

            var fillSort = filteredPrj.sort(function (a, b) {
                return a.money - b.money
            })
            if (fillSort[0] == undefined) {
                goods.innerHTML = ""
                var par = document.createElement("p")
                par.innerHTML = "Ապրանք չի գտնվել"
                par.classList = "searchNoneClass"
                goods.appendChild(par)
            }
            else {
                goods.innerHTML = ""
                productFunciton(fillSort)
            }

        })

        filterButton.addEventListener("click", function () {
            filterDivFilter = ""
            var arr = []
            for (var i = 0; i < prod.length; i++) {
                if (prod[i].style.fontWeight == "900") {
                    arr.push(true)

                }
                else {
                    arr.push(false)
                }

            }
            if (arr.includes(true) == true) {
                if (filterInputMin.value == "" && filterInputMax.value != "") {
                    var filterDivFilter = filteredPrj.filter(function (filter1) {
                        return filter1.money >= 0 && filter1.money <= parseInt(filterInputMax.value)
                    })
                    if (filterDivFilter[0] == undefined) {
                        goods.innerHTML = ""
                        var par = document.createElement("p")
                        par.innerHTML = "Ապրանք չի գտնվել"
                        par.classList = "searchNoneClass"
                        goods.appendChild(par)
                    }
                    else {
                        goods.innerHTML = ""
                        productFunciton(filterDivFilter)
                    }

                }
                else if (filterInputMax.value == "" && filterInputMin.value != "") {
                    var filterDivFilter = filteredPrj.filter(function (filter1) {
                        return filter1.money >= parseInt(filterInputMin.value) && filter1.money <= Number.MAX_VALUE
                    })
                    if (filterDivFilter[0] == undefined) {
                        goods.innerHTML = ""
                        var par = document.createElement("p")
                        par.innerHTML = "Ապրանք չի գտնվել"
                        par.classList = "searchNoneClass"
                        goods.appendChild(par)
                    }
                    else {
                        goods.innerHTML = ""
                        productFunciton(filterDivFilter)
                    }

                }
                else if (filterInputMin.value == "" && filterInputMax.value == "") {
                    goods.innerHTML = ""
                    productFunciton(filteredPrj)
                }
                else {
                    var filterDivFilter = filteredPrj.filter(function (filter1) {
                        return filter1.money >= parseInt(filterInputMin.value) && filter1.money <= parseInt(filterInputMax.value)
                    })
                    if (filterDivFilter[0] == undefined) {
                        goods.innerHTML = ""
                        var par = document.createElement("p")
                        par.innerHTML = "Ապրանք չի գտնվել"
                        par.classList = "searchNoneClass"
                        goods.appendChild(par)
                    }
                    else {
                        goods.innerHTML = ""
                        productFunciton(filterDivFilter)
                    }

                }
                if (filterInputMax.value != "" || filterInputMin.value != "") {

                    filterSortButton.addEventListener("click", function () {
                        var fillSort = filterDivFilter.sort(function (a, b) {
                            return a.money - b.money
                        })
                        if (fillSort[0] == undefined) {
                            goods.innerHTML = ""
                            var par = document.createElement("p")
                            par.innerHTML = "Ապրանք չի գտնվել"
                            par.classList = "searchNoneClass"
                            goods.appendChild(par)
                        }
                        else {
                            goods.innerHTML = ""
                            productFunciton(fillSort)
                        }


                    })
                }
                else if (filterInputMax.value == "" && filterInputMin.value == "") {

                    filterSortButton.addEventListener("click", function () {
                        var fillSort = filteredPrj.sort(function (a, b) {
                            return a.money - b.money
                        })
                        if (fillSort[0] == undefined) {
                            goods.innerHTML = ""
                            var par = document.createElement("p")
                            par.innerHTML = "Ապրանք չի գտնվել"
                            par.classList = "searchNoneClass"
                            goods.appendChild(par)
                        }
                        else {
                            goods.innerHTML = ""
                            productFunciton(fillSort)
                        }


                    })
                }
            }
        })

    })

}
function productFunciton(filterProduct) {
    for (let prod of filterProduct) {
        var goods = document.querySelector("#goods")
        var product_s = document.createElement("div")
        product_s.classList = "product_s"
        goods.appendChild(product_s)
        var img = document.createElement("img")
        img.src = prod.picture
        img.classList = "imagePicture"
        product_s.appendChild(img)
        if (prod.type != undefined) {
            var productProduct = document.createElement("h1")
            productProduct.innerHTML = prod.type
            productProduct.classList = "productType"
            product_s.appendChild(productProduct)
        }
        var productType = document.createElement("p")
        productType.innerHTML = prod.product
        productType.classList = "productProduct"
        product_s.appendChild(productType)
        var productMoneyDiv = document.createElement("div")
        productMoneyDiv.classList = "productMoney"
        productMoneyDiv.innerHTML = `${prod.money} Դրամ`
        product_s.appendChild(productMoneyDiv)
    }

    var product_s = document.querySelectorAll(".product_s")
    for (var i = 0; i < product_s.length; i++) {
        product_s[i].addEventListener("click", function () {
            var elmThis = this.innerHTML
            var asd = filterProduct.filter(function (a) {
                return elmThis.includes(a.picture)
            })
            detali(asd[0])
        })

    }
}

var filterButton = document.querySelector("#filterBtt")
var filterInputMin = document.querySelector("#filterInput1")
var filterInputMax = document.querySelector("#filterInput2")


function randomProduct() {
    var arrProduct = []
    var arr1Product = []
    for (i = 0; i < products.length * 2; i++) {
        var randomNumber = Math.floor(Math.random() * ((products.length - 1) - 0) + 1)
        if (arrProduct.includes(randomNumber)) {
            continue
        }
        else {
            var goods = document.querySelector("#goods")
            var product_s = document.createElement("div")
            product_s.classList = "product_s"
            goods.appendChild(product_s)
            var img = document.createElement("img")
            img.src = products[randomNumber].picture
            img.classList = "imagePicture"
            product_s.appendChild(img)
            if (products[randomNumber].type != undefined) {
                var productProduct = document.createElement("h1")
                productProduct.innerHTML = products[randomNumber].type
                productProduct.classList = "productType"
                product_s.appendChild(productProduct)
            }

            var productType = document.createElement("p")
            productType.innerHTML = products[randomNumber].product
            productType.classList = "productProduct"
            product_s.appendChild(productType)
            var productMoneyDiv = document.createElement("div")
            productMoneyDiv.classList = "productMoney"
            productMoneyDiv.innerHTML = `${products[randomNumber].money} Դրամ`
            product_s.appendChild(productMoneyDiv)
            arrProduct.push(randomNumber)
            arr1Product.push(products[randomNumber])

        }

    }

    var product_s = document.querySelectorAll(".product_s")
    for (var i = 0; i < product_s.length; i++) {
        product_s[i].addEventListener("click", function () {
            var elmThis = this.innerHTML
            var asd = arr1Product.filter(function (a) {
                return elmThis.includes(a.picture)
            })

            detali(asd[0])
        })

    }
    return arr1Product
}
filterSortButton.addEventListener("click", function () {
    if (filterInputMin.value == "" && filterInputMax.value == "") {
        var fillSort = randomProduct().sort(function (a, b) {
            return a.money - b.money
        })
        if (fillSort[0] == undefined) {
            goods.innerHTML = ""
            var par = document.createElement("p")
            par.innerHTML = "Ապրանք չի գտնվել"
            par.classList = "searchNoneClass"
            goods.appendChild(par)
        }
        else {
            goods.innerHTML = ""
            productFunciton(fillSort)
        }

    }
})

var filterButton = document.querySelector("#filterBtt")
filterButton.addEventListener("click", function () {
    var arr = []
    for (var i = 0; i < prod.length; i++) {
        if (prod[i].style.fontWeight == "900") {
            arr.push(true)

        }
        else {
            arr.push(false)
        }

    }
    if (arr.includes(true) == false) {


        if (filterInputMin.value == "" && filterInputMax.value != "") {
            var filterDivFilter = randomProduct().filter(function (filter1) {
                return filter1.money >= 0 && filter1.money <= parseInt(filterInputMax.value)
            })
            if (filterDivFilter[0] == undefined) {
                goods.innerHTML = ""

                var par = document.createElement("p")
                par.innerHTML = "Ապրանք չի գտնվել"
                par.classList = "searchNoneClass"
                goods.appendChild(par)
            }
            else {
                goods.innerHTML = ""
                productFunciton(filterDivFilter)
            }
        }
        else if (filterInputMax.value == "" && filterInputMin.value != "") {
            var filterDivFilter = randomProduct().filter(function (filter1) {
                return filter1.money >= parseInt(filterInputMin.value) && filter1.money <= Number.MAX_SAFE_INTEGER
            })
            if (filterDivFilter[0] == undefined) {
                goods.innerHTML = ""


                var par = document.createElement("p")
                par.innerHTML = "Ապրանք չի գտնվել"
                par.classList = "searchNoneClass"
                goods.appendChild(par)
            }
            else {
                goods.innerHTML = ""
                productFunciton(filterDivFilter)
            }

        }

        else if (filterInputMax.value == "" && filterInputMin.value == "") {


            goods.innerHTML = ""
            productFunciton(randomProduct())





        }

        else {
            var filterDivFilter = randomProduct().filter(function (filter1) {
                return filter1.money >= parseInt(filterInputMin.value) && filter1.money <= parseInt(filterInputMax.value)
            })
            if (filterDivFilter[0] == undefined) {
                goods.innerHTML = ""
                var par = document.createElement("p")
                par.innerHTML = "Ապրանք չի գտնվել"
                par.classList = "searchNoneClass"
                goods.appendChild(par)
            }
            else {
                goods.innerHTML = ""
                productFunciton(filterDivFilter)
            }

        }

        filterSortButton.addEventListener("click", function () {
            if (filterInputMax.value != "" || filterInputMin.value != "") {
                var fillSort = filterDivFilter.sort(function (a, b) {
                    return a.money - b.money
                })
                if (fillSort[0] == undefined) {
                    goods.innerHTML = ""
                    var par = document.createElement("p")
                    par.innerHTML = "Ապրանք չի գտնվել"
                    par.classList = "searchNoneClass"
                    goods.appendChild(par)
                }
                else {
                    goods.innerHTML = ""
                    productFunciton(fillSort)
                }

            }
        })
    }
})


function colorFunc(prod) {
    for (var i = 0; i < classProd.length; i++) {
        classProd[i].style.color = "black"
        classProd[i].style.fontWeight = "500"
    }
    prod.style.color = "#523886"
    prod.style.fontSize = "21px"
    prod.style.fontWeight = "900"
}

randomProduct()
var classProd = document.querySelectorAll(".prod")
var watch = document.querySelector("#watch")
filterFunction(watch, "Ժամացույց")
// productType
var phone = document.querySelector("#phone")
filterFunction(phone, "Հեռախոս")

var comp = document.querySelector("#comp")
filterFunction(comp, "Համակարգիչ")

var auto = document.querySelector("#auto")
filterFunction(auto, "Մեքենա")
var dinamic = document.querySelector("#dinamic")
filterFunction(dinamic, "Բարձրախոս")
var sport = document.querySelector("#sport")
filterFunction(sport, "Սպորտ")
//////
var goods = document.querySelector("#goods")
var searchInput = document.querySelector("#searchInput")
var searchButton = document.querySelector("#searchButton")

searchInput.addEventListener("keyup", function () {
    for (var i = 0; i < classProd.length; i++) {
        classProd[i].style.color = "black"
        classProd[i].style.fontWeight = "500"
    }
    if (searchInput.value == "") {
        for (var i = 0; i < prod.length; i++) {
            prod[i].style = undefined
        }
        goods.innerHTML = ""
        randomProduct()
    }
    else if (searchInput.value != "") {
        var filterProduct = products.filter(function (filterPrd) {
            if (filterPrd.type != undefined) {
                return `${filterPrd.product}${filterPrd.type}`.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())
            }
            else if (filterPrd.type == undefined) {
                return filterPrd.product.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())
            }
        })
        if (filterProduct[0] == undefined) {
            randomProduct()
        }
        else {
            goods.innerHTML = ""
            productFunciton(filterProduct)
            goods.classList = "goods"
            var product_s = document.querySelectorAll(".product_s")
            for (var i = 0; i < product_s.length; i++) {
                product_s[i].addEventListener("click", function () {
                    var elmThis = this.innerHTML
                    var asd = filterProduct.filter(function (a) {
                        return elmThis.includes(a.picture)
                    })

                    detali(asd[0])
                })

            }
        }

    }
})

var searchButton = document.querySelector("#searchButton")
searchButton.addEventListener("click", function () {
    for (var i = 0; i < prod.length; i++) {
        prod[i].style = undefined
    }
    if (searchInput.value == "") {
        goods.innerHTML = ""
        randomProduct()
    }
    else if (searchInput.value != "") {
        var filterProduct = products.filter(function (filterPrd) {
            return `${filterPrd.product}${filterPrd.type}`.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())

        })
        if (filterProduct[0] == undefined) {
            goods.innerHTML = `<p>"${searchInput.value}" որոնման արդյունքում ոչինչ չի գտնվել</p>`
            goods.classList = "searchNoneClass"
        }
        else {
            goods.innerHTML = ""
            goods.classList = "goods"
            productFunciton(filterProduct)
        }
    }
})
var logoButton = document.querySelector("#logoimg")
logoButton.addEventListener("click", function () {
    var prod = document.querySelectorAll(".prod")
    for (var i = 0; i < prod.length; i++) {
        prod[i].style = undefined
    }
    filterPage.style.display = "none"
    loginPage.style.display = "none"
    regPage.style.display = "none"
    prodInformation.style.display = "none"
    filterInputMax.value = ""
    filterInputMin.value = ""
    goods.innerHTML = ""
    randomProduct()


})

console.log();

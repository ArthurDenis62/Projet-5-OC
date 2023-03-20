let searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")
console.log(id)

// Récupérer ID depuis l'URL
fetch(`http://localhost:3000/api/products/${id}`)
    .then(function (res) {
        return res.json()
    })
    .then(product => {
        console.log(product)
        document.querySelector(".item__img")
        .innerHTML = `<img src="${product.imageUrl}" alt="${product.altText}">`
        document.querySelector('#title')
        .innerText = product.name
        document.querySelector('#price')
        .innerText = product.price
        document.querySelector('#description')
        .innerText = product.description
        for (let i = 0; i < product.colors.length; i++) {
            document.querySelector('#colors')
            .innerHTML += `<option value="${product.colors[i]}">${product.colors[i]}</option>`
        }
    })

// Ecouter le click sur ajouter au panier, donc ajouter le produit au panier
const addToCart = document.getElementById("addToCart")
addToCart.addEventListener("click", () => {
    if (document.getElementById("colors").value.length === 0) {
        alert("Veillez choisir une couleur")
        return false
    }
    const product = {
        quantity : document.getElementById("quantity").value,
        color : document.getElementById("colors").value,
        id : id
    }

let productLocalStorage = []
    if (localStorage.getItem("cart") !== null) {
        productLocalStorage = JSON.parse(localStorage.getItem("cart"))
        /*  Vérifier dans  addProductLocalStorage que y'a pas un produit qui à le même ID, la même couleur, que le addProduct  */
        const index = productLocalStorage.findIndex(elt => elt.id === product.id && elt.color === product.color)
        if (index > -1) {
            productLocalStorage[index].quantity = parseInt(productLocalStorage[index].quantity) + parseInt(product.quantity)
        } else {
            productLocalStorage.push(product)
        }
        localStorage.setItem("cart", JSON.stringify(productLocalStorage))
    } else {
        productLocalStorage.push(product)
        localStorage.setItem("cart", JSON.stringify(productLocalStorage))
    }
})
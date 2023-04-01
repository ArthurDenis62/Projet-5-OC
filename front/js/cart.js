/* Récupérer tout les produits dans le panier  */
const url = ("http://localhost:3000/api/products")
const container = document.getElementById("cart__items")
const cart = JSON.parse(localStorage.getItem("cart"))
const getArticles = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
        for (const index in cart) { // boucle tout les produits
            console.log(cart[index])
            const product = data.find(elt => elt._id === cart[index].id)
            console.log(product)
            container.innerHTML += `<article class="cart__item" data-id="${product._id}" data-color="${product.color}">
                                        <div class="cart__item__img">
                                            <img src="${product.imageUrl}" alt="${product.altText}">
                                        </div>
                                        <div class="cart__item__content">
                                            <div class="cart__item__content__description">
                                                <h2>${product.name}</h2>
                                                <p>${cart[index].color}</p>
                                                <p>${product.price}€</p>
                                            </div>
                                            <div class="cart__item__content__settings">
                                                <div class="cart__item__content__settings__quantity">
                                                    <p>Qté : </p>
                                                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[index].quantity}">
                                                </div>
                                                <div class="cart__item__content__settings__delete">
                                                    <p class="deleteItem">Supprimer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>`
        }
        displayTotalPrices(cart, data)
        deleteCanap(data)
        quantityNbr()
    })
}

function displayTotalObjects (cart) {
    let total = 0
    for (const product of cart) {
        total += parseInt(product.quantity)
    }
    document.getElementById("totalQuantity").innerText = total
}

function displayTotalPrices (cart, products) {
    let total = 0
    for (const productCart of cart) {
        const product = products.find(elt => elt._id === productCart.id)
        total += product.price * parseInt(productCart.quantity)  
    console.log(product)
    }
    document.getElementById("totalPrice").innerText = total
}

displayTotalObjects(cart)

getArticles()

function quantityNbr () {
    const quantityInputs = Array.from(document.querySelectorAll('.itemQuantity'))
    quantityInputs.forEach((entry, index) => {
        entry.addEventListener('change', (e) => {
            console.log(e.target.value)
            //Récuperer le localStorage
            //Dans le tableau du localStorage (cart), à l'index on change la quantity (ligne 70)
            //Re sauvegarder le localStorage et on met a jour les totaux
        })
    })
}

function deleteCanap (products) {
    const deleteButtons = Array.from(document.querySelectorAll(".deleteItem"))
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('cart'))
            cart.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(cart))
            button.closest('article').remove()
            displayTotalObjects(cart)
            displayTotalPrices(cart, products)
        })
    })
}

/* Afficher la liste des produits dans le panier */
/* Pouvoir modifier la quantité */
/* Supprimer les éléments du panier */
/* Récupérer les données du formulaire */
// formData

/* Valider les données */
/* Envoyer à l'API */
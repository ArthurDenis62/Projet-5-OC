/* Récupérer tout les produits dans le panier  */
const getArticles = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
        for(product in data) { // boucle tout les produits
            container.innerHTML += `<article class="cart__item" data-id="${data[product].id}" data-color="{${data[product].color}">
                                        <div class="cart__item__img">
                                            <img src="${data[product].imageUrl}" alt="${data[product].altText}">
                                        </div>
                                        <div class="cart__item__content">
                                            <div class="cart__item__content__description">
                                                <h2>${data[product].name}</h2>
                                                <p>${data[product].color}</p>
                                                <p>${data[product].price}€</p>
                                            </div>
                                            <div class="cart__item__content__settings">
                                                <div class="cart__item__content__settings__quantity">
                                                    <p>${data[product].quantity}</p>
                                                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                                                </div>
                                                <div class="cart__item__content__settings__delete">
                                                    <p class="deleteItem">Supprimer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>`
        }
    })
}

/* Afficher la liste des produits dans le panier */
/* Pouvoir modifier la quantité */
/* Supprimer les éléments du panier */
/* Récupérer les données du formulaire */
/* Valider les données */
/* Envoyer à l'API */
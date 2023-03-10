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

const url = ("http://localhost:3000/api/products") // Récupère l'API
const container = document.getElementById("items") // Récupère l'élément 'items'

const getArticles = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
        for(product in data) { // boucle tout les produits
            container.innerHTML += `<a href="./product.html?id=${data[product]._id}">
            <article>
              <img src="${data[product].imageUrl}" alt="${data[product].altText}">
              <h3 class="productName">${data[product].name}</h3>
              <p class="productDescription">${data[product].description}</p>
            </article>
          </a>`
        }
    })
}

getArticles() // Appel la fonction
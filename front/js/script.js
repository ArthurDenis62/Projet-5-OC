const displayArticle = (product) => {
  const container = document.getElementById("items") // Récupère l'élément 'items'
  container.innerHTML += `<a href="./product.html?id=${product._id}">
  <article>
    <img src="${product.imageUrl}" alt="${product.altText}">
    <h3 class="productName">${product.name}</h3>
    <p class="productDescription">${product.description}</p>
  </article>
</a>`
}

const getArticles = () => {
    fetch("http://localhost:3000/api/products")
    .then( res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        for(product of data) { // boucle tout les produits
           displayArticle(product)
        }
    })
}

getArticles() // Appel la fonction
const response = await fetch("https://localhost:3000/api/products");
const data = await response.json();
console.log(data);

const.forEach(elt => {
    itemsContainer.innerHTML += `<a href="./product.html?id=${elt._id}">
    <article>
        <img src="${elt.imageUrl}" alt="${elt.altTxt}">
        <h3 class="productName">${elt.name}</h3>
        <p class="productDescription">${elt.description}</p>
    </article>
    </a>`
});
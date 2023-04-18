let searchParams = new URLSearchParams(window.location.search)
const orderId = searchParams.get("orderId")

document.getElementById("orderId")
.innerHTML = `<span id="orderId">${orderId}</span>`
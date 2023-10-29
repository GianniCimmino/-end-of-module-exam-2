const APIURL = "https://striveschool-api.herokuapp.com/api";

const BEARERTOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNlNDA0OGQ4YmNiNTAwMTQyZWNmMTQiLCJpYXQiOjE2OTg1Nzg1MDQsImV4cCI6MTY5OTc4ODEwNH0.20PlAN_CSO--vFS7KgwTRGHbIXi3H_c0uJvjFU_shqk";

async function getProducts() {
  const response = await fetch(`${APIURL}/product/`, {
    headers: { Authorization: BEARERTOKEN },
  });
  const products = await response.json();

  return products;
}

async function getProduct(id) {
  const response = await fetch(`${APIURL}/product/${id}`, {
    headers: { Authorization: BEARERTOKEN },
  });

  const product = await response.json();

  return product;
}

async function addProduct(product) {
  response = await fetch(`${APIURL}/product`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: { Authorization: BEARERTOKEN },
  });
  console.log(response);
}

async function updateProduct(product, id) {
  await fetch(`${APIURL}/product/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: { Authorization: BEARERTOKEN },
  });
}

async function deleteProduct(id) {
  await fetch(`${APIURL}/product/${id}`, {
    method: "DELETE",
    headers: { Authorization: BEARERTOKEN },
  });
}

const queryParams = window.location.search;
const URLparams = new URLSearchParams(queryParams);
const productid = URLparams.get("id");

if (!productid) {
  window.location.href = "index.html";
}

getProduct(productid).then(
  (product) =>
    (document.getElementById(
      "product"
    ).innerHTML += `<div id="product" class="container">
      <h1 class="my-4">${product.name}</h1>
      <div class="row">
        <div class="col-lg-6">
          <img
            src="${product.imageUrl}"
            class="img-fluid"
            alt="Immagine 1"
          />
        </div>
        <div class="col-lg-6">
          <h2>Descrizione</h2>
          <p>${product.description}</p>
        </div>
        <div class="col-lg-6">
        <h2>Prezzo</h2>
        <p>${product.price} Euro</p></div>
      </div>`)
);

//

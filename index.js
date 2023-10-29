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

getProducts().then((productList) =>
  productList.map(
    (product) =>
      (document.getElementById("card").innerHTML += `<div class="col px-2 my-3">
        <div class="card" style="width: 13rem">
          <img
            src="${product.imageUrl}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fs-6">${product.name}</h5>
            <p class="card-text">${product.brand}</p>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-info">Compralo ora!</a>
            <a href="productpage.html?id=${product._id}" class="btn btn-info">Visualizza</a>
          </div>
        </div>
      </div>`)
  )
);

// Creare classe prodotto per rappresentare le informazioni del prodotto (quelle di base che ci sono nell'esercizio).
//Creare pagina per inserimento prodotto.

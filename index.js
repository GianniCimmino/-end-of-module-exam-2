const APIURL = "https://striveschool-api.herokuapp.com/api";

const BEARERTOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJiYjg1OGZiYTQ1YzAwMTllMTIyYzMiLCJpYXQiOjE2OTczNjQwNTYsImV4cCI6MTY5ODU3MzY1Nn0.vyUG742uGxXZ4kS3jtVKIDP5zQUThcQoQczqx33Bz2Y";

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

// addProduct({
//   name: "Lies of P",
//   description: "Meraviglioso gioco",
//   brand: "Konami",
//   imageUrl:
//     "https://gaming-cdn.com/images/products/8855/616x353/lies-of-p-pc-gioco-steam-cover.jpg?v=1695052146",
//   price: 60,
// }).then(() => {
//     getProducts().then((products) => console.log(products));
// });

getProducts().then((products) => console.log(products));

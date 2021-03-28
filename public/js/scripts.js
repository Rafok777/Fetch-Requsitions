let showBtn = $(".show-products");
let list = $(".product-list");
let addForm = $(".add-product-form");
let updateForm = $(".update-product-form");
let deleteForm = $(".delete-product-form");

showBtn.on("click", () => {
  list.empty();
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        list.append(
          `<li>${product.id} - ${product.name} - $${product.price}</li>`
        );
      });
    });
});

addForm.on("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: $("#add-product-name").val(),
      price: $("#add-product-price").val(),
    }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data));
});

updateForm.on("submit", (e) => {
  e.preventDefault();
  let id = $("#update-product-id").val();
  fetch("http://localhost:3000/products/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      price: $("#update-product-price").val(),
    }),
  })
    .then((response) => response.text())
    .then((data) => console.log(data));
});

deleteForm.on("submit", (e) => {
  e.preventDefault();
  let id = $("#delete-product-id").val();
  fetch("http://localhost:3000/products/" + id, {
    method: "DELETE",
  })
    .then((response) => response.text())
    .then((data) => console.log(data));
});

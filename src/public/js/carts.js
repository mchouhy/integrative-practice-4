document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cartId = this.getAttribute("data-cart-id");
      const productId = this.getAttribute("data-product-id");
      deleteProductById(cartId, productId);
    });
  });
});

function deleteProductById(cartId, productId) {
  fetch(`/api/carts/${cartId}/product/${productId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }
      response.json();
      location.reload();
    })
    .then((data) => {
      console.log(data);
      // Aquí puedes actualizar la interfaz de usuario para reflejar la eliminación
      // Por ejemplo, podrías eliminar el elemento del DOM que representa el producto eliminado
    })
    .catch((error) => {
      console.error(error);
    });
}

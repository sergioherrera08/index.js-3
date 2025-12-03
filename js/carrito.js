Carrito.js

export const agregarProducto = (prod, array) => {
  array.push(prod);
  console.log("Agregado");
};

export const eliminarProducto = (nombreProducto, array) => {
  // Aseguramos que ambos nombres se comparen en minúsculas
  let indiceProducto = array.findIndex(
    (prod) => prod.nombre.toLowerCase() === nombreProducto.toLowerCase()
  );

  if (indiceProducto !== -1) {
    array.splice(indiceProducto, 1);
    console.log("Eliminado");
  } else {
    console.log("Producto no encontrado");
  }
};

export const vaciarCarrito = (array) => {
  array.splice(0, array.length);

  //Otra forma sencilla de hacerlo es volver la longitud a cero
  //   array.length = 0;
};
export async function getData(categorias) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`
  );
  const data = await response.json();
  return data.results;
}

export async function getItem(producto) {
  const response = await fetch(
    `https://api.mercadolibre.com/items/${producto}`
  );
  const data = await response.json();
  return data.results;
}

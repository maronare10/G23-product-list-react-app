export const fetchProducts = async () => {
  try {
    const url = 'https://dummyjson.com/products'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data

  } catch (error) {
    console.log(error);
  }
}
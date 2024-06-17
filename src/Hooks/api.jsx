export async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Propagar el error para manejarlo en el componente que use esta función
    }
  }
  


const BASE_URL = "http://localhost:3000"; 


export async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; 
  }
}


export async function addProduct(newProduct, token) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      throw new Error("Error adding product");
    }
    const addedProduct = await response.json();
    return addedProduct;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error; 
  }
}


export async function updateProduct(productId, updatedProduct, token) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedProduct),
    });
    if (!response.ok) {
      throw new Error("Error updating product");
    }
    const updatedProductData = await response.json();
    return updatedProductData;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}


export async function deleteProduct(productId, token) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error deleting product");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error; 
  }
}

export async function fetchOrders() {
  try {
    const response = await fetch(`${BASE_URL}/orders`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}


export async function addOrder(newOrder, token) {
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newOrder),
    });

    const responseBody = await response.text();
    console.log("Response status:", response.status);
    console.log("Response body:", responseBody);

    if (!response.ok) {
      throw new Error("Error adding order: " + responseBody);
    }
    const addedOrder = JSON.parse(responseBody);
    return addedOrder;
  } catch (error) {
    console.error("Error adding order:", error.message);
    throw error;
  }
}


export async function updateOrder(orderId, updatedOrder, token) {
  try {
    const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedOrder),
    });
    if (!response.ok) {
      throw new Error("Error updating order");
    }
    const updatedOrderData = await response.json();
    return updatedOrderData;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
}


export async function deleteOrder(orderId, token) {
  try {
    const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error deleting order");
    }
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
}

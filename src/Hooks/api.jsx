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
export async function fetchCategory() {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function addedCategory(newProduct, token) {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCategory),
    });
    if (!response.ok) {
      throw new Error("Error adding product");
    }
    const addCategory = await response.json();
    return addCategory;
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
}
export async function deleteCategory(productId, token) {
  try {
    const response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error deleting category");
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
}

export async function updateCategory(categoryId, updatedCategory, token) {
  try {
    const response = await fetch(`${BASE_URL}/categories/${categoryId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedCategory),
    });
    if (!response.ok) {
      throw new Error("Error updating category");
    }
    const updatedCategoryData = await response.json();
    return updatedCategoryData;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
}

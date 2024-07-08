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

    const responseBody = await response.text();
    console.log("Response status:", response.status);
    console.log("Response body:", responseBody);

    if (!response.ok) {
      throw new Error("Error adding product: " + responseBody);
    }
    const addedProduct = JSON.parse(responseBody);
    return addedProduct;
  } catch (error) {
    console.error("Error adding product:", error.message);
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

export async function addCategory(newCategory, token) {
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
      throw new Error("Error adding category");
    }
    const addedCategory = await response.json();
    return addedCategory;
  } catch (error) {
    console.error("Error adding category:", error);
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

export async function deleteCategory(categoryId, token) {
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

export async function fetchUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function addUser(newUser, token) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      throw new Error("Error adding user");
    }
    const addedUser = await response.json();
    return addedUser;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

export async function updateUser(userId, updatedUser, token) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUser),
    });
    if (!response.ok) {
      throw new Error("Error updating user");
    }
    const updatedUserData = await response.json();
    return updatedUserData;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

export async function deleteUser(userId, token) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error deleting user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

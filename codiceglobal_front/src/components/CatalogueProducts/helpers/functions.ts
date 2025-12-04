import type { Product } from "../interfaces/api/Products";

export const handleDelete = async (
  product: Product,
  deleteProduct: () => Promise<void>
) => {
  const confirmed = confirm(
    `¿Estás seguro de eliminar el producto "${product.title}"?`
  );
  if (!confirmed) return;

  try {
    await deleteProduct();
  } catch (err) {
    console.error(err);
    alert("Error eliminando el producto.");
  }
};

import { useCart } from "react-use-cart";

const ProductList = () => {
  const { addItem } = useCart();

  const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 15 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React, { useState } from 'react';

const ProductSorting = () => {
  // Initial list of products
  const initialProducts = [
    { id: 1, name: 'Coffee Beans', price: 15 },
    { id: 2, name: 'Espresso Machine', price: 250 },
    { id: 3, name: 'Coffee Grinder', price: 60 },
    { id: 4, name: 'Milk Frother', price: 30 },
    { id: 5, name: 'Coffee Mug', price: 10 },
  ];

  // State to manage products
  const [products, setProducts] = useState(initialProducts);

  // Function to sort products by name
  const sortByName = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setProducts(sorted);
  };

  // Function to sort products by price
  const sortByPrice = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setProducts(sorted);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => sortByName('asc')}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Sort by Name (Asc)
        </button>
        <button
          onClick={() => sortByName('desc')}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Sort by Name (Desc)
        </button>
        <button
          onClick={() => sortByPrice('asc')}
          className="p-2 bg-green-500 text-white rounded"
        >
          Sort by Price (Low to High)
        </button>
        <button
          onClick={() => sortByPrice('desc')}
          className="p-2 bg-green-500 text-white rounded"
        >
          Sort by Price (High to Low)
        </button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="py-2">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSorting;
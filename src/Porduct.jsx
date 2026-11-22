

import React from "react";
import "./App.css";

function Product() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7JAoesCqXkhCTqwzXbM1hc3Ty5mZlzWnlNF2Klm2Sg&s=10it=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnrVDE4rz3QUoLxIn4v9D32HToS9KhPKUydiqyvNo6g&s=10auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Laptop",
      price: "$799.99",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="product-page">

      <div className="product-heading">
        <h1>Our Products</h1>
        <p>Find the best products at amazing prices</p>
      </div>

      <div className="container">
        <div className="row g-4">

          {products.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>

              <div className="product-card">

                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-content">

                  <h3>{product.name}</h3>

                  <p>
                    Premium quality product with modern
                    design and excellent performance.
                  </p>

                  <div className="product-bottom">
                    <span className="product-price">
                      {product.price}
                    </span>

                    <button className="add-cart">
                      Add to Cart
                    </button>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Product;

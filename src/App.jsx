import React, { useState } from "react";
import Header from "./View/Header/Header";
import Welcome from "./View/Welcome/Welcome";
import Category from "./View/Category/Category";
import Products from "./View/Products/Products";
import ProductModal from "./Components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Welcome />
      <Category />
      <Products onCardClick={handleCardClick} />

      {isModalOpen && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      )}
    </>
  );
}

export default App;

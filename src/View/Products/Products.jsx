import React, { useState } from "react";
import "./Products.scss";
import mockProducts from "../../Mock/mockProducts";
import ProductModal from "../../Components/Modal/Modal";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="Products">
      <div className="Products__Content">
        <h1 className="Products__Title">Produtos</h1>
        <h3 className="Products__Subtitle">
          Selecione um produto para adicionar ao seu pedido
        </h3>
        <div className="Products__CardContainer">
          {mockProducts.map((product) => (
            <div
              onClick={() => openModal(product)}
              key={product.id}
              className={`Products__Card ${
                hoveredProduct === product ? "hovered" : ""
              } ${product.imageClass}`}
              onMouseEnter={() => handleMouseEnter(product)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={
                  hoveredProduct === product
                    ? product.hoveredImage
                    : product.image
                }
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p className="Products__Description">{product.description}</p>
              <p className="Products__Price">R${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <ProductModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            product={selectedProduct}
          />
        )}
      </div>
      <div className="Products__Buttons">
        <button className="Products__CancelButton">Cancelar pedido</button>
        <button className="Products__FinalizeButton">Finalizar pedido</button>
      </div>
    </div>
  );
};

export default Products;

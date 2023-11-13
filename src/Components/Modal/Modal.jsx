// Modal.jsx
import React, { useState } from "react";
import "./Modal.scss";

const ProductModal = ({ product, isOpen, onRequestClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [additionalItems, setAdditionalItems] = useState([]);
  const productPrice = product ? product.price * quantity : 0;

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddAdditionalItem = (itemName, itemPrice) => {
    setAdditionalItems([
      ...additionalItems,
      { name: itemName, price: itemPrice },
    ]);
  };

  return (
    <div className="modal-overlay">
      <div className="Modal">
        <div className={`modal ${isOpen ? "open" : ""}`}>
          {product ? (
            <>
              <h2 className="Modal__Title">Revise seu pedido</h2>
              <img className="Modal_Burger" src={product.image} alt={product.name} />
              <h3 className="Modal__ProductName">{product.name}</h3>
              <p className="Modal__Description">{product.description}</p>
              <div className="Product__Quantity">
                <button className="Product__Remove" onClick={handleRemoveQuantity}>-</button>
                <span className="Product__Number">{quantity}</span>
                <button className="Product__Add" onClick={handleAddQuantity}>+</button>
                <span className="Product__Price">R$ {productPrice.toFixed(2)}</span>
              </div>
            </>
          ) : (
            <p>Produto não selecionado</p>
          )}

          <h2>Adicionais</h2>
          <h3>Selecione os itens adicionais</h3>
          <div className="additional-items">
            <div>
              <img src="caminho-da-imagem-bacon" alt="Bacon" />
              <label>
                Bacon
                <input
                  type="checkbox"
                  onChange={() => handleAddAdditionalItem("Bacon", 1.0)}
                />
                R$ 1,00
              </label>
            </div>
            <div>
              <img src="caminho-da-imagem-cheddar" alt="Cheddar" />
              <label>
                Cheddar
                <input
                  type="checkbox"
                  onChange={() => handleAddAdditionalItem("Cheddar", 1.0)}
                />
                R$ 1,00
              </label>
            </div>
            <div>
              <img src="caminho-da-imagem-molho" alt="Molho Acompanhamento" />
              <label>
                Molho Acompanhamento
                <input
                  type="checkbox"
                  onChange={() =>
                    handleAddAdditionalItem("Molho Acompanhamento", 1.0)
                  }
                />
                R$ 1,00
              </label>
            </div>
          </div>

          <h2>Observações</h2>
          <textarea></textarea>

          <button onClick={onRequestClose}>X</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

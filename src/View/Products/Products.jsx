import React, { useState } from "react";
import './Products.scss';
import mockProducts from "../../Mock/mockProducts";

const Products = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

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
                <h3 className="Products__Subtitle">Selecione um produto para adicionar ao seu pedido</h3>
                <div className="Products__CardContainer">
                    {mockProducts.map((product) => (
                        <div
                            key={product.id}
                            className={`Products__Card ${hoveredProduct === product ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter(product)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={hoveredProduct === product ? product.hoveredImage : product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p className="Products__Description">{product.description}</p>
                            <p className="Products__Price">R${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Products__Buttons">
                <button className="Products__CancelButton">Cancelar Pedido</button>
                <button className="Products__FinalizeButton">Finalizar Pedido</button>
            </div>
        </div>
    );
};

export default Products;

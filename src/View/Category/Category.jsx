import "./Category.scss";
import Combos from '../../Assets/Images/combo.png';
import Acompanhamento from '../../Assets/Images/acompanhamento.png'
import Bebida from '../../Assets/Images/bebida.png';
import Sobremesa from '../../Assets/Images/sobremesa.png';

const Category = () => {
  return (
    <div className="Category">
      <div className="Category__Content">
        <h1 className="Category__Title">Categorias</h1>
        <h4 className="Category__Subtitle">Navegue por categoria</h4>
        <div className="Category__Cards">
          <div className="Category__Card">
            <img src={Combos} alt="Combo" />
            <p>Combos</p>
          </div>
          <div className="Category__Card">
            <img src={Acompanhamento} alt="Acompanhamento" />
            <p>Acompanhamentos</p>
          </div>
          <div className="Category__Card">
            <img src={Bebida} alt="Bebida" />
            <p>Bebidas</p>
          </div>
          <div className="Category__Card">
            <img src={Sobremesa} alt="Sobremesa" />
            <p>Sobremesas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

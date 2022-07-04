import './ItemListContainer.css'; 
import Contador from './ItemCount';


function ItemListContainer() {
 return (
    <section>
        <h2>Catalogo de comida</h2>
        <p>Elegi la comida que necesites:</p>
        <Contador/>
    </section>
 );
}


export default ItemListContainer;
import './Body.css'; 
/* import Card from'./Card' */
import ItemListContainer from './ItemListContainer';



function Body() {
 return (
    <section className='cuerpo'>
        <ItemListContainer/>
        {/* <Card product='ensalada' price='132' img=''/>
        <Card product='bife' price='441'/>
        <Card product='chorizo' price='133'/>
        <Card product='papas' price='122'/> */}
    </section>
 );
}


export default Body;
import './/Navbar.css';
import CartWidget from './CartWidget';




function Navbar() {
    return (
      <header className='navbar'>
        <button className='button'>Home</button>
        <p>Nosotros</p>
        <a>Tienda</a>
        <div><CartWidget /></div>
        
      </header>
    
      
    );
  }
  
  export default Navbar;
  
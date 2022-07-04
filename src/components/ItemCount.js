import { useState } from "react";
import './ItemCount.css';


function  Contador() {
    const [num, setNum] = useState(0);

    const sumar = () => {
        setNum(num + 1)
    }
    const resta = () => {
        setNum(num - 1)
    }
    const reiniciar = () => {
        setNum(0)
    }
    return (
        
        <div className="contenedor-contador">
            <section className="contador">
            <p >{num}</p>
            <button className="button" onClick={resta}>Restar</button>
            <button className="button" onClick={reiniciar}>Reiniciar</button>
            <button className="button" onClick={sumar}>Sumar</button>
            </section>
        </div>
        
    )
}
export default Contador;
import './Card.css'; 




function Card({ product , price , img}) {
 return (
    <div className='card'>
        <h4>{product}</h4>
        <p>{price}</p>
        <img src={img} />
    </div>
 );
}


export default Card;
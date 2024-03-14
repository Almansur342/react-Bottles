import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
  // console.log(bottle);
  const {name, volume_ml,color,id} = bottle;
  return (
    <div className='bottle'>
      <h1>Bottle Name: {name}</h1>
      <p>Price: {volume_ml}$</p>
      <p>Color: {color}</p>
      <button onClick={() => handleAddToCart(id)}>Purchae</button>
    </div>
  );
};

export default Bottle;
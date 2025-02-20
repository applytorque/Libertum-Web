import css from "./Userproperties.module.scss";
import SaveProperty from "../../SaveProperty/SaveProperty";
import { Link } from 'react-router-dom'; 
const Card = (
  {
  id,
  image,
  price,
  address,
  location,
  
}
) => {


  return(
    <div className={css.cardcontainer}>
      <SaveProperty propertyId={id} />
        <img src={image} alt="" />
        <h2>{address}</h2>        
        <p>{location}</p>
        <p>$ {price}</p>

        <Link  to={`/marketplace/${id}`} className={css.button}>         
        Property details        
        </Link>

        {/* <button onClick={handleDeleteClick} className={css.button}>
        Delete
      </button> */}
    </div>
  )
}

export default Card; 
import { Link } from "react-router-dom";

function Ostukorv () {
  return (
    <div>
      <div>Ostukorv</div>    
      <Link to="/">
        <button>TAGASI</button>
      </Link>       
    </div>  );
}

export default Ostukorv ;
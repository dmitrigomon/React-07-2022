import { Link } from "react-router-dom";

function Ostukorv() {
  // const [ostukorv, muudaOstukorv] = useState(JSON.parse(sessionStorage.getItem("ostukorv")) || [];);
  const ostukorv = JSON.parse(sessionStorage.getItem("ostukorv")) || []

  return (
    <div>
      <div>Ostukorv</div>    
      <Link to="/">
        <button>TAGASI</button>
      </Link>    
      <div>{ostukorv.map(element => <div>{element} <button>X</button><button>+</button> </div>)}</div>
    </div>
  );
}

export default Ostukorv ;
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function LisaToode() {
  const nimiRef = useRef();
  const [sonum, maaraSonum] = useState("");

  const lisaUusToode = () => {
    console.log(nimiRef.current.value);
    //if << kui ON tosi, siis lahen uhte koodiblokki === kas vasak pool vordub parema poolega
    // else << kui EI OLE tosi, laheb teise koodiblokki
    if (nimiRef.current.value === "") {
    maaraSonum("Toodeet saa lisada kui nimi on tyhi")
      } else {
      // maarasonum("Toode " + nimiRef.current.value + " edukalt lisatud")
      maaraSonum(`Toode ${nimiRef.current.value} edukalt lisatud`); 
      localStorage.setItem("tooted", nimiRef.current.value);
      }
    }


  return ( 
    <div>
      <Link to="/">
        <button>Tagasi avalehele</button>
      </Link>
      <br />
      <label>Toote nimi</label> <br/>
      <input ref={nimiRef} type="text" /><br />
      <button onClick={() => lisaUusToode()}>Sisesta</button> <br />
      <div>{sonum}</div>
    </div>
   );
}

export default LisaToode;
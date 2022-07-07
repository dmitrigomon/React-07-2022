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
      let tooted = localStorage.getItem("tooted") // step 1.
      console.log(tooted); // null                        '["TESLA"]'
      tooted = JSON.parse(tooted) || []; // step 2.
      console.log(tooted); // []                           ["TESLA"]
      tooted.push(nimiRef.current.value);  // step 3
      console.log(tooted); // ['text']                     ["TESLA","NOBE"]
      tooted = JSON.stringify(tooted); // step 4
      console.log(tooted); // ["text"]
      localStorage.setItem("tooted", tooted); // step 5.   '["TESLA","NOBE"]'
      maaraSonum(`Toode ${nimiRef.current.value} edukalt lisatud`); 
      // localStorage.setItem("tooted", nimiRef.current.value);
    }
  }
//ARRAY STEPS IMPORTANT
  // 1. võta localStorage-st kõik eelnevad väärtused
  //              localStorage.getItem("VÕTI");
  // 2. võta jutumärgid ära
  //              JSON.parse(array);
  // 3. lisa uus toode juurde
  //              array.push(ref.väärtus);
  // 4. pane jutumärgid tagasi
  //              JSON.stringify(array)
  // 5. pane localStorage-sse uuenenud kujul tagasi
  //              localStorage.setItem("VÕTI", array);
  
  // ---> lisa see refi vaartus
  // andmebaasis saab

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
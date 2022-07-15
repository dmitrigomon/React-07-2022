import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// 1. leidma URL parameetrite seast muutuja vaartuse
// 2. votma koik tooted, et nendes seast otsinugt labi viia
// 3. otsin oige toote ules selle nime alusel (kellel on tapselt sama nimi)
// 4. voin nime ja hinna valja kuvada


function MuudaToode() {
  //localhost:3000/muuda/:tooteNimi
  const { tooteNimi } = useParams();
  const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
  const toode = tooted.find(element => element.nimi === tooteNimi);
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const jarjekorraNumber = tooted.indexOf(toode);
  const navigate = useNavigate();


  const muuda = () => {
    // DUCK is replaced by BIRD
    //   0        1        2                          0       1      2 
    //["camel", "duck", "bison"][1] = "bird" ---> ["camel","bird","bison"] 
  
    tooted[jarjekorraNumber] = {
      nimi: nimiRef.current.value,
      hind: hindRef.current.value,
      aktiivne: aktiivneRef.current.checked
    };
    // salvestus localStorage-sse
    localStorage.setItem("tooted", JSON.stringify(tooted));
    navigate("/halda");
  }

  return (
    
    <div>
        <Link to="/">
          <button>Tagasi avalehele</button>
        </Link> 
      {
        toode !== undefined && 
        <div>
          {/* <div>{toode.nimi}</div>
          <div>{toode.hind}</div> */}
            <label>Toote nimi</label><br />
            <input ref={nimiRef} defaultValue={toode.nimi} type="text" /> <br />
            <label>Toote hind</label><br />
            <input ref={hindRef} defaultValue={toode.hind} type="price" /> <br />
            <label>Toote aktiivsus</label><br />
            <input ref={aktiivneRef} defaultChecked={toode.aktiivne} type="checkbox" /> <br />
            <button onClick={() => muuda()}>Muuda</button>
          </div>
      }
    </div>);
  
  
}

export default MuudaToode;
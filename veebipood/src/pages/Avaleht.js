import { useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  // ALGVAARTUS --> mis on muutuja vaartus lehele tulles
  // MUUTUJA --> muutuv vaartus (sonum, kogusumma, number, sisselogitud kasutaja
  // MUUDAMUUTUJA --> funktsioon mis muudab muutujat)
  const [muutuja, funktsioonMisMuudabMuutujat] = useState("algväärtus")
  const [muutuja2, funktsioonMisMuudabMuutujat2] = useState("algväärtus")
  const [muutuja3, funktsioonMisMuudabMuutujat3] = useState("algväärtus")

  const muudakoik = () => {
    funktsioonMisMuudabMuutujat("uus1");
    funktsioonMisMuudabMuutujat2("uus2");
    funktsioonMisMuudabMuutujat3("uus3");
  }
  return (
    <div>
      <div>Avaleht</div>
      <Link to="/ostukorv">
        <button>OSTUKORVI</button>
      </Link>
      <div>{muutuja}</div>
      { muutuja === "uus väärtus" && <div>Väärtust on muudetud</div>}
      <button onClick={() => funktsioonMisMuudabMuutujat("uus väärtus")}> Pane uus väärtus</button>
       <button onClick={() => funktsioonMisMuudabMuutujat("uus väärtus")}> Pane uus väärtus</button>
    </div> );
}

export default Avaleht;
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./reserver.css";
import Cart from "../navbar/navOptions/cart";
import { useState } from "react";

export default function Reserver() {
  let [showCart, setShowCart] = useState("show");

  return (
    <div className="reserver">
      <Navbar
        className={"navbar"}
        setShowCart={setShowCart}
        showCart={showCart}
      />

      <div className="reserver-panal">
        {/* ----------------------------------------left------------------------------ */}
        <div className="left-img">
          <img src="/img/welcome.jpg" alt="" srcset="" width={"100%"} />
        </div>
        {/* ----------------------------------------left------------------------------ */}

        {/* ----------------------------------------rigth------------------------------ */}
        <div className="right">
          <div className="revesion-title">
            <span className="title">Résérvation</span>
            <span className="calandericon">
              <img
                src="/img/calandericon.png"
                alt=""
                srcset=""
                width={"100%"}
              />
            </span>
          </div>

          <input
            type="text"
            name="id_stagiaire"
            id="id_stagiaire"
            placeholder="ID Stagiair(e)"
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom Utilisateur / Utilisatrice"
          />
          <input
            type="text"
            name="titre_livre"
            id="titre_livre"
            placeholder="Titre de Livre"
          />
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date de  résérvation"
          />

          <select name="jour" id="jour">
            <option value="3">3 jours</option>
            <option value="7">7 jours</option>
            <option value="10">10 jours</option>
          </select>

          <Link className="submit-btn" to={"/dashbord"}>
            submit
          </Link>
        </div>
        {/* ----------------------------------------rigth------------------------------ */}
      </div>
      {showCart === "show" ? (
        <div id="cart-id">
          <Cart setShowCart={setShowCart} showCart={showCart} />
        </div>
      ) : null}
    </div>
  );
}

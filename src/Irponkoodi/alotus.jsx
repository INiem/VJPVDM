import React from "react";
import kuva from "/src/KuvaK/Alotus.jpg";
// Sivun aloituskuva
const Aloituskuva = (
  <div id="alku">
    <img src={kuva} alt="SivunAlku" id="alkukuva" />
  </div>
);
export default function(props) {
  return Aloituskuva;
}

import rm from "./rm.png";
import "./login.css";

function Headers() {
  return (
    <div className="header">
      <div className="logo">
        <img className="img1" srcSet={rm} />
        <div className="div-4">ParcAuto</div>
      </div>
      <div className="di">
        <div>Accueil</div>
        <div>Services</div>
        <div>A propos</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
export default Headers;

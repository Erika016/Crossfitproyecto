import fondo from "../info/imagenInfo/moti1.jpg";
import classes from "./ImagenPrincipal.module.css"
export function ImagenPrincipal (){
return(
    <div>
                  <img className={classes.imagen} alt="test" src={fondo} />

    </div>
)
}
// Componente que muestra una imagen fija justo debajo del header.
// Component that displays a still image just below the header.

import fondo from "../info/imagenInfo/moti1.jpg";
import classes from "./ImagenPrincipal.module.css"

export function ImagenPrincipal (){
return(
    <div>
                  <img className={classes.imagen} alt="test" src={fondo} />

    </div>
)
}
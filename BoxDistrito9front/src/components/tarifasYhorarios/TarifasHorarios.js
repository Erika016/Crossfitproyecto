import classes from "./TarifasHorarios.module.css";
import { GiBiceps } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
export function TarifasHorarios() {
  return (
    <div className={classes.container}>
      <h1 className={classes.texto}>
        <GiBiceps /> Ven y comprueba que puedes hacerlo <GiBiceps /> que no te
        lo cuenten.
        <CgGym />
      </h1>

      <h2 className={classes.titulo}>TARIFAS</h2>
      <table className={classes.tarifa}>
        <tbody>
          <tr>
            <th>Tarifa</th>
            <th>Precios</th>
          </tr>
          <tr>
            <td>ILIMITADA</td>
            <td>60€</td>
          </tr>
          <tr>
            <td>12 Días/Mes</td>
            <td>45€</td>
          </tr>
          <tr>
            <td>9 Días/Mes</td>
            <td>35€</td>
          </tr>
          <tr>
            <td>1 Dí/Mes</td>
            <td>9€</td>
          </tr>
          <tr>
            <td>SABADO</td>
            <td>GRATIS</td>
          </tr>
        </tbody>
      </table>

      <h2 className={classes.titulo}>HORARIOS</h2>
      <table className={classes.tarifa2}>
        <tbody>
          <tr>
            <th>DIA</th>
            <th>MAÑANA</th>
            <th>TARDE</th>
          </tr>
          <tr>
            <td>LUNES</td>
            <td>8:30–12:30</td>
            <td>16:30–21:30</td>
          </tr>
          <tr>
            <td>MARTES</td>
            <td>8:30–12:30</td>
            <td>16:30–21:30</td>
          </tr>
          <tr>
            <td>MIERCOLES</td>
            <td>8:30–12:30</td>
            <td>16:30–21:30</td>
          </tr>
          <tr>
            <td>JUEVES</td>
            <td>8:30–12:30</td>
            <td>16:30–21:30</td>
          </tr>
          <tr>
            <td>VIERNES</td>
            <td>8:30–12:30</td>
            <td>16:30–21:30</td>
          </tr>
          <tr>
            <td>SABADO</td>
            <td>11:00–13:00</td>
            <td>CERRADO</td>
          </tr>
          <tr>
            <td>DOMINGO</td>
            <td>CERRADO</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

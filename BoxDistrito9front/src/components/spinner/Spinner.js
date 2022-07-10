// Componente que muestra in spinner girando miestras la pagina carga

// Component that displays the spinner spinning while the page loads

import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <>
      <div className={styles.ldsHourglass}></div>
    </>
  );
}

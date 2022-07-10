
// Props to send the user an alert, for example successful registration.
// Props para mandar al usuario una alerta, por ejemplo registro correcto.

import styles from "./Alert.module.css";

export const Alert = (props) => {
  return (
    <div className={`${styles.alert} ${styles[props.type]}`}>
      <input type="checkbox" id="alert1" />
      <label className={styles.close} title="close" htmlFor="alert1">
        <strong>&times;</strong>
      </label>
      <p className={styles.inner}>{props.message}</p>
    </div>
  );
};

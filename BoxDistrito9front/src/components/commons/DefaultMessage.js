import classes from "./DefaultMessage.module.css";


export const DefaultMessage = (props) => {

  console.log('llega al fallo de mensaje', props)

  return (
    <div className={classes.defaultMessageContainer}>
     <p>{props.message}</p>
    </div>
  );
};

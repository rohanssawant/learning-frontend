import classes from "./PopUpCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
export default function PopUpCard(props) {
  return (
    <>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        {props.image ? <img src={props.image} /> : null}
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </>
  );
}

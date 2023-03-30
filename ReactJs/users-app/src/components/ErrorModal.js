import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={classes.content}>{props.message}</p>
        </div>
        <footer className={classes.action}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </div>
  );
}

import classes from "./DriverItem.module.css";
import Card from "../ui/Card";

const DriverItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <h1>{props.roundPosition}</h1>
        <div className={classes.image}>
          <img src="../assets/images/verstappen.jpeg" alt="" />
        </div>
        <div className={classes.content}>
          <h3>
            {isNaN(props.driverNum) ? "" : `# ${props.driverNum}`} {props.name}
          </h3>
          <p>Nationality: {props.nationality}</p>
          <p>Constructor: {props.constructor}</p>
          <p>Race Status: {props.completionStatus}</p>
          <p>Points: {props.pointsAwarded}</p>
        </div>
        <div className={classes.actions}>
          <button>Add {props.name} to Favorites</button>
        </div>
        <div className={classes.actions}>
          <a
            href={props.wikipediaURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Learn more about {props.name}</button>
          </a>
        </div>
      </Card>
    </li>
  );
};

export default DriverItem;

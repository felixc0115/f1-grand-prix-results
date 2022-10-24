import DriverItem from "./DriverItem";
import classes from "./DriverList.module.css";

const DriverList = ({ roundResults }) => {
  return (
    <ul className={classes.list}>
      {roundResults.map((driver) => {
        return (
          <DriverItem
            key={driver.Driver.driverId}
            id={driver.Driver.driverId}
            // name={driver.title}
            // address={driver.address}
            // description={driver.description}
          />
        );
      })}
    </ul>
  );
};

export default DriverList;

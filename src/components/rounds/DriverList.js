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
            name={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
            constructor={driver.Constructor.name}
            nationality={driver.Driver.nationality}
            driverNum={+driver.Driver.permanentNumber}
            completionStatus={driver.status}
            roundPosition={driver.position}
            pointsAwarded={+driver.points}
            wikipediaURL={driver.Driver.url}
          />
        );
      })}
    </ul>
  );
};

export default DriverList;

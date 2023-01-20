import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUnits, selectUnits } from "./unitsSlice";

const Units = () => {
  const dispatch = useDispatch();
  const units = useSelector(selectUnits);

  useEffect(() => {
    dispatch(fetchAllUnits());
  }, [dispatch]);

  return (
    <div>
      <div>
        {units.map((unit) => (
          <li key={unit.id}>
            <div>
              <h3>Unit Name: {unit.name}</h3>
              <h3>Unit Type: {unit.unitType}</h3>
              <h3>Unit Occupancy: {unit.occupancy}</h3>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Units;

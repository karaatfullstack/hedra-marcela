import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateUnitModal from "../modal/UpdateUnitModal";
import { fetchProperty, selectProperty } from "./propertySlice";

const Property = () => {
  const property = useSelector(selectProperty);
  const { name, address, imageUrl, yearBuilt, totalUnits, description } =
    property;
  const dispatch = useDispatch();
  const { propertyId } = useParams();

  useEffect(() => {
    dispatch(fetchProperty(propertyId));
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="single-item">
      <h1>{name}</h1>
      <Grid
        container
        justifyContent="left"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "left",
          mt: 30,
        }}
      >
        <Card raised sx={{ width: 400, height: 600, ml: 10, mt: 8 }}>
          <div key={propertyId}>
            <Grid align="center">
              <CardMedia
                component="img"
                image={imageUrl}
                sx={{ height: 300, width: 250, mt: 1 }}
              />
            </Grid>
            <CardContent align="center">
              <Typography variant="p" align="center">
                Name: {name}
              </Typography>
              <Typography variant="p" align="center">
                Address:{address}
              </Typography>
              <br />
              <Typography variant="p" align="center">
                Description: {description}
              </Typography>
              <br />
              <Typography variant="p" align="center">
                Total Units: {totalUnits}
              </Typography>
              <br />
              <Typography variant="p" align="center">
                Year Built: {yearBuilt}
              </Typography>
            </CardContent>
          </div>
          <Grid align="center">
            <button className="button-34" type="submit" display="flex">
              Edit Property
            </button>
          </Grid>
        </Card>
        <Card raised sx={{ width: 1200, height: 600, ml: 10, mt: 8 }}>
          <Typography variant="h6" align="left">
            Unit List
          </Typography>

          <ul>
            {property.units && property.units.length
              ? property.units.map((unit) => {
                  return (
                    <li key={unit.id}>
                      <p>
                        Unit: {unit.name} | Type: {unit.unitType} | Lease Start:{" "}
                        {unit.leaseStart} | Lease End: {unit.leaseEnd} |
                        Occupancy: {unit.occupancy}
                      </p>
                      <button
                        className="button-30"
                        onClick={() => setOpenModal(true)}
                      >
                        Update Lease Status
                      </button>
                      {openModal && (
                        <UpdateUnitModal closeModal={setOpenModal} />
                      )}
                    </li>
                  );
                })
              : null}
          </ul>
        </Card>
      </Grid>
    </div>
  );
};

export default Property;

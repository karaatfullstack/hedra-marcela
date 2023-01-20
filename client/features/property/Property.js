import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
            <Button type="submit" display="flex">
              Edit Property
            </Button>
          </Grid>
        </Card>
        <Card raised sx={{ width: 1000, height: 600, ml: 10, mt: 8 }}>
          <Typography variant="h6" align="left">
            Unit List
          </Typography>
          <ul>
            {property.units && property.units.length
              ? property.units.map((unit) => {
                  let unitId = unit.id;
                  return (
                    <li key={unit.id}>
                      <p>{unit.name}</p>
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

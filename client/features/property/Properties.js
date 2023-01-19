import { CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddPropertyModal from "../modal/AddPropertyModal";
import { fetchPropertiesAsync, selectProperties } from "./propertiesSlice";

const Properties = () => {
  const dispatch = useDispatch();
  const properties = useSelector(selectProperties);

  useEffect(() => {
    dispatch(fetchPropertiesAsync());
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div id="propertiesContainer">
      <h1 id="title">View All Properties</h1>
      <button className="button-34" onClick={() => setOpenModal(true)}>
        + New Property
      </button>
      {openModal && <AddPropertyModal closeModal={setOpenModal} />}
      <span></span>

      <span></span>
      <div className="container">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ justifyContent: "left" }}
        >
          {properties.map((property) => {
            return (
              <div key={property.id}>
                <Card raised sx={{ width: 280, ml: 10, mb: 3, padding: "1em" }}>
                  <CardMedia
                    component="img"
                    image={property.imageUrl}
                    height="300"
                    width="250"
                  />
                  <CardContent>
                    <Link to={`/properties/${property.id}`}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        {property.name}
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Properties;

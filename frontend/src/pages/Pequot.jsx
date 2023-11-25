import React from "react";
import { Container } from "@mui/system";
import energylogo from "../static/pequot/energyStorageLogo.png";
import pageInfo from "../static/pequot/pageInfo.png";
import { Grid } from "@mui/material";

const Pequot = () => {
    return (
        <Container style={{ textAlign: "center" }}>
            <Grid sx={{ mt: 2 }}>
                <img src={energylogo} alt="logo" />
            </Grid>
            <Grid sx={{ mt: 1 }}>
                <img src={pageInfo} alt="info" />
            </Grid>
        </Container>
    );
};

export default Pequot;

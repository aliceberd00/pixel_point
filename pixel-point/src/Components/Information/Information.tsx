import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import InformationCard from "./InformationCard";
import { InformationJSON } from "./InformationJSON"; // Import your data

export default function Information() {
    const information_v: JSX.Element[] = InformationJSON.map((item, index) => (
        <InformationCard
            key={index} // Add a unique key for each InformationCard
            num={item.num}
            header={item.header}
            description={item.description}
        />
    ));

    return (
        <Box ml={4} mr={4} mt={4} mb={4}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12} sm={3} md={1}></Grid>
                <Grid item xs={12} sm={3} md={3}>
                    {information_v[0]}
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    {information_v[1]}
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    {information_v[2]}
                </Grid>
                <Grid item xs={12} sm={3} md={1}></Grid>
            </Grid>
        </Box>
    );
}

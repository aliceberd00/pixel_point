import * as React from 'react';
import LeftInterface from "./LeftInformation/LeftInformation";
import RightInformation from "./RightInformation/RightInformation";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
export default function StartInterface() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                }}
            >
                <div  style={{marginTop: "50px"}}>
                    <Grid container spacing={{ xs: 2, md: 3 }}  >
                        <Grid item xs={1} sm={3} md={2}></Grid>
                        <Grid item xs={10} sm={3} md={4}>
                        <LeftInterface/>
                        </Grid>
                        <Grid item xs={10} sm={3} md={4}>
                        <RightInformation/>
                        </Grid>
                        <Grid item xs={1} sm={3} md={2}></Grid>
                    </Grid>
                </div>
            </Box>
        </>
    );
}

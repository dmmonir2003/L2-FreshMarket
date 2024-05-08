import Sidebar from "@/components/shared/Sidebar.tsx/Sidebar";
import { Box, Grid } from "@mui/material";



const MainLayoutPage = ({ children }) => {
    return (
        <>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid item sm={3}>
                    <Sidebar></Sidebar>
                </Grid>
                <Grid item sm={9}>
                    <Box>{children}</Box>
                </Grid>


            </Grid>


        </>
    );
};

export default MainLayoutPage;
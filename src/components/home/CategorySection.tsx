import { Box, Typography, Grid, Button } from "@mui/material";
import { green, red } from "@mui/material/colors";
import Link from "next/link";
import Card from "../clientCompo.tsx/Card";

const CategorySection = () => {

    const images = [
        {
            url: 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg',
            title: 'Breakfast',
            width: '40%',
            pathName: '/products/Breakfast',
        },
        {
            url: 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg',
            title: 'Burgers',
            width: '30%',
        },
        {
            url: 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg',
            title: 'Camera',
            width: '30%',
        },
        {
            url: 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg',
            title: 'Camer',
            width: '30%',
        },
    ];



    return (
        <>
            <Box my={10}>
                <Typography variant="h4" component='h4' textAlign='center' fontWeight={700}>
                    Top Categories
                </Typography>
                <Typography component='p' textAlign='center' fontWeight={600} sx={{ width: '50%', mx: 'auto' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat suscipit voluptas mollitia praesentium assumenda dolor voluptate quasi sit, nemo facilis!
                </Typography>
            </Box>

            {/* Grid container with responsive columns */}
            <Grid container spacing={3} justifyContent="center">
                {/* First column */}
                <Grid item xs={12} md={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <Card item={images[0]} customHeight={'420px'} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Second column */}
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <Card item={images[1]} customHeight={'200px'} />
                        </Grid>
                        <Grid item xs={12} >
                            <Card item={images[3]} customHeight={'200px'} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} >
                    <Grid container spacing={3}>
                        <Grid item xs={12}  >
                            <Card item={images[2]} customHeight={'420px'} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <Button
                    variant='contained'
                    sx={{
                        borderRadius: '45%',
                        backgroundColor: red[500],
                        '&:hover': { backgroundColor: 'red' } // Corrected syntax for hover state
                    }}
                >
                    <Link href={'/products'}>View All</Link>
                </Button>
            </Box>



        </>
    );
};

export default CategorySection;


// sm:h-[300px] md:h-[138px]
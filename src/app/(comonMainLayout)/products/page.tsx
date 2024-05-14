import LeftSecttion from '@/components/products/LeftSecttion';
import RightSection from '@/components/products/RightSection';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const ProductsPage = async ({ searchParams }) => {
    const { category } = searchParams;
    console.log(category);


    let products;
    if (category) {
        const res = await fetch(`http://localhost:5000/api/products/category/${category}`, {
            cache: 'no-store',
        })


        products = await res.json();
    }
    else {
        const res = await fetch(`http://localhost:5000/api/products`, {
            cache: 'no-store',
        })
        products = await res.json();
    }

    console.log(products, '1');

    return (
        <div>
            <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }} minHeight='100vh'>
                <Grid item xs={6} sm={3} md={3} >
                    <LeftSecttion></LeftSecttion>
                </Grid>
                <Grid item xs={6} sm={9} md={9} >
                    <RightSection data={products}></RightSection>
                </Grid>

            </Grid>
        </div>
    );
};

export default ProductsPage;










// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import { Box, Checkbox, Grid, Icon, Stack } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import { Favorite, FavoriteBorder } from '@mui/icons-material';
// import CardHover from '../clientCompo.tsx/CardHover';

// const FlashCard = ({ data }) => {
//     console.log(data);



//     return (
//         <>
//             <Grid container gap={2} spacing={{ sm: 2, sx: 1, md: 2 }} columns={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
//                 alignItems="center">
//                 {data.map((products, index) => (
//                     <Grid item key={index}>
//                         <Card sx={{ maxWidth: 255, minWidth: 255, minHeight: 360, maxHeight: 360, position: 'relative', }}>
//                             <IconButton aria-label="percentage" sx={{
//                                 position: 'absolute', top: 0, left: 0, backgroundColor: red[500], '&:hover': {
//                                     backgroundColor: red[500],
//                                 }, borderRadius: '', padding: '2px', px: 2, textAlign: 'center', ml: 1, mt: 1,
//                             }}>
//                                 <Typography component={'p'} sx={{ fontSize: 12, color: 'white' }} > -13%</Typography>
//                             </IconButton>
//                             <IconButton aria-label="add to favorites" sx={{ position: 'absolute', top: -7, right: 0, zIndex: 3, }}>

//                                 <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} />
//                             </IconButton>

//                             <CardMedia
//                                 component="img"
//                                 height=""
//                                 image={products?.imagesUrl}
//                                 alt="card image"
//                                 sx={{ maxHeight: 250, borderRadius: 2, minHeight: 250, padding: 4, }}

//                             />
//                             <CardContent sx={{ mb: 0, mt: 2, position: 'relative' }}>
//                                 <Stack direction='row' alignItems='end' justifyContent='space-between'>

//                                     {/* Show Details button */}
//                                     {/* {hoveredCardIndex === index && (
//                                         <IconButton
//                                             aria-label="show details"
//                                             sx={{
//                                                 position: 'absolute',
//                                                 top: -35,
//                                                 right: 40,
//                                                 zIndex: 1,
//                                             }}
//                                         >
//                                             Show Details
//                                         </IconButton>
//                                     )} */}
//                                     <Box>
//                                         <Typography color="text.secondary">
//                                             {products?.title}
//                                         </Typography>
//                                         <Typography>
//                                             <span className='line-through'>$2000</span> $1500
//                                         </Typography>

//                                     </Box>
//                                     <Box>
//                                         <AddCircleOutlineIcon></AddCircleOutlineIcon>
//                                     </Box>
//                                 </Stack>



//                             </CardContent>


//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// };

// export default FlashCard;

// sx={{ maxWidth: 255, minWidth: 255, minHeight: 360, maxHeight: 360, position: 'relative', }}




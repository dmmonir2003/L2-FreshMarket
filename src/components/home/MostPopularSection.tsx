import { Box, Button, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';
import React from 'react';
import FlashCard from './FlashCard';

const MostPopularSection = () => {


    const Data = [
        {
            imagesUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQz0CoRtQkrNS5X8fVWcVVyMyfgkbneCTVesp4oKhAF_lCaRMOb",
            title: "Landscape",
            price: 29.99,
            ratings: 4.5,
            brandCategory: "Nature",
            description: "Beautiful landscape image captured during sunset.",
        },
        {
            imagesUrl: "https://www.luluhypermarket.in/medias/126295-01.jpg-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDg3NnxpbWFnZS9qcGVnfGFHWXpMMmhqWkM4NE9EVTBOVFl4TlRVME5EWXlMekV5TmpJNU5TMHdNUzVxY0dkZk16QXdWM2d6TURCSXxlMzYzMDViNzY5ZjNjY2MyZWViMGE1MDE2MDRjODFhMWViNmJiMDQ0N2Y4N2QyNzVkZjVlYzgwNzdkZjZmZTI0",
            title: "Abstract Art",
            price: 49.99,
            ratings: 4.2,
            brandCategory: "Art",
            description: "Vibrant abstract art painting with bold colors and patterns.",
        },
        {
            imagesUrl: "https://www.luluhypermarket.in/medias/105999-01.jpg-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjkzN3xpbWFnZS9qcGVnfGFEWTVMMmhrTVM4NE9EVTFNakk0TURVMU5UZ3lMekV3TlRrNU9TMHdNUzVxY0dkZk16QXdWM2d6TURCSXxkYThhNGQxOGI0NzIyNWExYzY2ZjBiNjQxNmIzMjVhMTNiZmE3ODk5NGM5YTA4N2I1MWY4ODY3NGQ3MzYwZjdh",
            title: "City Skyline",
            price: 39.99,
            ratings: 4.7,
            brandCategory: "Urban",
            description: "A stunning view of the city skyline at night with illuminated buildings.",
        },
        {
            imagesUrl: "https://www.luluhypermarket.in/medias/93468-01.jpg-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTg1OHxpbWFnZS9qcGVnfGFEZzBMMmhqWXk4NE9EQTNNall3TXpVMk5qTTRMemt6TkRZNExUQXhMbXB3WjE4ek1EQlhlRE13TUVnfDlhMzY4YWI2NDg0OWEyMDUzNWE5MDdkNjY0YTNmZjQ1ZjhhYjBiYWZjOTNlYzJmZmQyMmE5OTI0NDg1ODFkMWM",
            title: "Wildlife Photography",
            price: 59.99,
            ratings: 4.8,
            brandCategory: "Nature",
            description: "Close-up shot of a wild animal in its natural habitat.",
        },
        {
            title: "Fashion Portrait",
            price: 79.99,
            ratings: 4.6,
            brandCategory: "Fashion",
            description: "High-fashion portrait showcasing the latest clothing trends.",
        },
    ];




    return (
        <div className=''>
            <Stack direction='row' justifyContent='space-between' my={15}>

                <Box sx={{ width: '50%' }}>
                    <Typography variant='h5' component={'h5'}>Most Popular Products</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim magni fugit reiciendis rerum dolorem.</Typography>
                </Box>
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
            </Stack>

            <Stack  >
                <FlashCard data={Data}></FlashCard>
            </Stack>

        </div>
    );
};

export default MostPopularSection;
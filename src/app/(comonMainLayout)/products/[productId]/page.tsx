

import { Box, Breadcrumbs, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'next/image';
import { green, red } from '@mui/material/colors';

const ProductDetailPage = () => {




    return (
        <Container >
            <Stack direction='row' alignItems='center'>
                <Typography>Product Listing</Typography>
                <ArrowForwardIosIcon fontSize='14px'></ArrowForwardIosIcon>
                <Typography >Dummy Product Page</Typography>
            </Stack >


            <Box mt={5}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ bg: red[500] }}>
                        <Stack direction={{ xs: 'column-reverse', sm: 'row' }} gap={4}>
                            <Stack direction={{ xs: 'row', sm: 'column' }} gap={2}>

                                <Box sx={{ maxWidth: '100px', maxHeight: '200px' }}>
                                    <Image alt='small image' height={100} width={150} src='https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg'></Image>
                                </Box>
                                <Box sx={{ maxWidth: '100px', maxHeight: '200px' }}>
                                    <Image alt='small image' height={100} width={150} src='https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg'></Image>
                                </Box>
                                <Box sx={{ maxWidth: '100px', maxHeight: '200px' }}>
                                    <Image alt='small image' height={100} width={150} src='https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg'></Image>
                                </Box>



                            </Stack>
                            <Stack> </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ bg: green[500] }}>
                        <Typography>text</Typography>
                    </Grid>

                </Grid>
            </Box>


        </Container>
    );
};

export default ProductDetailPage;
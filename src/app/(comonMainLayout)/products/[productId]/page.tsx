

import { Box, Breadcrumbs, Checkbox, Container, Divider, IconButton, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'next/image';
import { green, red } from '@mui/material/colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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
                            <Stack>
                                <Image alt='small image' height={330} width={330} src='https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg'></Image>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ bg: green[500] }}>
                        <Stack direction='row' justifyContent='space-between'>
                            <Box

                            >
                                <Typography fontSize={30} fontWeight={700}>Double Bed & Side Tables</Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'black',
                                        gap: 1,

                                    }}
                                >
                                    <Typography fontSize={20}>$54.98</Typography>
                                    <Divider color='black' orientation="vertical" variant="middle" flexItem sx={{ height: 15, width: 2 }} />
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> <Typography component={'span'}>( 32 review )</Typography>
                                </Box>
                                <Divider sx={{ my: 2, }} />

                            </Box>
                            <Box>  <IconButton aria-label="add to favorites">
                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} />
                            </IconButton>
                            </Box>


                        </Stack>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, amet! Quam maxime eius accusantium beatae facere tenetur nesciunt illo earum. Quam maxime eius accusantium beatae facere tenetur nesciunt illo earum.</Typography>

                        <Box my={4} ml={1}>
                            <Typography component={'li'}>Lorem ipsum dolor sit amet, adipi scing elit</Typography>
                            <Typography component={'li'}>Lorem ipsum dolor sit amet, adipi scing elit</Typography>
                            <Typography component={'li'}>Lorem ipsum dolor sit amet, adipi scing elit</Typography>

                        </Box>

                        <Stack direction='row' gap={2} alignItems='center'> <LocalShippingIcon></LocalShippingIcon> <Typography>Free worldwide shipping on all orders over $100</Typography></Stack>
                        <Stack mt={1} direction='row' gap={2} alignItems='center'> <HourglassTopIcon></HourglassTopIcon> <Typography>Delivers in: 3-7 Working Days Shipping & Return</Typography></Stack>
                    </Grid>

                </Grid>

                <Box bgcolor={'#f5f5f5'} my={10} py={5} px={2}>
                    <Typography my={2} fontSize={20} fontWeight={600}>Description</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    <Box my={2} ml={1}>
                        <Typography component={'li'}>Lorem ipsum dolor sit amet, adipi scing elit</Typography>
                        <Typography component={'li'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        <Typography component={'li'}>Lorem ipsum dolor sit amet, adipi scing elit</Typography>
                        <Typography component={'li'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                    </Box>
                </Box>
            </Box>


        </Container>
    );
};

export default ProductDetailPage;
"use client"

import { Box, Breadcrumbs, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'next/image';

const ProductDetailPage = () => {




    return (
        <Container >
            <Stack direction='row' alignItems='center'>
                <Typography>Product Listing</Typography>
                <ArrowForwardIosIcon fontSize='14px'></ArrowForwardIosIcon>
                <Typography >Dummy Product Page</Typography>
            </Stack >


            <Box mt={5}>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 'full',

                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item sm={4}>
                            <ButtonBase >
                                <Image width={400} height={200} alt='prodect image' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQz0CoRtQkrNS5X8fVWcVVyMyfgkbneCTVesp4oKhAF_lCaRMOb' ></Image>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm={8} container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ID: 1030114
                                    </Typography>
                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                        Remove
                                    </Typography>
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" component="div">
                                    $19.00
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>


        </Container>
    );
};

export default ProductDetailPage;
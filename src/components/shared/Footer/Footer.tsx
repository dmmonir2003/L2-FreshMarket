import SisterCompanySection from '@/components/home/SisterCompanySection';

import Link from 'next/link';
import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
const Footer = () => {
    return (
        <div >
            <SisterCompanySection></SisterCompanySection>

            <Stack minHeight={300} spacing={3} direction='row' useFlexGap flexWrap="wrap" justifyContent='space-around' sx={{
                backgroundColor: "#1c1c1c",
                mx: 'auto',
                width: 'full'
            }}>


                <Stack py={5}>

                    <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                        Title 1
                    </Typography>
                    <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                        Title 33333
                    </Typography></Link>

                </Stack>
                <Stack py={5}>

                    <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                        Title 2
                    </Typography>
                    <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                        Title 33333
                    </Typography></Link>

                </Stack>
                <Stack py={5}>

                    <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                        Title 3
                    </Typography>
                    <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                        Title 33333
                    </Typography></Link>

                </Stack>

                <Stack py={5}>

                    <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                        Title 4
                    </Typography>
                    <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                        Title 33333
                    </Typography></Link>

                </Stack>
                <Stack py={5}>

                    <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                        Title 4
                    </Typography>
                    <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                        Title 33333
                    </Typography></Link>

                </Stack>



            </Stack>

            {/* <Grid
                container
                spacing={4}
                justifyContent="space-around"
                sx={{
                    backgroundColor: "#1c1c1c",
                    mx: 'auto',
                    width: 'full'
                }}
            >
                <Grid item xs={12} md={4}>
                    <Stack py={5}>
                        <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                            Title 1
                        </Typography>
                        <Link href={'/products'}>
                            <Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack py={5}>
                        <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                            Title 2
                        </Typography>
                        <Link href={'/products'}>
                            <Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack py={5}>
                        <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                            Title 3
                        </Typography>
                        <Link href={'/products'}>
                            <Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Stack py={5}>
                        <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                            Title 4
                        </Typography>
                        <Link href={'/products'}>
                            <Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Stack py={5}>
                        <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                            Title 5
                        </Typography>
                        <Link href={'/products'}>
                            <Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>
            </Grid> */}


        </div >
    );
};

export default Footer;
import SisterCompanySection from '@/components/home/SisterCompanySection';

import Link from 'next/link';
import React from 'react';
import { Grid, Typography, Stack, Divider, Box } from '@mui/material';
const Footer = () => {
    return (
        <div >
            <SisterCompanySection></SisterCompanySection>
            <Box sx={{ backgroundColor: "#1c1c1c" }}>
                <Stack minHeight={300} spacing={3} direction='row' useFlexGap flexWrap="wrap" justifyContent='space-around' sx={{
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


                <Divider color='#b7b7b7' ></Divider>


                <Box >

                    <Typography color='#b7b7b7' py={3} textAlign='center' >Copyright © 2023 Renew Bariatrics, Inc </Typography>
                </Box>

            </Box>
        </div >
    );
};

export default Footer;
import SisterCompanySection from '@/components/home/SisterCompanySection';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div >
            <SisterCompanySection></SisterCompanySection>
            <Stack minHeight={300} direction='row' justifyContent='space-around' sx={{
                backgroundColor: "#1c1c1c"
            }}>
                <Stack py={5}> <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                    Title
                </Typography>
                    <Stack py={5}> <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                        Title
                    </Typography>
                        <Stack py={5}>

                            <Link href='/products'>  <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                                Title
                            </Typography></Link>
                            <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                                Title
                            </Typography>
                            <Typography fontSize={20} fontWeight={500} color='#b7b7b7'>
                                Title
                            </Typography>

                        </Stack>
                        <Stack py={5}> <Typography fontSize={20} fontWeight={500} color='white'>
                            Title 2
                        </Typography>

                        </Stack>
                        <Stack py={5}> <Typography fontSize={20} fontWeight={500} color='white'>
                            Title 3
                        </Typography>

                        </Stack>
                        <Stack py={5}> <Typography fontSize={20} fontWeight={500} color='white'>
                            Title 4
                        </Typography>

                        </Stack>
                        <Stack py={5}> <Typography fontSize={20} fontWeight={500} color='white'>
                            Title 5
                        </Typography>

                        </Stack>



                    </Stack>
                </div>
                
};

                export default Footer;
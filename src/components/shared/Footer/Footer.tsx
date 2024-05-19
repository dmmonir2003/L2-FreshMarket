import SisterCompanySection from '@/components/home/SisterCompanySection';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import React from 'react';
import { Grid, Typography, Stack, Divider, Box } from '@mui/material';
import Image from 'next/image';
const Footer = () => {
    return (
        <div >
            <SisterCompanySection></SisterCompanySection>
            <Box px={3} sx={{ backgroundColor: "#18191B" }}>
                <Stack minHeight={300} spacing={1} direction='row' useFlexGap flexWrap="wrap" justifyContent='space-around' sx={{
                    mx: 'auto',
                    width: 'full'
                }}>


                    <Stack py={5}>
                        <Box
                            sx={{ position: 'absolute' }}
                        ><Image alt="logo"
                            width={100}
                            height={100} src='https://i.ibb.co/1mZBmRF/441248276-413188498348281-4150223707497410940-n-removebg-preview.png'></Image></Box>
                        <Box sx={{ position: 'relative', bottom: -70 }}>

                            <Image alt="name"
                                width={300}
                                height={0} src='https://i.postimg.cc/BQ9BRgkd/441059184-466037495875153-7867512273675810353-n-removebg-preview-10.png'></Image>
                        </Box>
                        <Box mt={9}> <Image alt="logo"
                            width={300}
                            height={100} src='https://www.bengalmeat.com/images/footer_icons_logo.png'></Image></Box>

                    </Stack>




                    <Stack direction='row' spacing={15} justifyContent={'space-between'}
                    ><Stack py={5}>

                            <Typography fontSize={20} fontWeight={500} color='#FA8F4D'>
                                Company Information
                            </Typography>
                            <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='#FFBD59' sx={{
                                '&:hover': {
                                    color: '#FA8F4D',

                                }
                            }}>
                                Title 33333
                            </Typography></Link>

                        </Stack>

                        <Stack py={5}>

                            <Typography fontSize={20} fontWeight={500} color='#FA8F4D'>
                                Customer Service
                            </Typography>
                            <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography></Link>

                        </Stack>
                        <Stack py={5}>

                            <Typography fontSize={20} fontWeight={500} color='#FA8F4D'>
                                Resources
                            </Typography>
                            <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography></Link>

                        </Stack>
                        <Stack py={5}>

                            <Typography fontSize={20} fontWeight={500} color='#FA8F4D'>
                                Resources
                            </Typography>
                            <Link href={'/products'}><Typography mt={3} fontSize={20} fontWeight={500} color='white'>
                                Title 33333
                            </Typography></Link>

                        </Stack>

                    </Stack>

                </Stack>


                <Divider color='#b7b7b7' ></Divider>



                <Stack direction='row' justifyContent='space-between' alignItems='center' py={3}>

                    <Box>
                        <Typography color='#FA8F4D' textAlign='center'>Download App</Typography>
                        <Stack direction='row' spacing={2} alignItems='center' mt={1}>



                            <Link href='#' >
                                <Image alt="logo"
                                    width={120}
                                    height={90} src='https://www.bengalmeat.com/images/google_play_brn.png'></Image>
                            </Link>
                            <Link href='#' >
                                <Image alt="logo"
                                    width={120}
                                    height={90} src='https://www.bengalmeat.com/images/app_store_btn.png'></Image>
                            </Link>




                        </Stack>

                    </Box>
                    <Box>
                        <Typography color='#FA8F4D' textAlign='center'>Online Payments</Typography>
                        <Stack direction='row' spacing={2} alignItems='center' mt={1}>


                            <Link href='#'>
                                <Image alt="logo"
                                    width={50}
                                    height={30} src='https://www.bengalmeat.com/images/mastercard_icon.png'></Image>
                            </Link>
                            <Link href='#'>
                                <Image alt="logo"
                                    width={50}
                                    height={30} src='https://www.bengalmeat.com/images/visa_icon.png'></Image>
                            </Link>
                            <Link href='#'>
                                <Image alt="logo"
                                    width={50}
                                    height={30} src='https://www.bengalmeat.com/images/nogod_icon.png'></Image>
                            </Link>
                            <Link href='#'>
                                <Image alt="logo"
                                    width={50}
                                    height={30} src='https://www.bengalmeat.com/images/bkash_icon.png'></Image>
                            </Link>
                            <Link href='#'>
                                <Image alt="logo"
                                    width={50}
                                    height={30} src='https://i.postimg.cc/3RKY3P9M/nexsus-pay-logo-removebg-preview.png'></Image>
                            </Link>
                            <Link href='#'>
                                <Image alt="logo"
                                    width={30}
                                    height={20} src='https://www.bengalmeat.com/images/amex.jpg'></Image>
                            </Link>


                        </Stack>

                    </Box>

                    <Box >

                        <Typography color='#FA8F4D' textAlign='center'>Follow Us </Typography>
                        <Stack mt={1} direction='row' spacing={1} alignItems='center'>

                            <Link href='#' >
                                <Box color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    <LinkedInIcon></LinkedInIcon>
                                </Box>
                            </Link>
                            <Link href='#' >
                                <Box color='white' sx={{
                                    '&:hover': {
                                        color: 'red',

                                    }
                                }}>
                                    <YouTubeIcon></YouTubeIcon>
                                </Box>
                            </Link>
                            <Link href='#' >
                                <Box color='white' sx={{
                                    '&:hover': {
                                        color: 'red',

                                    }
                                }}>
                                    <FacebookIcon></FacebookIcon>
                                </Box>
                            </Link>
                            <Link href='#' >
                                <Box color='white' sx={{
                                    '&:hover': {
                                        color: 'red',

                                    }
                                }}>
                                    <InstagramIcon></InstagramIcon>
                                </Box>
                            </Link>

                        </Stack>




                    </Box>

                </Stack>

            </Box>
        </div >
    );
};

export default Footer;
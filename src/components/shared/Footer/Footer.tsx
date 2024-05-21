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


                    <Stack py={5} maxWidth={250}>
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




                    <Stack maxWidth={750} spacing={10}
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                    >
                        <Stack direction={'row'} spacing={10}>

                            <Stack py={5}>

                                <Typography fontSize={18} fontWeight={600} color='#e25300'>
                                    Company Information
                                </Typography>

                                <Link href={'/products'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    Our Story
                                </Typography></Link>
                                <Link href={'/products'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>

                                    Our Customers
                                </Typography></Link>
                                <Link href={'/products'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    License & Certifications
                                </Typography></Link>

                            </Stack>
                            <Stack py={5}>

                                <Typography fontSize={18} fontWeight={600} color='#e25300'>
                                    Customer Service
                                </Typography>

                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    Customer Feedback
                                </Typography></Link>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>

                                    Contact Us
                                </Typography></Link>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    How To Order
                                </Typography></Link>




                            </Stack>

                        </Stack>


                        <Stack direction={'row'} spacing={10}>
                            <Stack py={5}>

                                <Typography fontSize={18} fontWeight={600} color='#e25300'>
                                    Resources
                                </Typography>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    FAQ
                                </Typography></Link>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    Walk The Meat
                                </Typography></Link>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>

                                    Expert Speaks
                                </Typography></Link>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    Blog
                                </Typography></Link>

                            </Stack>
                            <Stack py={5}>

                                <Typography fontSize={18} fontWeight={600} color='#e25300'>
                                    Policies
                                </Typography>

                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    Terms & Conditions
                                </Typography></Link>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>

                                    Refund & Return Policy
                                </Typography></Link>
                                <Link href={'#'}><Typography mt={1} fontSize={15} color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#FA8F4D',

                                    }
                                }}>
                                    Privacy Policy
                                </Typography></Link>

                            </Stack>
                        </Stack>

                    </Stack>

                </Stack>


                <Divider color='#b7b7b7' ></Divider>



                <Stack direction='row' justifyContent='space-between' alignItems='center' py={3}>

                    <Box>
                        <Typography color='#e25300' textAlign='center'>Download App</Typography>
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
                        <Typography color='#e25300' textAlign='center'>Online Payments</Typography>
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

                        <Typography color='#e25300' textAlign='center'>Follow Us </Typography>
                        <Stack mt={1} direction='row' spacing={1} alignItems='center'>

                            <Link href='#' >
                                <Box color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#e25300',

                                    }
                                }}>
                                    <LinkedInIcon></LinkedInIcon>
                                </Box>
                            </Link>
                            <Link href='#' >
                                <Box color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#e25300',

                                    }
                                }}>
                                    <YouTubeIcon></YouTubeIcon>
                                </Box>
                            </Link>
                            <Link href='#' >
                                <Box color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#e25300',

                                    }
                                }}>
                                    <FacebookIcon></FacebookIcon>
                                </Box>
                            </Link>
                            <Link href='#' >
                                <Box color='#FFBD59' sx={{
                                    '&:hover': {
                                        color: '#e25300',

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
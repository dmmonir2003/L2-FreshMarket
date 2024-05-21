import CategoryDrowpMenu from "@/components/clientCompo.tsx/CategoryDrowpMenu";
import ToggoleButtonInNav from "@/components/clientCompo.tsx/ToggoleButtonInNav";
import { Box, Button, Container, Stack, Typography, colors } from "@mui/material";
import Image from "next/image";
import Link from "next/link";




const Navber = () => {

    return (
        <div className="sticky top-0 z-10 bg-white">
            <Container>
                <Box >
                    <Stack direction='row' alignItems={'center'} justifyContent="space-between" >
                        <Stack direction="row" alignItems={'center'} gap={2}>

                            <Image alt="logo"
                                width={80}
                                height={80} src='https://i.ibb.co/1mZBmRF/441248276-413188498348281-4150223707497410940-n-removebg-preview.png'></Image>

                            <Box>

                                <Image alt="name"
                                    width={220}
                                    height={0} src='https://i.postimg.cc/BQ9BRgkd/441059184-466037495875153-7867512273675810353-n-removebg-preview-10.png'></Image>
                            </Box>
                        </Stack>

                        <Stack direction='row' spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
                            <Typography fontWeight={600} component={Link} href={'/'} color='#FA8F4D' sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#e25300'
                                }
                            }}>Home </Typography>

                            <CategoryDrowpMenu></CategoryDrowpMenu>
                            <Typography fontWeight={600} component={Link} href={'/products'} color='#FA8F4D' sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#e25300'
                                }
                            }}>Products </Typography>
                            <Typography fontWeight={600} component={Link} href={'/flash-sale'} color='#FA8F4D' sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#e25300'
                                }
                            }}>Flash Sale </Typography>
                            <Typography fontWeight={600} component={Link} href={'/about-us'} color='#FA8F4D' sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#e25300'
                                }
                            }}>About Us </Typography>
                            <Typography fontWeight={600} component={Link} href={'/contact-us'} color='#FA8F4D' sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#e25300'
                                }
                            }}>Contact Us </Typography>
                            <Typography fontWeight={600} component={Link} href={'/dashboard'} color='#FA8F4D' sx={{
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#e25300'
                                }
                            }}>Dashboard </Typography>
                        </Stack>

                        <ToggoleButtonInNav>
                        </ToggoleButtonInNav>

                    </Stack>
                </Box>
            </Container>

        </div >
    );
};

export default Navber;




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
                                width={100}
                                height={100} src='https://i.ibb.co/1mZBmRF/441248276-413188498348281-4150223707497410940-n-removebg-preview.png'></Image>

                            <Box>

                                <Image alt="name"
                                    width={220}
                                    height={0} src='https://i.postimg.cc/BQ9BRgkd/441059184-466037495875153-7867512273675810353-n-removebg-preview-10.png'></Image>
                            </Box>
                        </Stack>

                        <Stack direction='row' spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
                            <Typography fontWeight={600} component={Link} href={'/'}>Home </Typography>

                            <CategoryDrowpMenu></CategoryDrowpMenu>
                            <Typography fontWeight={600} component={Link} href={'/products'}>Products </Typography>
                            <Typography fontWeight={600} component={Link} href={'/flash-sale'}>Flash Sale </Typography>
                            <Typography fontWeight={600} component={Link} href={'/about-us'}>About Us </Typography>
                            <Typography fontWeight={600} component={Link} href={'/contact-us'}>Contact Us </Typography>
                            <Typography fontWeight={600} component={Link} href={'/dashboard'}>Dashboard </Typography>
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





// {/* https://iili.io/J86Om92.png */ }




// //Banner image
// // https://www.basarbazar.com.bd/wp-content/uploads/2019/12/Banner3.jpg

// // https://www.basarbazar.com.bd/wp-content/uploads/2019/12/Banner1.jpg

// // https://www.basarbazar.com.bd/wp-content/uploads/2019/12/Banner5.jpg

// // https://themeatmarket.ph/cdn/shop/files/wholesale_needs_1170x.progressive.png.jpg?v=1691031866


// // demo site for color and navber
// // https://www.luluhypermarket.in/en-in/groceries-fresh-food-fresh-meat-chicken/c/HY00216147


// // meet-beef image for bannser

// // https://images.squarespace-cdn.com/content/v1/63430e0d8f68b501470722ab/1674760522218-LIPF3T4WQ5PWYP1TAB2T/AdobeStock_247349249.jpeg?format=300w

// //  mutton meat
// // https://st2.depositphotos.com/22628872/44276/i/450/depositphotos_442761114-stock-photo-lamb-raw-cutlets-chops-salt.jpg

// // https://img.freepik.com/premium-photo/raw-leg-lamb-with-spices-rosemary_80090-2666.jpg?w=360




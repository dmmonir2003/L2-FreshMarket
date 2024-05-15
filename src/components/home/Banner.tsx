// import { Box, Typography } from "@mui/material";
// import Image from "next/image";

// const Banner = () => {
//     return (
//         <div style={{ width: '100%', height: '80vh' }}>
//             <Box
//                 sx={{
//                     position: 'relative',
//                     width: '100%',
//                     height: '100%',
//                     backgroundImage: 'url("https://media.istockphoto.com/id/1156301386/photo/various-kind-types-of-salami-speck-and-sausages.jpg?s=612x612&w=0&k=20&c=HR3dPm0OS7vrBq2PqDVlbJ1JDbVFGn15r65vJyRTdUo=")',
//                     backgroundSize: 'cover',
//                     filter: 'opacity(0.8)',
//                     paddingTop: '20px',

//                 }}
//             >

//                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.1 }}></div>

//                 <Typography variant="h4" align="center" sx={{
//                     color: 'green', fontWeight: 700, fontSize: '2rem', zIndex: 1, width: {
//                         xs: 300,
//                         sm: 600,
//                         md: 800,
//                     },
//                     mx: 'auto'
//                 }}>FreshMarket Explorer: Elevating Grocery Shopping</Typography>
//                 <Typography align="center" sx={{ color: 'white', overflow: 'hidden', width: { md: 800 }, mx: 'auto', }}>Welcome to FreshMarket Explorer, your ultimate destination for premium fish and meat groceries. Elevate your grocery shopping experience with our carefully curated selection of the freshest fish and finest meats. Dive into a world of quality and flavor as you explore our wide range of seafood delights and succulent cuts.</Typography>
//             </Box>
//         </div>
//     );
// };

// export default Banner;



import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AnimationInBanner from "./AnimationInBanner";


const Banner = () => {


    return (
        <Box sx={{
            height: {
                md: 500
            }
        }}>
            {/* style={{ width: '100%', height: '80vh' }} */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("https://meat-bazar.com/wp-content/uploads/2024/01/raw-meats-with-spices-utensils-rustic-cutting-board-dark-wood-ai-generative-scaled-e1706633454407-1536x765.jpg")',
                    backgroundSize: 'cover',

                    paddingTop: '20px',

                }}
            >



                <Stack >
                    <Box pt={20}>
                        <Typography variant="h4" align="center" sx={{ color: 'green', fontWeight: 700, fontSize: '2rem', zIndex: 1, textShadow: ' 4px 6px 6px rgba(0,3,162,0.6)' }}>FreshMarket Explorer: Elevating Grocery Shopping</Typography>
                        <Typography
                            align="center"
                            sx={{

                                color: 'white',
                                width: {
                                    sm: 400,
                                    md: 800
                                },
                                mx: 'auto'

                            }}
                        >
                            Welcome to FreshMarket Explorer, your ultimate destination for premium fish and meat groceries. Elevate your grocery shopping experience with our carefully curated selection of the freshest fish and finest meats. Dive into a world of quality and flavor as you explore our wide range of seafood delights and succulent cuts.
                        </Typography>
                    </Box>
                </Stack>


                <Box sx={{
                    width: {
                        xs: 300,
                        sm: 500,
                        md: 800
                    },
                    mx: 'auto',
                    mt: 5,


                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <AnimationInBanner>
                    </AnimationInBanner>

                </Box>
            </Box>


        </Box>
    );
};

export default Banner;

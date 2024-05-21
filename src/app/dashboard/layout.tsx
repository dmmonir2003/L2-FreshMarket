import Sidebar from "@/components/shared/Sidebar.tsx/Sidebar";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import Avatar from '@mui/material/Avatar';
const MainLayoutPage = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Box py={3} bgcolor='gray' sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack ml={2} direction='row' gap={1}>
                        <Image width={50}
                            height={50} src='https://i.ibb.co/1mZBmRF/441248276-413188498348281-4150223707497410940-n-removebg-preview.png' alt='logo'></Image>
                        <Image alt="name"
                            width={220}
                            height={0} src='https://i.postimg.cc/BQ9BRgkd/441059184-466037495875153-7867512273675810353-n-removebg-preview-10.png'></Image>
                    </Stack>
                    <Stack mr={3} direction={'row'} gap={2} alignItems={'center'}>

                        <Box><Typography fontSize={16} fontWeight={600} color={'#e25300'}>Moniruzzman</Typography>
                            <Typography fontSize={14} fontWeight={500} color={'#FA8F4D'}>Admin</Typography>
                        </Box>

                        <Avatar src="https://i.ibb.co/ft3qVkZ/IMG-0140.jpg" />
                    </Stack>
                </Stack>
            </Box >
            <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid item sm={3} sx={{ position: 'static', top: 0 }}>
                    <Sidebar></Sidebar>
                </Grid>
                <Grid item sm={9}>

                    <Box>{children}</Box>
                </Grid>
            </Grid>
        </>
    );
};

export default MainLayoutPage;

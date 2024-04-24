import { Box, Typography } from "@mui/material";


const CategorySection = () => {
    return (
        <div className="">



            <Box my={10}>

                <Typography variant="h4" component='h4' textAlign='center' fontWeight={700}>
                    Top Categories
                </Typography>
                <Typography component='p' textAlign='center' fontWeight={600} sx={{ width: '50%', mx: 'auto' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat suscipit voluptas mollitia praesentium assumenda dolor voluptate quasi sit, nemo facilis!
                </Typography>

            </Box>

        </div>
    );
};

export default CategorySection;
import { Box, Typography, Grid, Button } from "@mui/material";
import { green, red } from "@mui/material/colors";
import Link from "next/link";
import Card from "../clientCompo.tsx/Card";

const CategorySection = () => {
    // const Data = [
    //     { category: 'Living Room Furniture' },
    //     { category: 'Dining Room Furniture' },
    //     { category: 'Sofa Sets' },
    //     { category: 'Bedroom Furniture' }
    // ];
    const images = [
        {
            url: 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg',
            title: 'Breakfast',
            width: '40%',
        },
        {
            url: 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg',
            title: 'Burgers',
            width: '30%',
        },
        {
            url: 'https://meat-bazar.com/wp-content/uploads/2024/02/Goat-Shoulder-800x800.jpg',
            title: 'Camera',
            width: '30%',
        },
    ];



    return (
        <>
            <Box my={10}>
                <Typography variant="h4" component='h4' textAlign='center' fontWeight={700}>
                    Top Categories
                </Typography>
                <Typography component='p' textAlign='center' fontWeight={600} sx={{ width: '50%', mx: 'auto' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat suscipit voluptas mollitia praesentium assumenda dolor voluptate quasi sit, nemo facilis!
                </Typography>
            </Box>

            <div className="grid md:grid-cols-3 gap-4  justify-center ">
                {images.map((item, index) => (
                    <div key={index} className={`${index === 0 || index === 2 ? 'row-span-2 h-[300px] bg-gray-400 rounded-xl border border-purple-900' : 'rounded-xl border bg-red-400  border-purple-900'}`}>


                        <Card></Card>


                    </div>
                ))}
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <Button
                    variant='contained'
                    sx={{
                        borderRadius: '45%',
                        backgroundColor: red[500],
                        '&:hover': { backgroundColor: 'red' } // Corrected syntax for hover state
                    }}
                >
                    <Link href={'/products'}>View All</Link>
                </Button>
            </Box>



        </>
    );
};

export default CategorySection;


// sm:h-[300px] md:h-[138px]
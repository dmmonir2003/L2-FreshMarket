import { Box, Typography, Grid } from "@mui/material";
import { green, red } from "@mui/material/colors";

const CategorySection = () => {
    const furnitureData = [
        { category: 'Living Room Furniture' },
        { category: 'Dining Room Furniture' },
        { category: 'Sofa Sets' },
        { category: 'Bedroom Furniture' }
    ];

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

            <Grid container spacing={4} justifyContent="center">
                {furnitureData.map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Box
                            bgcolor={index % 2 === 1 ? "red.500" : "green.500"} // Alternate bgcolor based on index
                            p={2}
                            textAlign="center"
                            sx={{ minHeight: index % 2 === 1 ? 100 : 216, backgroundColor: index % 2 === 1 ? red[500] : green[500], marginBottom: index % 2 === 1 ? 2 : 0 }}
                        >
                            {index % 2 === 1 ? "single row" : "Dubble row"} {/* Adjust text based on index */}
                        </Box>
                        {index % 2 === 1 && (
                            <Box
                                bgcolor={red[500]}
                                p={2}
                                textAlign="center"
                                sx={{ minHeight: 100, backgroundColor: red[500] }}
                            >
                                row
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>

            {/* <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={4}>
                    <Box bgcolor="green.500" p={2} textAlign="center" sx={{ minHeight: 216, backgroundColor: green[500] }}>
                        Dubble row
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} spacing={2}>
                    <Box bgcolor="red.500" p={2} textAlign="center" sx={{ minHeight: 100, backgroundColor: red[500], marginBottom: 2 }}>
                        single row
                    </Box>
                    <Box bgcolor="red[500]" p={2} textAlign="center" sx={{ minHeight: 100, backgroundColor: red[500] }}>
                        row
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box p={2} textAlign="center" sx={{ minHeight: 216, backgroundColor: green[500] }}>
                        Dubble row
                    </Box>
                </Grid>
            </Grid> */}



            {/* <div className="grid md:grid-cols-3 gap-4 ">
                <div className=" row-span-2 bg-green-500 ">Dubble row </div>


                <div className=" bg-red-500 ">single row </div>
                <div className="  bg-purple-400 row-span-2"> row</div>


                <div className=" bg-gray-500 ">Dubble row </div>
            </div> */}

        </div >
    );
};

export default CategorySection;
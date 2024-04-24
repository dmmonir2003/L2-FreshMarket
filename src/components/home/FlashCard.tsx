import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Grid, Icon, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const FlashCard = ({ data }) => {
    console.log(data);
    return (
        <>
            <Grid container spacing={{ sm: 2, sx: 1, md: 2 }} columns={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
                alignItems="center">
                {data.map((products, index) => (
                    <Grid item key={index}>
                        <Card sx={{ maxWidth: 255, minWidth: 255, minHeight: 360, maxHeight: 360, position: 'relative', }}>
                            <IconButton aria-label="percentage" sx={{
                                position: 'absolute', top: 0, left: 0, backgroundColor: red[500], '&:hover': {
                                    backgroundColor: red[500],
                                }, borderRadius: '', padding: '2px', px: 2, textAlign: 'center', ml: 1, mt: 1
                            }}>
                                <Typography component={'p'} sx={{ fontSize: 12, color: 'white' }} > -13%</Typography>
                            </IconButton>
                            <IconButton aria-label="add to favorites" sx={{ position: 'absolute', top: -2, right: 0, zIndex: 3, color: red[500] }}>
                                <FavoriteIcon sx={{ fontSize: 24, }} />
                            </IconButton>

                            <CardMedia
                                component="img"
                                height=""
                                image={products?.imagesUrl}
                                alt="card image"
                                sx={{ maxHeight: 250, borderRadius: 2, minHeight: 250, padding: 4, }}

                            />
                            <CardContent sx={{ mb: 0 }}>
                                <Stack direction='row' alignItems='end' justifyContent='space-between'>


                                    <Box>
                                        <Typography color="text.secondary">
                                            {products?.title}
                                        </Typography>
                                        <Typography>
                                            <span className='line-through'>$2000</span> $1500
                                        </Typography>

                                    </Box>
                                    <Box>
                                        <AddCircleOutlineIcon></AddCircleOutlineIcon>
                                    </Box>
                                </Stack>



                            </CardContent>


                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default FlashCard;

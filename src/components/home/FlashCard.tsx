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
import { Grid, Icon, Stack } from '@mui/material';

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
                                }, borderRadius: '', padding: '2px', px: 2, textAlign: 'center', ml: 1
                            }}>
                                <Typography component={'p'} sx={{ fontSize: 12, color: 'white' }} > -13%</Typography>
                            </IconButton>
                            <IconButton aria-label="add to favorites" sx={{ position: 'absolute', top: -2, right: 0, zIndex: 3, color: red[500] }}>
                                <FavoriteIcon sx={{ fontSize: 20, }} />
                            </IconButton>

                            <CardMedia
                                component="img"
                                height=""
                                image={products?.imagesUrl}
                                alt="card image"
                                sx={{ maxHeight: 200, borderRadius: 2, minHeight: 200, padding: 4, }}

                            />
                            <CardContent>
                                <Typography variant="" color="text.secondary">
                                    {products?.title}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>

                                <IconButton aria-label="Add to Cart">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                 <CardContent>
                   <Typography paragraph>Method:</Typography>
                   <Typography paragraph>
                     Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                     aside for 10 minutes.
                   </Typography>
                   <Typography paragraph>
                     Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                     medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                     occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                     large plate and set aside, leaving chicken and chorizo in the pan. Add
                     pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                     stirring often until thickened and fragrant, about 10 minutes. Add
                     saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                   </Typography>
                   <Typography paragraph>
                     Add rice and stir very gently to distribute. Top with artichokes and
                     peppers, and cook without stirring, until most of the liquid is absorbed,
                     15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                     mussels, tucking them down into the rice, and cook again without
                     stirring, until mussels have opened and rice is just tender, 5 to 7
                     minutes more. (Discard any mussels that don&apos;t open.)
                   </Typography>
                   <Typography>
                     Set aside off of the heat to let rest for 10 minutes, and then serve.
                   </Typography>
                 </CardContent>
               </Collapse> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default FlashCard;

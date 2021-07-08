import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,//345,

    },
    media: {
        height: 50,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Products = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    console.log('product props', props);
    return (
        
        <div style={{ 'display': 'grid', 'gridTemplateColumns': '35%  35% 35%', 'margin-top': '10px', 'margin-bottom': '70px' }}>
          
            {props.product.products.filter(product => {
                if (props.category.activeCategory.name === 'all categories') {
                    return product
                }
                else if (product.category === (props.category.activeCategory ? props.category.activeCategory.name : product)) {
                    return product
                }
            })

                // product.category === (props.category.activeCategory ? props.category.activeCategory.name : null))
                .map((product) => {
                    return (

                        <div style={{'margin-top':'50px'}} >


                            <Card className={classes.root}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={product.name}
                                    subheader={product.category}
                                />

                                <CardMedia
                                    className={classes.media}
                                    image={product.img}
                                    title={product.name}
                                />


                                 <CardActions disableSpacing>
                                  
                           <IconButton aria-label="add to favorites" >
                                    <AddShoppingCartIcon/>
                                    <small> Add to Cart</small>
                                </IconButton>


                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>

                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>{product.description}</Typography>
                                        <Typography paragraph>
                                            {product.price} JD
                                        </Typography>
                                        <Typography paragraph>
                                            {product.inventory_count} pieces available
                                        </Typography>
                                    </CardContent>
                                </Collapse>


                            </Card>
                        </div>


                    )
                })}
        </div>

    )
}




const mapStateToProps = state => ({
    product: state.products,
    category: state.categories
});



export default connect(mapStateToProps)(Products);

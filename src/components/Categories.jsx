import { Button, ButtonGroup } from '@material-ui/core';
import { connect } from 'react-redux';

import { setActiveCategory, reset } from '../store/categories';

import {filterProducts,resetCategories} from '../store/products'


const Categories = props => {
  console.log('props category',props);
    return (
        <section>
            <ButtonGroup variant="text" color="primary">
                {props.category.categories.map((C) => {
                    return <Button  onClick={() => props.setActiveCategory(C)} >{C.displayName}</Button>
                })}
                <Button onClick={() => props.reset()}>Reset</Button>
            </ButtonGroup>
        </section>
    )
}



const mapStateToProps = (state) => ({
    category: state.categories
});




const mapDispatchToProps = { setActiveCategory ,reset}//filterProducts,resetCategories




export default connect(mapStateToProps, mapDispatchToProps)(Categories);
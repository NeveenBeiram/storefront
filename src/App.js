import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/products';
// import ActiveCategory from './components/activeCategory';


function App() {
    return (
        <React.Fragment>
        <Header />
          <Categories />
          {/* <ActiveCategory/> */}
          <Products />
        <Footer />
        </React.Fragment>
    );
}

export default App;

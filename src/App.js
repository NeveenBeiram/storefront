import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/products';



function App() {
    return (
        <React.Fragment>
        <Header />
          <Categories />
          <Products />
        <Footer />
        </React.Fragment>
    );
}

export default App;

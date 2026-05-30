import React from "react";
import HeroBanner from "./hero/hero.js";
import Main from "./Main/main.js";
import Card from "./Card/card.js";
import Why from "./Why_us/why.js"
import Products from "./Products/products.js"
import ProductShowcase from "./ProductShowCase/Showcase.js";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Main />
            <Card />
            <ProductShowcase/>
            <Why />
            <Products/>
        </div>
    );
};

export default Home;
import React from "react";
import HeroBanner from "./hero/hero.js";
import Main from "./Main/main.js";
import Card from "./Card/card.js";
import Why from "./Why_us/why.js"
import Products from "./Products/products.js"

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Main />
            <Card />
            <Why />
            <Products/>
        </div>
    );
};

export default Home;
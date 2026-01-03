import React from "react";
import Layer1 from './layer1/layer1';
import Layer2 from './layer2/Layer2'


const Home = () => {
    return (
        <div className="productPage">
        <Layer1 />
        <Layer2 />
        </div>
    );
};

export default Home;
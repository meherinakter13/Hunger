import React from 'react';
import burger from'../images/burger.jpg';
import pizza from'../images/pizza.jpg';
import hotdog from'../images/hot_dog.jpg';
import fries from'../images/fries.jpg';
import coffee from'../images/coffe.jpg';
import cokkies from'../images/cokkies.jpg';

const Content = () => {
    return (
        <div className=" grid grid-rows-3 gap-4 md:grid-flow-col">
        <div className="menu-card p-12">
            <img src={burger} alt="burger" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">King Burger</h2>
                <p className="mb-2">sweet, sour, salt – with a bit of crunch</p>
                <span>$15</span>
            </div>
        </div>
        <div className="menu-card p-12">
            <img src={pizza} alt="pizza" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Familly Pizza</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$30</span>
            </div>
        </div>
        <div className="menu-card p-12">
            <img src={hotdog} alt="hotdog" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Hot Dog</h2>
                <p className="mb-2">sweetness, beef taste, salt and light flavoring</p>
                <span>$18</span>
            </div>
        </div>
        <div className="menu-card p-12">
            <img src={fries} alt="kabab" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">French fries</h2>
                <p className="mb-2"> Salty and starchy </p>
                <span>$12</span>
            </div>
        </div>
        <div className="menu-card p-12">
            <img src={coffee} alt="coffee" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Cappuccino</h2>
                <p className="mb-2"> Flowery, nutty, smoky, herby</p>
                <span>$15</span>
            </div>
        </div>
        <div className="menu-card p-12">
            <img src={cokkies} alt="cokkies" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Benne Wafer</h2>
                <p className="mb-2">small, flat and sweet</p>
                <span>$16</span>
            </div>
        </div>
        </div>
    );
};

export default Content;
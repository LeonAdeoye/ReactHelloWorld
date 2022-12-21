import React from 'react';

const Hero = ({heroName}) =>
{
    if(heroName === "Joker")
        throw new Error("Not a hero")

    return (
        <div>
            <h1>No Hero Error: {heroName}</h1>
        </div>
    );
};

export default Hero;

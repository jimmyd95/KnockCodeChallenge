import React from 'react';
import b1 from "../images/blend_icon/Apex.svg";
import b2 from "../images/blend_icon/Canopy.svg";
import b3 from "../images/blend_icon/Coastal.svg";
import b4 from "../images/blend_icon/Howler.svg";
import b5 from "../images/blend_icon/Restful.svg";
import light from "../images/roast_icon/LightRoast.svg";
import dark from "../images/roast_icon/DarkRoast.svg";
import ground from "../images/roast_icon/GroundCoffee.svg";
import medium from "../images/roast_icon/MediumRoast.svg";
import multi from "../images/roast_icon/MultiOrigin.svg";
import single from "../images/roast_icon/SingleOrigin.svg";
import whole from "../images/roast_icon/WholeBean.svg";

export const cards = [
    {
        content: 'Card 1',
        verticalText: 'APEX',
        column1: {
            bigTitle: 'APEX ROAST',
            smallTitle: 'NO IDEA',
        },
        column2: {
            items:[
                {img: light, text: 'LIGHT ROAST'},
                {img: dark, text: 'WHOLE BEAN'},
                {img: single, text: 'SINGLE ORIGIN'},
            ],
            paragraph: 'SOME RANDOM THING THAT HAS BEEN SAID',
        },
        background: b1,
    },
    {
        content: 'Card 2',
        verticalText: 'CANOPY',
        column1: {
            bigTitle: 'CANOPY ROAST',
            smallTitle: 'COSTA RICA',
        },
        column2: {
            items:[
                {img: light, text: 'LIGHT ROAST'},
                {img: whole, text: 'WHOLE BEAN'},
                {img: single, text: 'SINGLE ORIGIN'},
            ],
            paragraph: 'Delicate citrus and floral notes with brown sugar sweetness',
        },
        background: b2,
    },
    {
        content: 'Card 3',
        verticalText: 'COASTAL',
        column1: {
            bigTitle: 'COASTAL ROAST',
            smallTitle: 'RANDOM SPOT',
        },
        column2: {
            items:[
                {img: medium, text: 'MEDIUM ROAST'},
                {img: multi, text: 'MULTI ORIGIN'},
                {img: ground, text: 'GROUND COFFEE'},
            ],
            paragraph: 'Delicate citrus and floral notes with brown sugar sweetness',
        },
        background: b3,
    },
    {
        content: 'Card 4',
        verticalText: 'HOWLER',
        column1: {
            bigTitle: 'HOWLER ROAST',
            smallTitle: 'RANDOM SPOT',
        },
        column2: {
            items:[
                {img: light, text: 'LIGHT ROAST'},
                {img: whole, text: 'WHOLE BEAN'},
                {img: single, text: 'SINGLE ORIGIN'},
            ],
            paragraph: 'Delicate citrus and floral notes with brown sugar sweetness',
        },
        background: b4,
    },
    {
        content: 'Card 5',
        verticalText: 'Canopy',
        column1: {
            bigTitle: 'RESTFUL ROAST',
            smallTitle: 'RANDOM SPOT',
        },
        column2: {
            items:[
                {img: light, text: 'LIGHT ROAST'},
                {img: whole, text: 'WHOLE BEAN'},
                {img: single, text: 'SINGLE ORIGIN'},
            ],
            paragraph: 'Delicate citrus and floral notes with brown sugar sweetness',
        },
        background: b5,
    },
]
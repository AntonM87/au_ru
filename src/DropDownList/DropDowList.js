
import React, { useState, useEffect } from 'react';
import Select from '../Select/Select'

export default function DropDowList(props) {

    const { cities, onChangeCityHandler } = props

    const filterPopulationArr = cities.filter(city => {
        const population = city.population;
        return population >= 5000 ? true : false;
    })

    const sortByMaxPopulationArr = filterPopulationArr.sort((prev, next) => {
        return next.population - prev.population;
    });

    const maxPopulation = sortByMaxPopulationArr[0];

    const sortByAlphabet = filterPopulationArr.sort((prev, next) => {
        if (prev.city < next.city) {
            return -1
        } else if (prev.city > next.city) {
            return 1;
        } else {
            return 0
        }
    });

    const resArr = resConcatArr(maxPopulation, sortByAlphabet);

    function resConcatArr(firstElem, array) {
        let result = [];
        result.push(firstElem);
        array.forEach((val, i) => {
            if (val === firstElem) return;
            result.push(val);
        })
        return result;
    };

    return (
        <div className='container'>
            <Select onChangeCityHandler={onChangeCityHandler} resArr={resArr} />
        </div>
    );
}
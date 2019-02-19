import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types'
import * as Status from './status';

const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
    switch (status) {
        case Status.LOADING: {
            return <div>天气信息请求中...</div>
        }

        case Status.SUCCESS: {
            return (
                <div>
                    {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
                </div>
            )
        }

        case Status.FAILURE: {
            return <div>天气信息装载失败</div>
        }

        default: {
            throw new Error('unexpected status ' + status);
        }
    }
}

Weather.propTypes = {
    status: propTypes.string.isRequired,
    cityName: propTypes.string,
    weather: propTypes.string,
    lowestTemp: propTypes.string,
    highestTemp: propTypes.string
};

const mapStateToProps = (state) => {
    const weatherData = state.weather;

    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    }
};
// var arrTest = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// var resultArr =[];
// function test(arr) {
//     if(Array.isArray(arr)){
//         arr.forEach(item =>{
//             if(Array.isArray(item)){
//                 test(item)
//             }else {
//                 if(resultArr.indexOf(item)<0){
//                     resultArr.push(item)
//                 }
//             }
//         })
//     }
// }
// test(arrTest);
// console.log(resultArr.sort(function (a,b) {
//     return a-b;
// }))
export default connect(mapStateToProps)(Weather);

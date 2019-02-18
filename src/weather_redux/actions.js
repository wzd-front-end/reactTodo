import {FETCH_FAILURE, FETCH_STARTED, FETCH_SUCCESS} from './actionTypes'

export const fetchWeatherStarted = () => ({
    type:FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
    type:FETCH_SUCCESS,
    result
});

export const fetchWeatherFailure = (error) => ({
    type:FETCH_FAILURE,
    error
});

export const fetchWeather = (cityCode)=>{
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;

        dispatch(fetchWeatherStarted());

        return fetch(apiUrl).then((respone) => {
            if(respone.status !== 200){
                throw new Error('Fail to get response with status ' + respone.status);
            }

            respone.json().then((responeJson) => {
                dispatch(fetchWeatherSuccess(responeJson.weatherinfo));
            }).catch((error) => {
                dispatch(fetchWeatherFailure(error));
            })
        }).catch((error) => {
            dispatch(fetchWeatherFailure(error))
        })
    }
};

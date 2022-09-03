import axios from 'axios'

export const GET_INFO = 'GET_INFO'

export const getInfo = (info) => async dispatch => {

    console.log(info)

    return dispatch({
        type: GET_INFO,
        payload: info
    })

}

/* export const getInfo = () => async dispatch => {
    try{
        const json = await axios.get(`https://swapi.dev/api/`)
        if (json.status === 200){
            return dispatch ({
                type: GET_INFO,
                payload: json.data
            })
        }
    }
    catch (error) {
        console.log(error, 'Errores')
        return dispatch({
            type: GET_INFO,
            payload: error.response.data.errors
        })
    }
} */


import axios from 'axios'

export const GET_STEP_INFO = 'GET_STEP_INFO'
export const GET_REPLY = 'GET_REPLY'
export const GET_ALL_STEPS = 'GET_ALL_STEPS'

export const getAllSteps = (json) => async dispatch => {
    return dispatch({
        type: GET_ALL_STEPS,
        payload: json
    })
  /*   try {
        const json = await axios.get(`http://localhost:3006/pasos`)
        if (json.status === 200) {
            return dispatch({
                type: GET_ALL_STEPS,
                payload: json.data
            })
        }
    }
    catch (error) {
        console.log(error)
    } */
}

export const getStepInfoByKey = (info) => /* async */ dispatch => {

    return dispatch({
        type: GET_STEP_INFO,
        payload: info
    })

}

export const getReplyByKey = (info) => /* async */ dispatch => {

    return dispatch({
        type: GET_REPLY,
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


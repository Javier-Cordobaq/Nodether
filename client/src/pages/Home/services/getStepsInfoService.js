import axios from 'axios'

export const getAllStepsService = async () => {
    const json = await axios.get('http://localhost:3006/pasos')
    return json.data
}
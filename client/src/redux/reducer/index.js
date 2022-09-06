import {
    GET_STEP_INFO,
    GET_ALL_STEPS,
    GET_REPLY
} from "../actions/index";

const inicialState = {
  info: [],
    reply: [
        {
        'key': "STEP_1",
            "replyMessage":[
                "El flujo ha finalizado \n",
                "pero puedes ver todo el codigo de este \n",
                "repositorio en https://github.com/leifermendez/bot-whatsapp.git"
            ],
            "media":null,
            "trigger":null
        },
       ],
    stepDetail: [],
    replyByKey: [] 
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_ALL_STEPS:
        return {
            ...state,
            info: action.payload
        }
    case GET_STEP_INFO:
      return {
        ...state,
        stepDetail: state.info.filter(c => c.option_key === action.payload),
        replyByKey: state.reply.filter(c => c.key === action.payload)
      }
    default:
      return state;

  }
};

export default rootReducer;

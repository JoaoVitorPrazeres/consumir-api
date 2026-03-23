import * as types from '../types';
const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'BOTAO_CLICADO_SUCCESS': {
      console.log('sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case 'BOTAO_CLICADO_FAILURE': {
      console.log('Deu pau');
      return state;
    }
    case 'BOTAO_CLICADO_REQUEST': {
      console.log('Espera ai');
      return state;
    }
    default: {
      return state;
    }
  }
}

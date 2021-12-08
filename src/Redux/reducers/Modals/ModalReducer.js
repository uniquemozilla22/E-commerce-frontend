import { CARTMODAL } from "../Action/Types";

const initalState = {
  CART: false,
};

const ModalReducer = (state = initalState, action) => {
  switch (action.type) {
    case CARTMODAL:
      return {
        ...state,
        CART: !initalState.CART,
      };
    default:
      return state;
  }
};

export default ModalReducer;

import { CREATE_DATA_REQUEST, CREATE_DATA_SUCCESS, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS, UPDATE_DATA_SUCCESS } from "../action";

const initialState = {
 data:[]
};




const Reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading:false,
      };

      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading:false,
          data:action.payload
        };

      case UPDATE_DATA_SUCCESS:
          return {
            ...state,
            data:action.payload,
          };

      case CREATE_DATA_REQUEST:
          return {
            ...state,
            loading:false,
            data:action.payload
          };
      
      case CREATE_DATA_SUCCESS:
          return {
              ...state,
              loading:false,
              data:action.payload
          };

      case DELETE_DATA_REQUEST:
            return {
              ...state,
              loading:false,
              data:action.payload
            };
        
      case DELETE_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload
            };
          
    default:
      return state;
  }
};

export default Reducer;

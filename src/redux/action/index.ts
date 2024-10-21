export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const UPDATE_DATA_REQUEST = 'UPDATE_DATA_REQUEST';
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';

export const CREATE_DATA_REQUEST = 'CREATE_DATA_REQUEST';
export const CREATE_DATA_SUCCESS = 'CREATE_DATA_SUCCESS';

export const DELETE_DATA_REQUEST = 'DELETE_DATA_REQUEST';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';

export const Get = (data:any) => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const Get_SUCCESS = (action:any) => {
  return {
    type: FETCH_DATA_SUCCESS,
    data:action.payload
  };
};


export const updateDataRequest = (item:any) => ({
  type: UPDATE_DATA_REQUEST,
  payload: item,
});

export const updateDataSuccess = (updatedItem:any) => ({
  type: UPDATE_DATA_SUCCESS,
  payload: updatedItem,
});

export const createDataRequest = (createdItem:any) => ({
  type: CREATE_DATA_REQUEST,
  payload: createdItem,
});

export const createDataSuccess = (createdItem:any) => ({
  type: CREATE_DATA_SUCCESS,
  payload: createdItem,
});

export const deleteDataRequest = (deleteItem:any) => ({
  type: CREATE_DATA_REQUEST,
  payload: deleteItem,
});

export const deleteDataSuccess = (deleteItem:any) => ({
  type: CREATE_DATA_SUCCESS,
  payload: deleteItem,
});


// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'; // Add success action

// export const Get = (data) => {
//   return {
//     type: FETCH_DATA_REQUEST,
//     payload: data,
//   };
// };

import { insertitem, traeritem, eliminaritem } from '../db';

export const ADD_ITEM = 'ADD_ITEM';
export const LOAD_ITEM = 'LOAD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const loaditems = () => {
    return async dispatch => {
        try {
            const result = await traeritem();
            console.log(result);
            dispatch({ type: LOAD_ITEM, places: result.rows._array });
        } catch (error) {
            throw error;
        }
    }
}

export const crear = (descripcion, importe, stock, image) => {
    return async dispatch => {
        try {
            const result = await insertitem(descripcion, importe, stock, image);
            console.log(result);
            dispatch({ type: ADD_ITEM, places: result.rows._array });
        } catch (error) {
            throw error;
        }
    }
}

export const eliminar = (id) => {
    return async dispatch => {
        try {
            const result = await eliminaritem(id);
            console.log(id);
            dispatch({ type: DELETE_ITEM, places: result.rows._array });
        } catch (error) {
            throw error;
        }
    }
}
import { insertAddress, traeritem } from '../db';

export const ADD_ITEM = 'ADD_ITEM';
export const LOAD_ITEM = 'LOAD_ITEM';

export const loadPlaces = () => {
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
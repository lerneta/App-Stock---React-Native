import { ADD_ITEM, LOAD_ITEM, DELETE_ITEM } from './item.action';
import Place from  '../models/Productos';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            const newPlace = new Place(
            
                action.payload.id.toString(),
                action.payload.title,
                action.payload.image,
                action.payload.amount,
                action.payload.stock
            )
            return {
                ...state,
                places: state.places.concat(newPlace),
            };
        case LOAD_ITEM:
            return {
                ...state,
                places: action.places.map(item => new Place(
                    item.id.toString(),
                    item.title,
                    item.image,
                    item.amount,
                    item.stock
                )),
            }
            case DELETE_ITEM:
                return {
                    ...state,
                    places: action.places.map(item => new Place(
                        item.id.toString()
                    )),
                }
        default:
            return state;
    }
}
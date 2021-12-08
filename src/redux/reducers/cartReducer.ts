import IProduct from "model/types";
import { CartAction } from "redux/actions/cartAction";
import {ActionType} from "../actionTypes";

const initialState: IProduct[] = [] as IProduct[];

 const cartReducer = (state: IProduct[] = initialState, action: CartAction): IProduct[] => {

    switch (action.type) {
        case ActionType.ADD_TO_CART :
            return [...state, action.payload];
        case ActionType.REMOVE_FROM_CART : {
            const newState: IProduct[] | [] = [];
            return newState;
        }
        case ActionType.CLEAR_CART: 
        return [];
        default: 
        return state;
    }
}


export default cartReducer;
import IProduct from "model/types"
import { ActionType } from "../actionTypes"

interface AddToCArtAction {
    type: ActionType.ADD_TO_CART
    payload: IProduct
}
interface RemoveFromCart {
    type: ActionType.REMOVE_FROM_CART
    payload: string
}
interface ClearCart {
    type: ActionType.CLEAR_CART
}
export type CartAction = AddToCArtAction | RemoveFromCart | ClearCart

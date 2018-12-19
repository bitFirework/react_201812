import Constant from './Constant';
import AppDispatcher from './AppDispatcher';

const ItemActions = {
    addItem(itemName) {
        if (itemName.length >= 2) {
            let id = new Date().getTime();
            AppDispatcher.dispatch({
                type: Constant.ADD_ITEM,
                payload: { id, itemName }
            }); // dispatch : 뭔가를 전달한다.
        }
    },
    deleteItem(id) {
        AppDispatcher.dispatch({
            type: Constant.DELETE_ITEM,
            payload: { id:id }
        })
    },
    changeName(itemName) {
        AppDispatcher.dispatch({
            type: Constant.CHANGE_NAME,
            payload: { itemName }
        })
    }
}

export default ItemActions;







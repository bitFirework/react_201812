import Constant from '../Constant';

// Action을 만든다는 의미로 'ActionCreator'라고 많이 쓴다.
const TodoActionCreator = {
    addTodo(todo) {
        return { type: Constant.ADD_TODO, payload: { todo: todo } };
    },
    deleteTodo(no) {
        return { type: Constant.DELETE_TODO, payload: { no: no } }
    },
    toggleDone(no) {
        return { type: Constant.TOGGLE_DONE, payload: { no: no } };
    }
}

export default TodoActionCreator;
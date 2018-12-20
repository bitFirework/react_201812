import Constant from '../Constant';
import produce from 'immer';

const initialStata = {
    todolist : [
        { no:1, todo:"React 학습", done:false },
        { no:2, todo:"Redux 학습", done:false },
        { no:3, todo:"Bootstrap 살펴보기", done:true }
    ]
}

const TodoReducer = (todolist=initialStata.todolist, action) => {
    let index, newTodo, newTodolist;
    switch(action.type) {
        case Constant.ADD_TODO: 
            newTodo = {
                no: new Date().getTime(),
                todo: action.payload.todo,
                done: false
            }
            newTodolist = produce(todolist, (draft) => {
                draft.push(newTodo);
            });
            return newTodolist;
        case Constant.DELETE_TODO:
            index = todolist.findIndex((todo) => todo.no === action.payload.no);
            newTodolist = produce(todolist, (draft) => {
                draft.splice(index, 1);
            })
            return newTodolist;
        case Constant.TOGGLE_DONE:
            index = todolist.findIndex((todo) => todo.no === action.payload.no);
            newTodolist = produce(todolist, (draft) => {
                draft[index].done = !draft[index].done;
            })
            return newTodolist;
        default:
            // 초기에 initialState가 주어지게 될것이다.
            // 반드시 필요하다.
            // multi reducer를 위해서도.
            return todolist;
    }

}

export default TodoReducer;
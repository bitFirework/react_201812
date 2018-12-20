import { combineReducers } from "redux";
import TimeReducer from './TimeReducer';
import TodoReducer from './TodoReducer';

// RootReduce는 하위 Reducer들을 컴바인한다.
// 컴바인할때, 상태 트리의 속성명을 결정한다.
const RootReducer = combineReducers({
    currentTime: TimeReducer,
    todolist: TodoReducer
    
});

export default RootReducer;
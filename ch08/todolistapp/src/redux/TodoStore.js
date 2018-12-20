import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

const logger = (store) => {
    return (next) => {
        return (action) => {
            // console.log("------------------------------");
            if (typeof(action) !== "function") {
                console.log("### action : ", action);
            }
            // console.log("action 전", store.getState());
            next(action); // return 안해도 된다. 그 이후에 뭔가 작업을 하기 위해
            // console.log("action 후", store.getState());
            // 마지막 함수는 return을 안해도 된다.
        }
    }
};
// 또는 이렇게 작성해도 된다.
// const logger = (store) => (next) => (action) => {
//     console.log("### action 실행 : ", new Date().toLocaleTimeString(), JSON.stringify(action));
//     return next(action); // 이 함수의 실행자체를 끝내기 위해 return을 명시적으로 썼다.
// };

const TodoStore = createStore(RootReducer, applyMiddleware(logger, thunk));
export default TodoStore;
import App from './App';
import TodoActionCreator from '../redux/TodoActionCreator';
import TimeActionCreator from '../redux/TimeActionCreator';
import { connect } from 'react-redux';


// App.propTypes = {
//     todolist : PropTypes.arrayOf(PropTypes.object),
//     addTodo : PropTypes.func.isRequired,
//     deleteTodo : PropTypes.func.isRequired,
//     toggleDone : PropTypes.func.isRequired
// }

const mapState = (state) => {
    return {
        todolist: state.todolist,
        currentTime: state.currentTime
    }
}

const mapDispatch = (dispatch) => {
    return {
        // ActionCreator가 만든 메시지를 Store로 전달해준다.
        // dispatch로 함수를 전달하면(redux-thunk를 이용) middleware에서 비동기를 실행해준다.
        addTodo: (todo) => dispatch(TodoActionCreator.addTodo(todo)),
        deleteTodo: (no) => dispatch(TodoActionCreator.deleteTodo(no)),
        toggleDone: (no) => dispatch(TodoActionCreator.toggleDone(no)),
        changeTime: () => dispatch(TimeActionCreator.asyncChangeTime())
        
    }
}

// mapState 또는 mapDispatch가 없는 경우는 null로 설정해주면 된다.
const AppContainer = connect(mapState, mapDispatch)(App);
export default AppContainer;
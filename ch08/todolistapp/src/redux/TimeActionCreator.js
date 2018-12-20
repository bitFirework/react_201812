import Constant from '../Constant';

const TimeActionCreator = {
    changeTime () {
        return { type: Constant.CHANGE_TIME }
    },
    asyncChangeTime() {
        // redux-chunk가 사용하게 될 함수가 요런 형태이다. 형태를 준수해야 함.
        return (dispatch, getState) => {
            let { currentTime } = getState();
            dispatch({ type:"change time started", prevTime: currentTime});
            setTimeout(() => {
                dispatch(this.changeTime());
            }, 2000);
        }
    }
}

export default TimeActionCreator;
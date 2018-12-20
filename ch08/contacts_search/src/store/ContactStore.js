import { createStore, applyMiddleware } from 'redux';
import ContactReducer from '../reducers/ContactReducer';
import ContactActionCreator from '../actions/ContactActionCreator';
import reduxThunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';

const logger = (store) => {
    return (next) => {
        return (action) => {
            if(typeof(action) !== 'undefined' &&
            typeof(action) !== 'function') {
                console.log("### action 실행 : ", action);
            }
            next(action);
        }
    }
}

const composeEnhancers = composeWithDevTools(ContactActionCreator);

const ContactStore = createStore(ContactReducer, composeEnhancers(applyMiddleware(invariant(), logger, reduxThunk)));
export default ContactStore;
import { EMPLOYEE_LIST, EMPLOYEE_LOADER } from '../config/ActionTypeConfig';

const INITIAL_STATE = {
    emp_list:[],
    emp_loader:false
};


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case EMPLOYEE_LIST:
            return {...state, emp_list: action.payload};
        case EMPLOYEE_LOADER:
            return {...state, emp_loader: action.payload};
        default:
            return state;
    }
}
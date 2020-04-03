import { combineReducers } from 'redux';
import EmployeeReducer from './EmployeeReducer'
import LoginReducer from './LoginReducer';

export default combineReducers({
    employee_reducer: EmployeeReducer,
    login_reducer: LoginReducer
});


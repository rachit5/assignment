import { Alert } from 'react-native';
import { EMPLOYEE_LIST, EMPLOYEE_LOADER } from '../config/ActionTypeConfig';
import { setEmployeeList } from '../business/EmployeeBusiness';
import Snackbar from "react-native-snackbar";

export const getEmployeeAction = () => {

    return async (dispatch) => {
        try {
            dispatch({
                type: EMPLOYEE_LOADER,
                payload: true
            });

            let employees = await setEmployeeList();
            if (employees.length > 0) {
                dispatch({
                    type: EMPLOYEE_LIST,
                    payload: employees
                });
            }
            else {
                Snackbar.show({
                    text: "Failed to fetch employee list",
                    duration: Snackbar.LENGTH_LONG,
                    textColor: "white",
                });
                dispatch({
                    type: EMPLOYEE_LIST,
                    payload: []
                });
            }
            dispatch({
                type: EMPLOYEE_LOADER,
                payload: false
            });

        }
        catch (e) {
            dispatch({
                type: EMPLOYEE_LOADER,
                payload: false
            });
            dispatch({
                type: EMPLOYEE_LIST,
                payload: []
            });
            Alert.alert(
                "",
                e,
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            );
        }
    }
}

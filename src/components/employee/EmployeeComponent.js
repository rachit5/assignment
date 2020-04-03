import React from 'react';
import {
    View,
    ImageBackground,
    ActivityIndicator,
    FlatList
} from 'react-native';
import { getEmployeeAction } from "../../actions"
import { connect } from "react-redux";
import EmployeeCellComponent from './subViews/EmployeeCellComponent';

export class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    async componentDidMount() {
        await this.props.getEmployeeAction();
    }

    render() {
        return (
            <ImageBackground resizeMode="stretch"
                source={require("../../imgs/background.jpg")} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.func_renderFlatList()}
                </View>
                    {this.func_renderLoader()}
            </ImageBackground>
        );
    }

    func_renderFlatList() {
        if (this.props.emp_list.length > 0) {
            return (
                <FlatList
                    data={this.props.emp_list}
                    renderItem={({ item, index }) =>
                        <EmployeeCellComponent
                            key={item}
                            items={item}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    getItemLayout={this.func_getItemLayout}
                />
            )
        }
        else {
            return null;
        }
    }

    func_getItemLayout=(data, index) => {
        return { length: 100, offset: 100 * index, index }
    }

    func_renderLoader() {
        if (this.props.emp_loader) {
            <View style={{ flex: 1, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="small" color="#fff" />
            </View>
        }
        else {
            return null;
        }
    }

}

const mapStateToProps = ({ employee_reducer }) => {
    const { emp_list, emp_loader } = employee_reducer;
    return { emp_list, emp_loader };
};

export default connect(mapStateToProps, {
    getEmployeeAction,
})(Dashboard);
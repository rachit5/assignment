import React, { PureComponent } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image
} from 'react-native';
import { FONT_FAMILY } from '../../../config/StyleConfig';

export default class EmployeeCellComponent extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, age, gender, email, phoneNo } = this.props.items;
		return (
			<View style={styles.cellViewStyle}>
				<View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.2, padding: 5, backgroundColor: 'transparent' }}>
					<Image source={require('../../../imgs/office.png')} style={{ height: 50, width: 50 }} />
				</View>
				<View style={{ flex: 0.8 }}>
					<View style={styles.wrapperViewStyle}>
						<Text style={styles.textStyle}>{name}</Text>
					</View>
					<View style={styles.wrapperViewStyle}>
						<Text style={styles.textStyle}>{gender},</Text>
						<Text style={styles.textStyle}>{age}</Text>
					</View>
					<View style={styles.wrapperViewStyle}>
						<Text ellipsizeMode="tail" style={styles.textStyle}>{email},</Text>
						<Text ellipsizeMode="tail" style={styles.textStyle}>{phoneNo}</Text>
					</View>
				</View>

			</View>
		)
	}

}


const styles = StyleSheet.create({
	cellViewStyle: {
		height: 100,
		padding: 5,
		backgroundColor: '#FFFBF3',
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 5,
		flexDirection: 'row',
		marginVertical: 3
	},
	wrapperViewStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: 'transparent',
		flex: 0.33
	},
	textStyle: {
		color: '#000',
		fontFamily: FONT_FAMILY,
		fontSize: 15
	},
})
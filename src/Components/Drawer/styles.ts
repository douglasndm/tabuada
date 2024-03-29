import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Drawer } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background};
	flex: 1;
`;

export const MainMenuContainer = styled.View`
	flex: 1;
`;

export const LogoContainer = styled.SafeAreaView`
	background-color: ${props => props.theme.colors.accent};
	align-items: center;
	justify-content: center;
	padding: 5px 0;
	flex-direction: row;
	padding-top: 75px;

	${isIphoneX() &&
	css`
		padding-top: 80px;
	`};

	${Dimensions.get('window').height <= 600 &&
	css`
		padding: 10px 0;
		margin-top: 0;
	`}
`;

export const MenuItemContainer = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${Dimensions.get('window').height > 600 ? '15px' : '10px'};
`;

export const MenuContent = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const MenuItemText = styled.Text`
	margin-left: 20px;
	color: ${props => props.theme.colors.text};

	font-size: 14px;

	${Dimensions.get('screen').width > 700 &&
	css`
		font-size: 20px;
	`}
`;

export const Icons = styled(Ionicons).attrs(() => ({
	size: 22,
}))`
	color: ${({ theme }) => theme.colors.text};
`;

export const DrawerSection = styled(Drawer.Section).attrs(() => ({
	showDivider: false,
}))``;

export const LabelGroup = styled.View`
	flex-direction: row;
`;

export const LabelContainer = styled.View`
	padding: 5px 10px;
	background-color: #eaeaea;
	margin-right: 5px;
`;

export const Label = styled.Text``;

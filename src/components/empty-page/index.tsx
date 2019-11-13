import './index.scss';

import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

export interface IProps {
	message?: string;
}
const EmptyPage:Taro.FC<IProps> = (props) => {
	return (
		<View className='tui-empty-page'>
			<Text className='tui-empty-page__message'>{props.message}</Text>
		</View>
	);
}
export default EmptyPage ;
EmptyPage.defaultProps = {
	message: "哎呀，空空如也~"
}

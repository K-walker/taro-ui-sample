import './index.scss';

import _isFunction from 'lodash/isFunction';

import { Icon, Input, View } from '@tarojs/components';
import Taro, { useState } from '@tarojs/taro';

export interface IProps {
	onInput?:(value: any) => void;
	placeholder?: string;
	delay?: number;
}
let timeId = 0 ;
const SearchBar:Taro.FC<IProps> = (props) => {
	const { delay, placeholder, onInput } = props ;
	const [value , setValue] = useState('');

	const handleOnInput = (e) => {
		clearTimeout(timeId);
		timeId = setTimeout(() => {
			const value = e.target.value.trim();
			setValue(value);
			_isFunction(onInput) && onInput(value);
		}, delay);
	}

	return (
		<View className="tui-search-bar">
			<View className="tui-search-bar__inner">
				<Icon className="tui-search-bar__icon" size="14" type="search" />
				<Input
					adjustPosition={false}
					placeholder={placeholder}
					className="tui-search-bar__input"
					value={value}
					onInput={handleOnInput}
				/>
			</View>
		</View>
	);
}

export default SearchBar ;
SearchBar.defaultProps = {
	onInput: () => {},
	placeholder: "搜索",
	delay: 200
} as IProps ;

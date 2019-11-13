import { Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

import style from './index.module.scss';

export interface PriceProps {
	price?: number,
	className?: string,
	unit?: string,
	size?: number,
	negative?: boolean,
	unitSize?: number,
}

/**
 *  @className string  自定义类名
 *  @size number       价格字体大小
 *  @unit string   单位
 *  @unitSize number   价格单位的字体大小
 *  @negative boolean  是否是负数
 */
const Price:Taro.FC<PriceProps> = (props) => {
	const {	price , className , size , unit , unitSize , negative } = props ;
	const priceStyle = {
		fontSize: Taro.pxTransform(size as number)
	}
	const unitStyle = {
		fontSize: Taro.pxTransform(unitSize as number)
	}
	return (
		<Text className={`${style.price} ${className}`} style={priceStyle}>
			{negative && '-'}
			<Text style={unitStyle}>{unit}</Text>
			{price}
		</Text>
	);
}
export default Price ;
Price.options = { addGlobalClass: true };

Price.defaultProps = {
	price: 0,
	className: '',
	size: 40,
	unit: '￥',
	unitSize: 20,
	negative: false
} as PriceProps ;

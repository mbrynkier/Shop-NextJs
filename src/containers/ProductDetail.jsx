import React from 'react';
import ProductInfo from '@components/ProductInfo';
import close from '@icons/icon_close.png'
import Image from 'next/image';
//import '@styles/ProductDetail.scss';
import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
	return (
		<aside className={styles.ProductDetail}>
			<div className={styles.ProductDetail-close}>
				<Image src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;

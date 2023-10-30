import { forwardRef, useState } from 'react';
import image from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

// fallBack: customFallBack nhiệm vụ của dấu hai chấm ở đây chỉ là để đổi tên sao cho không trùng với fallBack ở trong hàm
function Image({ src, alt, className, fallBack: customFallBack = image.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);

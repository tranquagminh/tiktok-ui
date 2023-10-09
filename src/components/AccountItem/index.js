import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d.jpeg?x-expires=1697007600&x-signature=AS%2FITksLSo902F1JONc3RiDaO%2BM%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoaa.hanassii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;

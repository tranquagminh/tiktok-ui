import style from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SideBar pages</h2>
        </aside>
    );
}

export default SideBar;

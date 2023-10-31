import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/:nickname', // Nếu muốn bắt đầu bắt kí tự chung và những kí tự sau sẽ được biến động thì dùng ":"
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
const privateRoutes = [];
// public ROute là những thành phần ko cần đăng nhập vẫn xem được và private ngược lại
export { publicRoutes, privateRoutes };

import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile, // Nếu muốn bắt đầu bắt kí tự chung và những kí tự sau sẽ được biến động thì dùng ":"
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];
const privateRoutes = [];
// public ROute là những thành phần ko cần đăng nhập vẫn xem được và private ngược lại
export { publicRoutes, privateRoutes };

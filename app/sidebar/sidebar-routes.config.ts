import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'material-login' },
    { path: 'user', title: 'تنظیمات', menuType: MenuType.LEFT, icon:'material-login' },
    { path: 'table', title: 'تورنت ها', menuType: MenuType.LEFT, icon:'material-login' },
    { path: 'typography', title: 'خروج', menuType: MenuType.LEFT, icon:'material-login' }
    // { path: 'login', title: 'Icons', menuType: MenuType.LEFT, icon:'material-login' },
    // { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'material-login' },
    // { path: 'notifications', title: 'Notifications', menuType: MenuType.LEFT, icon:'material-login text-gray' }
];

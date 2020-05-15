import { faHome, faBookmark, faTable } from '@fortawesome/free-solid-svg-icons';

const INITIAL_STATE = {
    activeMenu: {
        name: 'Dashboard',
        icon: faHome,
        path: '/'
    },
    itens: [
        {
            name: 'Dashboard',
            icon: faHome,
            path: '/'
        },
        {
            name: 'Page 1',
            icon: faTable,
            path: '/page1'
        },
        {
            name: 'Page 2',
            icon: faBookmark,
            path: '/page2'
        },
    ],
};

export default function sidebarMenu(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MENU_ACTIVE':
            return { ...state, activeMenu: action.menu }
            break;
        default:
            return state
            break;
    }
}

import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Styled
import { Side } from './styles';

// Logout function
import { logout } from '~/services/auth';

// Logo
import Logo from '~/assets/img/kadoo.png';

// Icons
import { FiLogOut } from 'react-icons/fi';

// Connection Redux
import { connect } from 'react-redux';

function Sidebar({ drag, activeMenu, itensMenu, dispatch }) {

    function toggleMenu(menu) {
        return {
            type: 'SET_MENU_ACTIVE',
            menu
        };
    }

    return (
        <Side drag={drag}>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <ul>
                {itensMenu.map(item => (
                    <li key={ item.name } className={item.name === activeMenu.name ? 'active' : ''}>
                        <Link to={ item.path } onClick={() => dispatch(toggleMenu(item)) }>
                            <span className="icon">
                                { item.icon }
                            </span>
                            <span className="item">
                                { item.name }
                            </span>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link onClick={() => logout()} to={`/sis/login`}>
                        <span className="icon">
                            <FiLogOut />
                        </span>
                        <span className="item">
                            Sair
                        </span>
                    </Link>
                </li>
            </ul>
        </Side>
    );
}

export default memo(
    connect(state  => ({
        activeMenu: state.menu.activeMenu,
        itensMenu: state.menu.itens
    }))(Sidebar)
);

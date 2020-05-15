import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Side } from './styles';
import Logo from '~/assets/img/kadoo.png';
import { logout } from '~/services/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


import { connect } from 'react-redux';
// import { useEffect } from 'react';

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
                    <li className={item.name === activeMenu.name ? 'active' : ''}>
                        <Link to={ item.path } onClick={() => dispatch(toggleMenu(item)) }>
                            <FontAwesomeIcon icon={ item.icon } style={{ marginRight: 3}}/> { item.name }
                        </Link>
                    </li>
                ))}
                <li>
                    <Link onClick={() => logout()} to={`/login`}>
                        <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: 3}}/> Sair
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

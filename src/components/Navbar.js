import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: sticky;
    width: 100%;
    background-color: #010203;
    user-select: none;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    transition: 0.3s;
    text-decoration: none;
    user-select: none;

    &:hover {
        color: #a9a9a9;
        transform: scale(1.02);
        opacity: 0.8;
    }
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-size: 25px;
`;

const MenuBars = styled(FaBars)`
    display: none;
    transition: 0.3s;
    user-select: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-40%, 50%);
        color: #000000;
    }

    &:hover {
        color: #a9a9a9;
        opacity: 0.8;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    user-select: none;

    @media screen and (max-width: 786px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to='/'>Michael Finazzo</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    );
}

export default Navbar
import React from 'react'
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { Link } from 'react-router-dom'

const DropDownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 75%;
    background: #000000;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const ClosedIcon = styled(FaTimes)`
    color: #fff;

    &:hover {
        color: #696969
    }
`

const DropDownWrapper = styled.div``

const DropDownMenu = styled.div`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and { max-width: 480 } {
        gird-template-rows: repeat(4, 60px);
    }
`

const DropDownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out; 

    &:hover {
        color: #696969
    }
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const DropDown = ({ isOpen, toggle }) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => (
                        <DropDownLink to={item.link} key={index}>
                            {item.title}
                        </DropDownLink>
                    ))}
                </DropDownMenu>
            </DropDownWrapper>
        </DropDownContainer>
    )
}
export default DropDown

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { g1, g2, g3, g4 } from './Layout';



const Nav = styled.nav`
    height: 15vh;
    display: flex;
    color: black;
    align-items: center;
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    align-content: center; 
`

const NavBrand = styled.div`
    text-decoration: none;
    font-size: 3rem;
    font-weight: bold;
    color: $color-gray-3;
    margin-right: 3rem;
    &:hover{
        color: ${g1};
        cursor: pointer;
    }
`

const NavItems = styled.div`
     text-decoration: none;
      color: ${g2};
      font-size: 1.6rem;
      font-weight: 500;
      font-weight: bold;
`

const StyledLink = styled.a`
      padding: 0rem 2rem;
      &:hover{
        color: ${g3};
        cursor: pointer;
    }
`

function Navbar() {
    return (
        <Nav>
            <NavBrand>
                <Link href='/'>
                    <StyledLink>
                        Shortly
                    </StyledLink>
                </Link>
            </NavBrand>
            <NavItems>
                <Link href='/'>
                    <StyledLink>Features</StyledLink>
                </Link>
                <Link href='/'>
                    <StyledLink>Pricing</StyledLink>
                </Link>
                <Link href='/'>
                    <StyledLink>Resorces</StyledLink>
                </Link>
            </NavItems>
        </Nav>
    )
}

export default Navbar
import React from 'react'
import styled from 'styled-components'
import { g1, g2, g3, g4, v1 } from './Layout';

const StartCont = styled.div`
  padding: 5rem 0;
  background: ${g2} url("https://i.postimg.cc/MKws4k3c/Meteor.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    color: white;
  @include respond(tabPort) {
    background: url("../../images/bg-boost-mobile.svg");
    background-repeat: no-repeat;
    background-size: cover;
    }

`
const StartHeading = styled.h2`
    font-size: 3rem;
    color: red;

    @include respond(tabPort) {
      font-size: 4rem;
    }
`

const StartBtn = styled.a`
    padding: 1rem 3rem;
    border-radius: 2rem;
    background:${v1};
    outline: none;
    font-weight: bolder;
    &:hover{
        cursor: pointer;
        color: black;
    }
`

function StartPage() {
    return (
        <>
            <StartCont >
                <StartHeading >Boost your links today</StartHeading>
                <StartBtn>
                    Get Started
                </StartBtn>
            </StartCont>
        </>
    )
}

export default StartPage
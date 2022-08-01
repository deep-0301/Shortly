import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import { g3 } from './Layout';
import Image from 'next/image'
import people_working from '../images/people_working.svg'


const HomeCont = styled.div`
    margin: 0 auto;
    max-width: 80%;
    width: 100%;
    height: 50vh;
    width: 100%;
    padding: 0rem;
`

const HomeHeading = styled.h2`
    text-align: center;
    font-size: 7rem;
    line-height: 1.2;
    font-weight: bold;
    color: ${g3};
`
const HomeImg = styled.div`
    position: relative;
    max-width: 100%;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    background-size: cover;
    `


function HomePage() {
    return (
        <>
            <HomeCont>
                <HomeHeading>MORE THAN JUST SHORTER LINKS</HomeHeading>
            </HomeCont>

            <HomeImg>
                <Image
                    src={people_working}
                    alt="Photo"
                />
            </HomeImg>

        </>
    )
}

export default HomePage
import React from 'react'
import styled from 'styled-components';
import { g1, g2, g3, g4, v1, v2 } from './Layout';
import brand from '../images/brand.svg'
import Image from 'next/image'

const MainCont = styled.div`
    max-width: 80%;
    margin: 0 auto;
    text-align: start;
    width: 100%;
`

const StatCont = styled.div`
    margin-top: 5rem;
    
`

const StartHead = styled.div`
        text-align: center;
    width: auto;
    max-width: 80%;
    margin: 0 auto;
`

const StartHeading = styled.h2`
    font-size: 3rem;
    font-weight: 700;
`
const StartPara = styled.p`
    display: inline-block;
    font-size: 1.6rem;
    color: #9d9aa7;
    max-width: 70%;
`

const BrandCont = styled.div`
    margin-top: 6rem;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 6rem;
`;

const BrandLine = styled.div`
    height: 10px;
    background: ${v1};
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 0;
    transform: translateY(-50%);
`
const BrandItems = styled.div`
    padding: 3.5rem;
    background: #fff;
    border-radius: 10px;
    position: relative;
    width: 32%;
`

const BrandLogo = styled.div`
      display: inline-block;
      background: ${v2};
      padding: 2.5rem;
      border-radius: 50%;
      position: absolute;
      top: -35px;
`

const BrandContent = styled.div`
    margin-top: 4rem;
`

const BrandHeading = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
`

const BrandPara = styled.p`
    font-size: 1.3rem;
    margin-top: 1rem;
    color: ${g1};
`



const data = [
    {
        img: require(`../images/brand.svg`),
        title: "Brand Recognition",
        desc: `Boost your brand regonition with each click. Generic links don't
        mean a thing. Brand links help instil confidence in your
        content.`,
    },
    {
        img: require(`../images/brand.svg`),
        title: "Brand Recognition",
        desc: `Boost your brand regonition with each click. Generic links don't
        mean a thing. Brand links help instil confidence in your
        content.`,
    },
    {
        img: require(`../images/brand.svg`),
        title: "Brand Recognition",
        desc: `Boost your brand regonition with each click. Generic links don't
        mean a thing. Brand links help instil confidence in your
        content.`,
    }
]

function Statics() {
    return (
        <>
            <MainCont>
                <StatCont>
                    <StartHead>
                        <StartHeading>Advanced Statistics</StartHeading>
                        <StartPara>
                            Track how your links are performing across the web with our advanced
                            statistics dashboard.
                        </StartPara>
                    </StartHead>

                </StatCont>
                <BrandCont>
                    <BrandLine />
                    {data.map(e => {
                        return (
                            <BrandItems key={e.title + " " + e.desc}>
                                <BrandLogo>
                                    <Image src={e.img} alt="" />
                                </BrandLogo>
                                <BrandContent >
                                    <BrandHeading>{e.title}</BrandHeading>
                                    <BrandPara>{e.desc}</BrandPara>
                                </BrandContent>
                            </BrandItems>
                        );
                    })}
                </BrandCont>
            </MainCont>
        </>
    )
}

export default Statics
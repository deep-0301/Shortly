import React from 'react'
import styled from 'styled-components'
import { g1, g2, g3, g4, v1, v2 } from './Layout'
import Image from 'next/image'
import Facebook from '../images/icon-facebook.svg';
import Instagram from '../images/icon-instagram.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Twitter from '../images/icon-twitter.svg';

const Foot = styled.div`
    background-color: ${g4};
    color: ${g1};;
`

const FootCont = styled.div`
    max-width: 80%;
    margin: 0 auto;
    text-align: start;
    width: 100%;
`
const FootGrid = styled.div`
    padding: 5rem 0;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    
`

const FootTitle = styled.div`
    font-size: 3rem;
  
`
const SocialIcons = styled.div`
    margin-top: 2rem;
    width: 80%;
    display: flex;
    justify-content: space-between;
    
`

const FooterNav = styled.nav`
    margin: 0;
    padding: 0;
    box-sizing: inherit;
`
const FooterHeading = styled.div`
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
    
`

const FooterList = styled.ul`
    list-style-type: none;
`
const FooterItems = styled.li`
    margin-bottom: 1rem;
`

const FooterLinks = styled.a`
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
    color: ${v1};
    cursor: pointer;    
    }

`


function Footer() {
    return (
        <>
            <Foot>
                <FootCont>
                    <FootGrid>
                        <FooterNav>
                            <FootTitle>
                                Shortly
                            </FootTitle>
                            <SocialIcons>

                                <FooterLinks>
                                    <Image
                                        src={Facebook}
                                        alt="Shortly Facebook"
                                    />
                                </FooterLinks>


                                <FooterLinks>
                                    <Image
                                        src={Twitter}
                                        alt="Shortly Twitter"
                                    />
                                </FooterLinks>

                                <FooterLinks>
                                    <Image
                                        src={Pinterest}
                                        alt="Shortly Pinterest"
                                    />
                                </FooterLinks>

                                <FooterLinks>
                                    <Image
                                        src={Instagram}
                                        alt="Shortly Instagram"
                                    />
                                </FooterLinks>

                            </SocialIcons>

                        </FooterNav>
                        <FooterNav>
                            <FooterHeading>Features</FooterHeading>
                            <FooterList>
                                <FooterItems>
                                    <FooterLinks>
                                        Link Shortening
                                    </FooterLinks>
                                </FooterItems>
                                <FooterItems>
                                    <FooterLinks>
                                        Branded Links
                                    </FooterLinks>
                                </FooterItems>
                                <FooterItems>
                                    <FooterLinks>
                                        Analytics
                                    </FooterLinks>
                                </FooterItems>
                            </FooterList>
                        </FooterNav>
                        <FooterNav>
                            <FooterHeading>Resources</FooterHeading>
                            <FooterList>
                                <FooterItems>
                                    <FooterLinks>
                                        Blog
                                    </FooterLinks>
                                </FooterItems>
                                <FooterItems>
                                    <FooterLinks>
                                        Developers
                                    </FooterLinks>
                                </FooterItems>
                                <FooterItems>
                                    <FooterLinks>
                                        Support
                                    </FooterLinks>
                                </FooterItems>
                            </FooterList>
                        </FooterNav>
                        <FooterNav>
                            <FooterHeading>Company</FooterHeading>
                            <FooterList>
                                <FooterItems>
                                    <FooterLinks>
                                        About
                                    </FooterLinks>
                                </FooterItems>
                                <FooterItems>
                                    <FooterLinks>
                                        Our Team
                                    </FooterLinks>
                                </FooterItems>
                                <FooterItems>
                                    <FooterLinks>
                                        Careers
                                    </FooterLinks>
                                </FooterItems>
                                <FooterItems>
                                    <FooterLinks>
                                        Contact
                                    </FooterLinks>
                                </FooterItems>
                            </FooterList>
                        </FooterNav>
                    </FootGrid>
                </FootCont>
            </Foot>
        </>

    )
}

export default Footer   
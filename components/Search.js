import React, { useState } from 'react'
import styled from 'styled-components';
import { g1, g2, g3, g4, v1, v2 } from './Layout';
import axios from 'axios';




const SearchCont = styled.div`
    max-width: 80%;
    width: 100%;
    background: ${g2} url("https://i.postimg.cc/MKws4k3c/Meteor.png");
    padding: 6rem;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2px;
    position: relative;   

`
const SearchBar = styled.div`
    display: flex;
    position: relative;
`
const SeachInp = styled.input`
    padding: 0 3rem;
    flex: 1;
    height: 100%;
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    width: 100%;
    border-radius: 8px;
    margin-right: 2rem;
    outline: none;
    border: none;
    font-family: inherit;
    
    &::placeholder {
      color: #db7484;
    }

    height: 100%;
  align-self: stretch;
  border: 2px solid blue;
`
const SeachBtn = styled.button`
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    background: ${v1};
    outline: none;
    font-family: inherit;
    
    border: none;
    &:hover {
      cursor: pointer;
    }

    &:active {
      background: ${g1};
    }

 `

//style for hidden url copied section

const UrlCont = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    background: white;
    padding: 2rem 2rem;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 2rem;
    border-radius: 10px;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
`
const UrlLeft = styled.div`
    width: auto;
    overflow: hidden;
`
const UrlSubmitted = styled.p`
    font-size: 1rem;
`
const UrlRight = styled.div`
    width: auto;
    display: flex;
    align-items: center;
`
const UrlOut = styled.input`
    color: ${v1};
    border: none;
    background: white;
    overflow: hidden;
    font-family: inherit;
    width: auto;
    font-size: 1.3rem;
`

const BtnClicked = styled.div`
    background: ${v1};
  color: white;
  padding: 1rem 5rem;
  font-size: 1.5rem;
  border-radius: 10px;
  background: ${g2};
  &:active {
    background: lighten(${g2}, 20%);
  }
`
const BtnUrl = styled.div`
 background: ${v1};
  color: white;
  padding: 1rem 5rem;
  font-size: 1.5rem;
  border-radius: 10px;
  :hover{
    background: lighten(${v1}, 20%);
    cursor: pointer;
  }
`

function Search() {

    const [values, setValues] = useState({
        link1: "",
        link2: "",
        link3: ""
    })
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const [flag, setFlag] = useState(false)
    const [copied, setCopied] = useState(null);
    const [clicked, setClicked] = useState(false);

    const GetData = () => {
        if (input) {
            getShortUrl();
        }
        else {
            console.log('error from getData');
            setError(true);
        }
    };

    const getShortUrl = () => {
        axios.get(
            `https://api.shrtco.de/v2/shorten?url=${input}`
        )
            .then((res) => {
                console.log(res.data);
                setValues({
                    link1: res.data.result.full_short_link,
                    link2: res.data.result.full_short_link2,
                    link3: res.data.result.full_share_link
                })
                setFlag(true)
            }).catch((e) => console.log(e))

    }

    const handleClick = () => {
        GetData();
    }

    const copyClick = () => {
        const copy = document.execCommand("copy", true);
        setCopied(copy);
        setClicked(true);
    }


    if (flag) {
        return (
            <>
                <SearchCont>
                    <SearchBar>
                        <SeachInp
                            type="text"
                            value={input}
                            placeholder="Shorten a link here"
                            onChange={(e) => setInput(e.target.value)}

                        />
                        <SeachBtn onClick={handleClick}>
                            Shorten it!
                        </SeachBtn>
                    </SearchBar>
                </SearchCont>
                <UrlCont>
                    <UrlLeft>
                        <UrlSubmitted>{input}</UrlSubmitted>
                    </UrlLeft>
                    <UrlRight>
                        <UrlOut disabled value={values.link1} />
                        <BtnUrl
                            onClick={() => {
                            }}
                        >
                            Copy
                        </BtnUrl>
                    </UrlRight>


                </UrlCont>

                <UrlCont>
                    <UrlLeft>
                        <UrlSubmitted>{input}</UrlSubmitted>
                    </UrlLeft>
                    <UrlRight>
                        <UrlOut disabled value={values.link2} />

                        {copied ? (
                            <BtnClicked
                                onClick={() => {
                                    copyClick();
                                }}
                            >
                                Copied
                            </BtnClicked>
                        ) : (
                            <BtnUrl
                                onClick={() => {
                                    copyClick();
                                }}
                            >
                                Copy
                            </BtnUrl>
                        )}
                    </UrlRight>


                </UrlCont>

                <UrlCont>
                    <UrlLeft>
                        <UrlSubmitted>{input}</UrlSubmitted>
                    </UrlLeft>
                    <UrlRight>
                        <UrlOut disabled value={values.link3} />
                        <BtnUrl
                            onClick={() => {
                            }}
                        >
                            Copy
                        </BtnUrl>

                    </UrlRight>
                </UrlCont>
            </>
        )
    }

    else {

        return (
            <>
                <SearchCont>
                    <SearchBar>
                        <SeachInp
                            type="text"
                            value={input}
                            placeholder="Shorten a link here"
                            onChange={(e) => setInput(e.target.value)}

                        />
                        <SeachBtn onClick={handleClick}>
                            Shorten it!
                        </SeachBtn>
                    </SearchBar>
                </SearchCont>

            </>
        )
    }
}

export default Search
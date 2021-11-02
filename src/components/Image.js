import React from "react"
import styled from "@emotion/styled"
import { AiOutlineLike, AiFillEye } from "react-icons/ai";
import {keyframes} from '@emotion/react'

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`
const ImageDiv = styled.div`
animation: ${fadeIn} 1s both;
background: #fff;
box-shadow: 2px 2px 7px 0px rgb(0 0 0 / 20%);
margin: 25px;
height: 100%;
img{
  width: 200px;
  height: 150px;
}
`
const ImageContainerDiv = styled.div`
padding: 5px 10px;
p{
  margin-block: 7px;
  display: flex;
  align-items: center;
  svg{
    margin-right: 10px;
  }
}
`
const ImageButtonDiv = styled.div`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid gray;
background: #f3f1f1;
button{
  border: none;
  background: #A84E92;
  color: white;
  border-radius: 3px;
  padding: 8px 24px;
  cursor: pointer;
  &:hover{
    background: #833a71;
  }
}
`

const Image = ({data}) =>{
    const {largeImageURL, likes, previewURL, views} = data 
    return(
        <ImageDiv>
            <img src={previewURL} alt="hola"/>
              <ImageContainerDiv>
                <p><AiOutlineLike/> {likes}</p>
                <p><AiFillEye/> {views}</p>
              </ImageContainerDiv>
              <ImageButtonDiv >
                <a href={largeImageURL} alt="View Image" target="_blank">
                  <button>View Image</button>
                </a>
              </ImageButtonDiv >
        </ImageDiv>
    )
}
export default Image
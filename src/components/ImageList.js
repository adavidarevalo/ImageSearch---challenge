import React from "react"
import Image from "./Image"
import styled from "@emotion/styled"

const ImageListDiv= styled.div`
width: 100%;
max-width: 1500px;
display: flex;
flex-wrap: wrap;
justify-content:center;
margin: 0 auto;
`

const ImageList = ({ImageTotal}) =>{
    return(
        <ImageListDiv>
            {ImageTotal.map(data=>(
                <Image data={data} key={data.id}/>
            ))}
        </ImageListDiv>
    )
}
export default ImageList
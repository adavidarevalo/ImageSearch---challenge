import React, {useState, Fragment} from "react"
import { AiOutlineSearch } from "react-icons/ai";
import styled from "@emotion/styled"
import logo from "../images/logo.png"
import {keyframes} from '@emotion/react'

const fadeIn = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

const FormDiv = styled.div`
animation: ${fadeIn} 1s both;
&.ChangeStyles{
  height: 25vh;
  img{
    width: 100px;
    margin-bottom: 10px;
  }
  form{
    div{
      box-shadow: 1px 1px 11px 1px rgb(115 111 111 / 20%);
    }
  }
}
width: 90%;
height: 90vh;
max-width: 1300px;
margin:0 auto;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 5px;
img{
  width:90%;
  max-width: 450px;
}
form{
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  button{
    border: 1px solid #3a2752;
    font-size: 1rem;
    background: #7a54aa;
    border-radius: 60px;
    color: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
      background: #4d336e;
    }
  }
  div{
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 25px;
    justify-content: space-between;
    padding-inline: 10px;
    input {
      height: 28px;
      border: none;
      padding: 5px;
      width: 79%;
      outline: none;
      background: none;
    }
  }
}
@media (min-width: 600px) {
  &.ChangeStyles{
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
`
const FormErrorP = styled.p`
color: red;
margin:0 auto;
text-align: center;
`

const Form = ({addImageApp}) =>{
    const [Image, addImage] = useState("")
    const [Change, addChange] = useState(false)
    const [Error, addError] = useState(false)
    const handleClick = e =>{
        if(Image === ""){
            addError(true)
            setTimeout(() => {
              addError(false)
            }, 3000);
            return
        } else {
          addChange(true)
          addImageApp(Image)
          addError(false)
        }
    }
    return(
      <Fragment>
        <FormDiv className={Change && 'ChangeStyles'}>
            <img src={logo} alt='Icon'/>
            <form>
              <div>
                <input 
                type="text"
                placeholder="Search Images"
                onChange={e=> addImage(e.target.value)}
                ></input>
                <button
                type="button"
                onClick={handleClick}
                ><AiOutlineSearch/></button>
              </div>
            </form>
            {Error?<FormErrorP>The input is empty.</FormErrorP>: null}
        </FormDiv>
      </Fragment>
    )
}

export default Form
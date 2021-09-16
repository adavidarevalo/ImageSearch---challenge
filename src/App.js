import React, {useState, useEffect} from "react"
import Form from "./components/Form"
import ImageList from "./components/ImageList"
import Seo from "./components/Seo"
import styled from "@emotion/styled"

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  button{
    border: 1px solid #3a2752;
    background: #7a54aa;
    color: white;
    border-radius: 3px;
    padding: 8px 24px;
    margin-inline: 10px;
    font-size: 1rem;
    &:hover{
      background: #4d336e;
    }
  }
`


function App() {
  const [ImageApp, addImageApp] = useState("")
  const [ImageTotal, addImageTotal] = useState([])
  const [actualPage, addActualPage] = useState(1)
  const [allPage, addPage] = useState(1)
  useEffect(()=>{
    const getApi = async() =>{
      if(ImageApp === "") return;
      const numbreImage = 30
      const url = `https://pixabay.com/api/?key=22404873-f5e0f2eb9397a09ba52fe6420&q=${ImageApp}&per_page=${numbreImage}&page=${actualPage}`
      const api = await fetch(url)
      const data = await api.json()
      const Page = data.totalHits
      addPage(Math.ceil(Page/numbreImage)) 
      addImageTotal(data.hits)
      const uploadScreen = document.querySelector(".upload")
      uploadScreen.scrollIntoView({behavior: "smooth"})
    }
    getApi()
  },[ImageApp, actualPage])
  const handleBackClick = () =>{
    if(actualPage === 0) return;
    addActualPage(actualPage-1)
  }
  const handleNewClick = () =>{
    if(actualPage>allPage) return;
    addActualPage(actualPage+1)
  }
  return (
    <div class="upload">
      <Seo/>
      <Form addImageApp={addImageApp}/>
      <ImageList ImageTotal={ImageTotal}/>
      <Div>
        {(actualPage === 1) ?null : (
          <button
            type="button"
            onClick={handleBackClick}
            >&laquo; Back</button>
        )}
        {(actualPage === allPage)? null :(
          <button
          type="button"
          onClick={handleNewClick}
          >Next &raquo;</button>
        )}
      </Div>
    </div>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css"
import Author from "./components/Author";
import Home from "./components/Home";

function App() {

  const defaultData = {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison"
  }

  const [data, setData] = useState()
  const [author, setAuthor] = useState([])
  const [name, setName] = useState('')
  const [loading, setLoaatding] = useState(false)
  const [quotes, setQuote] = useState(defaultData)

  useEffect(()=>{
    setLoaatding(true)
    getData()
  },[])

  const getData = async()=>{
    const result = await axios.get("https://type.fit/api/quotes")
    setData(result.data)
    setLoaatding(false)
  }
  const handleRandom = ()=>{
    setQuote(data[Math.floor(Math.random() * data.length)])
  }
  const handleAuthor =(authors)=>{
    setName(authors)
    const dataAuthor = data.filter((per)=>{
      return per.author === authors
    })
    setAuthor(dataAuthor)
  }
  return (
    <>
    {loading?<div>Loading...</div>
    :
    <div>
      <Routes>
        <Route path="/" element={ <Home handleRandom={handleRandom} handleAuthor={handleAuthor} quotes={quotes} />} />
        <Route path="/author" element={<Author author={author} name={name} />}/>
    </Routes>
    </div>
    }
    </>
  );
}

export default App;

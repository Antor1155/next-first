"use client"
import  {useEffect, useState} from "react"

import PromptCardList from "./PromptCardList"

const Feed = () => {
  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) =>{

  }

  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = await fetch("/api/prompt")
      const data = await response.json()
      setPosts(data)
      console.log(data)
    }

    fetchPosts()
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search with #tag or User name"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        >
        </input>
      </form>

      <PromptCardList
        data={posts}
      ></PromptCardList>
    </section>


  )
}

export default Feed
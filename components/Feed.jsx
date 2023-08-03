"use client"
import  {useEffect, useState} from "react"

import PromptCardList from "./PromptCardList"

const Feed = () =>{

  const [allposts, setAllPosts] = useState([])

  // search states 
  const [searchText, setSearchText] = useState("")
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [serachResults, setSearchResults] = useState([])


  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = await fetch("/api/prompt")
      const data = await response.json()
      setAllPosts(data)
      setSearchResults(data)
    }

    fetchPosts()
  }, [])

  const filterPrompts = (searchText) =>{
    const regex = new RegExp(searchText, "i") //i flag for case-insensitive
    return allposts.filter((item)=>
      regex.test(item.creator.username) ||
      regex.test(item.tag) ||
      regex.test(item.prompt)
    )
  }

  const handleSearchChange = (e) =>{
    clearTimeout(searchTimeout);
    setSearchText(e.target.value)
    
    // debounce method 
    setSearchTimeout(
      setTimeout(()=>{
        const searchResult = filterPrompts(e.target.value)
        setSearchResults(searchResult)
      }, 500)
    )
  }

  const handleTagClick = (tagName) =>{
    setSearchText(tagName)

    const searchResult = filterPrompts(tagName)
    setSearchResults(searchResult)
  }
      

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search with tag, User name or any word in prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        >
        </input>
      </form>

      <PromptCardList
        data={serachResults}
        handleTagClick={handleTagClick}
      ></PromptCardList>
    </section>
  )
}

export default Feed
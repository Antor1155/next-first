import PromptCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick}) =>{
    console.log(data)
  return (
    <div className="mt-16 prompt_loyout">
      {data.map((post) =>{
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          />
      })}
    </div>
  )
}

export default PromptCardList
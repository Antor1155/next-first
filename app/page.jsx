import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI powerd Prompts</span>
      </h1>
      <p className="desc text-center">
        Discover, Create, and Collaborate with AI PromptShare! Unleash your creativity, find inspiration, and connect with a vibrant community of writers and thinkers. Fuel your ideas with our powerful AI prompt generator.
      </p>

      <Feed />
    </section>
  )
}

export default Home
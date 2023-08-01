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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in iste esse adipisci harum ducimus atque debitis perspiciatis maxime? Unde recusandae, distinctio, nemo reiciendis fuga labore numquam, eos nihil eveniet optio placeat obcaecati quos.
      </p>

      <Feed />
    </section>
  )
}

export default Home
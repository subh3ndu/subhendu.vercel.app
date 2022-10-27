import Head from "next/head"

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Flexing</title>
        <meta name="description" content="My Project Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-light_text dark:text-dark_text font-semibold mt-12 text-4xl lg:text-4xl">
        Projects
      </div>
    </>
  )
}

export default Projects

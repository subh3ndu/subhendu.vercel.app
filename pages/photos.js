import Head from "next/head"

const Photos = () => {
  return (
    <>
      <Head>
        <title>Photoshoot 📸</title>
        <meta name="description" content="Twitting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-light_text dark:text-dark_text font-semibold mt-12 text-4xl lg:text-4xl">
        Photos
      </div>
      <h1 className="text-center mt-48">No photos yet 🥲</h1>
    </>
  )
}

export default Photos

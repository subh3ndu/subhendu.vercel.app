import Head from "next/head"
import Hero from "../sections/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>Subhendu Karmakar (Venom_61)</title>
        <meta name="description" content="My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
      </div>
    </>
  )
}

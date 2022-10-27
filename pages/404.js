import Head from "next/head"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>oops, page not found 😰</title>
        <meta name="description" content="My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center py-64 text-light_text dark:text-dark_text font-semibold text-4xl">
        404 &nbsp;|&nbsp; Page Not Found
      </div>
    </>
  )
}

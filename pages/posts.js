import fs from "fs"
import path from "path"
import Head from "next/head"
import matter from "gray-matter"
import Postcard from "../components/Postcard"

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts Writter By me !!</title>
        <meta name="description" content="Personal Blogging" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-light_text dark:text-dark_text font-semibold mt-12 text-4xl lg:text-4xl">
        Posts
      </div>
      <div>
        {posts.map((post) => (
          <Postcard
            key={post.slug}
            title={post.frontMatter.title}
            date={post.frontMatter.date}
            desc={post.frontMatter.description}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  )
}

export const getStaticProps = () => {
  const files = fs.readdirSync(path.join("posts"))

  const posts = files.map((file) => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8")

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: file.split(".")[0],
    }
  })

  return {
    props: {
      posts: posts.sort(
        (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
      ),
    },
  }
}

export default Posts

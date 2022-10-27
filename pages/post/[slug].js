import fs from "fs"
import matter from "gray-matter"
import path from "path"
import Head from "next/head"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import { markdownElements } from "../../components/Blog"

const components = { ...markdownElements }

const postPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <>
      <Head>
        <title>
          {title} @ {date}
        </title>
        <meta name="description" content="My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-4 mb-8 prose">
        <h1 className="text-4xl font-bold dark:text-dark_main text-light_main pb-4 border-b-2">
          {title}
        </h1>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"))

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".mdx", ""),
    },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"))

  const { data: frontMatter, content } = matter(markdownWithMeta)

  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

export default postPage

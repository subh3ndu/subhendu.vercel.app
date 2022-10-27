import { ArrowIcon } from "./Icons"
import Link from "next/link"

const Button = ({ slug, children }) => {
  return (
    <button className="inline-flex font-mono items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <Link href={`/post/${slug}`}>{children}</Link>
      <ArrowIcon />
    </button>
  )
}

export default Button

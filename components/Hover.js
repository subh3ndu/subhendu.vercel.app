import Link from "next/link"

const Hover = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="link dark:link text-light_main dark:text-dark_main shadow-custom dark:shaodw-custom_dark hover:shadow-custom2 dark:hover:shadow-custom_dark2">
        {children}
      </a>
    </Link>
  )
}

export default Hover

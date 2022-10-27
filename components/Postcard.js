import Link from "next/link"

const Postcard = ({ title, desc, date, slug }) => {
  return (
    <>
      <div className="mt-6 border-b border-light_main dark:border-dark_main lg:mt-12 lg:flex lg:min-h-20">
        <small className="lg:text-lg lg:px-6 lg:w-48">{date}</small>
        <div className="lg:px-6">
          <Link href={`/post/${slug}`} className="cursor-pointer">
            <a className="text-2xl text-light_main dark:text-dark_main font-bold lg:text-2xl">
              {title}
            </a>
          </Link>
          <p className="my-6 lg:text-xl lg:my-10">{desc}</p>
        </div>
      </div>
    </>
  )
}

export default Postcard

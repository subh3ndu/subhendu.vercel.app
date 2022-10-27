import Button from "./Button"

const Card = ({ title, date, desc, slug }) => {
  return (
    <div className="p-6 my-4 w-full md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <small className="text-sm text-slate-400">{date}</small>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </p>
      <Button slug={slug}>Read more</Button>
    </div>
  )
}

export default Card

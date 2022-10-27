const h1 = ({ children }) => {
  return <h1 className="text-light_text dark:text-dark_text">{children}</h1>
}

const h2 = ({ children }) => {
  return <h2 className="text-light_text dark:text-dark_text">{children}</h2>
}

const h3 = ({ children }) => {
  return <h3 className="text-light_text dark:text-dark_text">{children}</h3>
}

const h4 = ({ children }) => {
  return <h4 className="text-light_text dark:text-dark_text">{children}</h4>
}

const h5 = ({ children }) => {
  return <h5 className="text-light_text dark:text-dark_text">{children}</h5>
}

const hr = () => {
  return <hr className=""></hr>
}

const p = ({ children }) => {
  return <p className="text-light_text dark:text-dark_text">{children}</p>
}

const li = ({ children }) => {
  return <li className="text-light_text dark:text-dark_text">{children}</li>
}

const strong = ({ children }) => {
  return (
    <strong className="text-light_text dark:text-dark_text">{children}</strong>
  )
}

const code = ({ children }) => {
  return <code className="text-light_text dark:text-dark_text">{children}</code>
}

const a = ({ children }) => {
  return (
    <a className="text-light_text dark:text-dark_text cursor-pointer">
      {children}
    </a>
  )
}

export const markdownElements = {
  h1,
  h2,
  h3,
  h4,
  h5,
  hr,
  p,
  li,
  strong,
  code,
  a,
}

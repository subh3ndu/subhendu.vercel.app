import Hover from "../components/Hover"

const Footer = ({}) => {
  return (
    <footer className="py-2 text-center text-xs text-light_text dark:text-dark_text">
      <span>
        No <span className="text-light_main dark:text-dark_main">&copy;</span>{" "}
        copyright issues
        <span className="hidden md:inline">
          , feel free to copy if you want. source code on{" "}
          <Hover href="https://github.com/subhenduKarma001/website">
            Github
          </Hover>
        </span>
      </span>
    </footer>
  )
}

export default Footer

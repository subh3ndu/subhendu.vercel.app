import Hover from "../components/Hover"
import { Heart } from "../components/Icons"

const Footer2 = () => {
  return (
    <footer className="py-2 text-center text-xs text-light_text dark:text-dark_text">
      made with{" "}
      <a href="https://www.instagram.com/maikarmahoon/">
        <Heart />
      </a>{" "}
      using <Hover href="https://nextjs.org/">Next.js</Hover> and{" "}
      <Hover href="https://tailwindcss.com/">Tailwind</Hover>, deployed at{" "}
      <Hover href="https://vercel.com/home">Vercel</Hover>
    </footer>
  )
}

export default Footer2

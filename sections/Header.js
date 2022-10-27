import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Link from "next/link"
import { SunIcon, MoonIcon } from "../components/Icons"

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigations = [
    { index: 1, label: "Home", href: "/" },
    { index: 2, label: "Projects", href: "/projects" },
    { index: 3, label: "Posts", href: "/posts" },
    { index: 4, label: "Tweets", href: "/tweets" },
    { index: 5, label: "Photos", href: "/photos" },
  ]

  const themeChanger = () => {
    if (!mounted) return null
    const currTheme = theme === "system" ? systemTheme : theme

    if (currTheme === "dark") {
      return (
        <div
          className="rounded-full cursor-pointer p-2 md:hover:ring-2 md:hover:ring-light_main md:dark:hover:ring-dark_main md:hover:bg-light_bg md:dark:hover:bg-dark_bg md:hover:text-light_main md:dark:hover:text-dark_main"
          onClick={() => setTheme("light")}
        >
          {/* sun icon */}
          <SunIcon />
        </div>
      )
    } else {
      return (
        <div
          className="rounded-full cursor-pointer p-2 md:hover:ring-2 md:hover:ring-light_main md:dark:hover:ring-dark_main md:hover:bg-light_bg md:dark:hover:bg-dark_bg md:hover:text-light_main md:dark:hover:text-dark_main"
          onClick={() => setTheme("dark")}
        >
          {/* moon icon */}
          <MoonIcon />
        </div>
      )
    }
  }

  return (
    <header className="h-16 flex items-center justify-around md:justify-between">
      <ul className="flex gap-6">
        {navigations.map((nav) => {
          return (
            <Link key={nav.index} href={nav.href}>
              <a className="text-light_text dark:text-dark_text hover:text-light_main dark:hover:text-dark_main md:text-xl md:font-semibold">
                {nav.label}
              </a>
            </Link>
          )
        })}
      </ul>
      {themeChanger()}
    </header>
  )
}

export default Header

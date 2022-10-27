import Link from "next/link"
import Button from "../components/Button"
import Hover from "../components/Hover"
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <section className="mt-16 md:mx-10 lg:mx-auto">
      <div className="flex">
        {/* Hero Text */}
        <div>
          <span className="font-mono text-xl md:text-2xl">
            console.
            <span className="text-light_main dark:text-dark_main">log</span>(
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-light_main dark:text-dark_main">&quot;</span>
            Subhendu Karmakar.
            <span className="text-light_main dark:text-dark_main">&quot;</span>
            <span className="hidden md:inline hover:wave ">👋</span>{" "}
          </h1>
          <span className="font-mono text-3xl">
            )<span className="text-light_main dark:text-dark_main">;</span>
          </span>
          <h3 className="text-xl md:text-2xl my-3">
            <Typewriter
              options={{
                strings: [
                  "i'm a web developer.",
                  "i love solving problems.",
                  "i'm a competitive programmer.",
                  "i love javascript, python and c++.",
                  "i am learning typescript rn.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="md:text-lg text-light_text dark:text-dark_text mb-8">
            <p>
              Hello world! I'm Subhendu, I enjoy coding competitively, building
              useless but fun things and making (generative) art !
            </p>
            <p>
              I'm currently a 3rd year undergrad at Indira Gandhi Instititue of
              technology, Sarang, pursuing my bachelor's degree in computer
              science.
            </p>
            <p>
              Check out <Hover href="/projects">projects</Hover> or my
              <Hover href="https://github.com/subhenduKarma001"> Github </Hover>
              to see more cool projects!
            </p>
          </div>
        </div>
        {/* Hero Image */}
        <div className="hidden lg:inline-block">
          <div className="w-72 h-96 mx-5 bg-light_main dark:bg-dark_main rounded-lg shadow-2xl rotate-1 hover:animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col md:inline-block space-y-4 md:space-x-4">
        <Button className="md:hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          <Link href="mailto:subhendukarmakar61@gmail.com">Email</Link>
        </Button>
        <Button className="md:hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          <Link href="https://github.com/subhendukarma001">Github</Link>
        </Button>
        <Button className="md:hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          <Link href="https://www.linkedin.com/in/subhendu-karmakar-ba8914190/">
            Linkedin
          </Link>
        </Button>
        <Button className="md:hover:animate-pulse transition-all bg-light_main text-white dark:bg-dark_main rounded-md">
          <Link href="https://twitter.com/SubhenduKarma">Twitter</Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero

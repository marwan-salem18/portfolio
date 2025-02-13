

export default function footer(){
    return (
      <footer className="border-t-2 border-solid text-center mt-20">
        <p
          className="text-2xl mt-5 font-bold
"
        >
          Contact Me:
        </p>
        <div className="flex flex-row justify-center mt-5 gap-x-5 ">
          <a href="https://www.linkedin.com/in/marwansalem209">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              className="w-15"
            />
          </a>
          <a href="https://github.com/marwan-salem18">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              className="w-15 dark:invert"
            />
          </a>
          <a href="mailto:marwan.salem209@gmail.com">
            <img
              src="https://img.icons8.com/?size=256&id=P7UIlhbpWzZm&format=png"
              className="w-15"
            />
          </a>
          <a href="https://wa.me/qr/WKOCDJLTT2ENP1">
            <img
              src="https://img.icons8.com/?size=256&id=16712&format=png"
              className="w-15 dark:invert"
            />
          </a>
        </div>
      </footer>
    );
}
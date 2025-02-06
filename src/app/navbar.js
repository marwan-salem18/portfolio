export default function Navbar(){
    return (
      <nav
        className="flex flex-row flex-wrap
      inset-x-0 top-0 justify-between border-b-1 dark:border-gray-700 border-amber-50 max-w-full"
      >
        <p className="text-base sm:text-2xl">Marwan Mohamed</p>
        <div className="flex content-center text-sm gap-x-2 sm:text-xl sm:gap-x-3">
          <a href="./">AboutMe</a>
          <a href="./Resume">MyResume</a>
          <a href="./contact">ContactMe</a>
          <a href="./projects">Projects</a>
        </div>
      </nav>
    );
}
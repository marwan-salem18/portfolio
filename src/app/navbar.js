export default function Navbar(){
    return (
      <nav
        className="flex flex-row flex-wrap
      inset-x-0 top-0 justify-between border-b-1 dark:border-gray-700 border-amber-50 max-w-full items-center h-22"
      >
        <p className="text-base sm:text-2xl font-bold">Marwan Salem</p>
        <div className="flex content-center text-sm gap-x-2 sm:text-xl sm:gap-x-4">
          <a href="./">AboutMe</a>
          <div >Resume</div>
          <a href="./projects">Projects</a>
        </div>
      </nav>
    );
}
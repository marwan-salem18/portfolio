export default function Navbar(){
    return (
      <nav className="flex flex-row flex-wrap inset-x-0 top-0 justify-between border-b-1 dark:border-gray-700 border-amber-50 ">
        <p className="text-2xl">Marwan Mohamed</p>
        <div className="flex text-xl gap-x-3">
          <a href="./About-me">AboutMe</a>
          <a href="./Resume">myResume</a>
          <a href="./contact">ContactMe</a>
          <a href="./projects">projects</a>
          <a href="./home">Home</a>
        </div>
      </nav>
    );
}
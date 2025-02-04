const Header = () => {
    return (
      <header className="bg-[#0d0d2b] py-4 px-6 items-cent shadow-md">
        <h1 className="text-xl font-bold text-white">React.js</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
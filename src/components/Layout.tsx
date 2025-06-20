import { Outlet } from "react-router-dom"; // For nested routes

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Your Navbar component goes here */}
      <header>
        {/* Navbar goes here */}
      </header>
      
      {/* Main content rendered by Outlet (dynamic for each page) */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer component */}
      <footer>
        {/* Footer goes here */}
      </footer>
    </div>
  );
};

export default Layout;

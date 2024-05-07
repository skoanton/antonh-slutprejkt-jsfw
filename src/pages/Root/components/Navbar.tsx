import { Button } from "@/components/ui/button";
import { Home, Library, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const location = useLocation();
  return (
    <footer className="w-full bg-primary p-4 fixed bottom-0 left-0">
      <ul className="flex justify-between">
        <li>
          <Link to="/">
            <Button
              className={
                location.pathname === "/"
                  ? "text-muted-foreground"
                  : "text-primary-foreground"
              }
            >
              <Home className="w-12 h-12" />
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Button
              className={
                location.pathname === "/search"
                  ? "text-muted-foreground"
                  : "text-primary-foreground"
              }
            >
              <Search className="w-12 h-12" />
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/shelf/favorites">
            <Button
              className={
                location.pathname.startsWith("/shelf/")
                  ? "text-muted-foreground"
                  : "text-primary-foreground"
              }
            >
              <Library className="w-12 h-12" />
            </Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Navbar;

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ArrowLeft, BookCheck, Heart } from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

type TopNavProps = {};

const TopNav = ({}: TopNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="grid grid-cols-3">
      {location.pathname !== "/" && (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button className="bg-transparent" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-10 h-10" />
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
      {location.pathname === "/" ? (
        <h1 className="text-5xl justify-self-center uppercase text-primary-foreground">
          Book Library
        </h1>
      ) : location.pathname.startsWith("/search/") ? (
        <h1 className="text-4xl justify-self-center text-primary-foreground">
          Results
        </h1>
      ) : location.pathname.startsWith("/book/") ? (
        <h1 className="text-4xl justify-self-center text-primary-foreground">
          Book
        </h1>
      ) : location.pathname === "/shelf/favorites" ? (
        <>
          <h1 className="text-4xl justify-self-center text-primary-foreground">
            Favorites
          </h1>
          <NavigationMenu className="justify-self-end">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Heart className="w-12 h-12 text-secondary" />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/shelf/read">
                  <BookCheck className="w-12 h-12 text-secondary" />
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </>
      ) : location.pathname === "/shelf/read" ? (
        <>
          <h1 className="text-4xl justify-self-center text-primary-foreground">
            Read Books
          </h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/shelf/favorites">
                  <Heart className="w-12 h-12 text-secondary" />
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <BookCheck className="w-12 h-12 text-secondary" />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </>
      ) : (
        <h1 className="text-4xl justify-self-center text-primary-foreground">
          Other
        </h1>
      )}
    </header>
  );
};

export default TopNav;

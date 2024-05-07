import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ArrowLeft, BookCheck, Divide, Heart } from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";

type TopNavProps = {};

const TopNav = ({}: TopNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="flex justify-between mt-9">
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
        <h2 className="text-5xl mx-auto uppercase text-primary-foreground">
          Book Library
        </h2>
      ) : location.pathname.startsWith("/search/") ? (
        <h2 className="text-4xl mx-auto text-primary-foreground">Results</h2>
      ) : location.pathname.startsWith("/book/") ? (
        <h2 className="text-4xl mx-auto text-primary-foreground">Book</h2>
      ) : location.pathname === "/shelf/favorites" ? (
        <>
          <h2 className="text-4xl mx-auto text-primary-foreground">
            Favorites
          </h2>
          <NavigationMenu>
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
          <h2 className="text-4xl mx-auto text-primary-foreground">
            Read Books
          </h2>
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
        <h2 className="text-4xl mx-auto text-primary-foreground">Other</h2>
      )}
    </header>
  );
};

export default TopNav;

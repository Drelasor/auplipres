
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, Search, X } from "lucide-react";

function SheetTest() {
  return (
    <div className="flex items-center justify-between px-5 py-4">

      {/* Bouton hamburger */}
      <Sheet>
        <SheetTrigger className="p-2">
          <Menu size={24} />
        </SheetTrigger>

        {/* Menu latéral */}
        <SheetContent side="left">

          <SheetHeader>
            <SheetTitle>AUPLIPRES</SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col gap-6 px-4">
            <a href="/" className="text-lg hover:text-gray-500">
              Accueil
            </a>

            <a href="#services" className="text-lg hover:text-gray-500">
              Nos services
            </a>

            <a href="#about" className="text-lg hover:text-gray-500">
              À propos
            </a>

            <a href="#contact" className="text-lg hover:text-gray-500">
              Contact
            </a>
          </nav>

        </SheetContent>
      </Sheet>

      {/* Recherche */}
      <button className="p-2">
        <Search size={22} />
      </button>

    </div>
  );
}

export default SheetTest;

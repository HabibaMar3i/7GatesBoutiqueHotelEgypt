import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";
import { Link as RouterLink } from 'react-router-dom';
export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About Us",
        "Contact Us",
        "Our Services",
        "Gallery",
    ];

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-white px-4"
            maxWidth="full"
        >
            <NavbarContent justify="start" className="flex-grow-0">
                <NavbarBrand className="flex items-center gap-3">
                    <Link as={RouterLink} to="/" className="flex items-center gap-3 no-underline">
                        <img src="/src/assets/Logo-Notext-cropped.svg" alt="Logo" className="h-10 w-auto" />
                        <span className="text-[#ba8b4e] font-semibold text-lg font-display">7 Gates Boutique Hotel Egypt</span>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-6" justify="end">
                <NavbarItem>
                    <Link as={RouterLink} to="/about" className="font-medium text-[#ba8b4e] hover:text-[#ba8b4e]/80">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/contact" className="font-medium text-[#ba8b4e] hover:text-[#ba8b4e]/80">
                        Contact Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/services" className="font-medium text-[#ba8b4e] hover:text-[#ba8b4e]/80">
                        Our Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/gallery" className="font-medium text-[#ba8b4e] hover:text-[#ba8b4e]/80">
                        Gallery
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={RouterLink} to="/book" className="bg-[#ba8b4e] text-white hover:bg-[#ba8b4e]/90 px-6 py-2 rounded font-semibold" variant="flat">
                        Book Now
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="text-[#ba8b4e]"
                />
            </NavbarContent>

            <NavbarMenu className="bg-white">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            className="w-full font-medium text-[#ba8b4e]"
                            to={
                                item === "About Us" ? "/about" :
                                    item === "Contact Us" ? "/contact" :
                                        item === "Our Services" ? "/services" :
                                            item === "Gallery" ? "/gallery" : "#"
                            }
                            size="lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Button as={RouterLink} to="/book" className="bg-[#ba8b4e] text-white px-6 py-3 rounded font-semibold w-full" variant="flat" onClick={() => setIsMenuOpen(false)}>
                        Book Now
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}



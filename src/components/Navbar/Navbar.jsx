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
import Logo from '../Logo/Logo';
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
            onMenuOpenChange={setIsMenuOpen}
            className="bg-transparent absolute top-0 left-0 right-0 z-50 px-4"
            maxWidth="full"
        >
            <NavbarContent className="shrink-0">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white"
                />
                <NavbarBrand className="shrink min-w-0">
                    <Link as={RouterLink} to="/" className="flex items-center no-underline">
                        <Logo className="w-8 h-8 sm:w-10 sm:h-10" textClassName="text-sm sm:text-base" />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem>
                    <Link as={RouterLink} to="/about" className="text-brand-50 hover:text-brand-400 font-medium">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/contact" className="text-brand-50 hover:text-brand-400 font-medium">
                        Contact Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/services" className="text-brand-50 hover:text-brand-400 font-medium">
                        Our Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/gallery" className="text-brand-50 hover:text-brand-400 font-medium">
                        Gallery
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="shrink-0">
                <NavbarItem className="hidden sm:flex">
                    <Button as={RouterLink} to="/book" className="bg-brand-600 text-brand-50 hover:bg-brand-500 px-6 py-2 rounded font-semibold" variant="flat">
                        Book Now
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-palace-900/95">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            className="w-full text-brand-50 hover:text-brand-400 font-medium"
                            to={
                                item === "About Us" ? "/about" :
                                    item === "Contact Us" ? "/contact" :
                                        item === "Our Services" ? "/services" :
                                            item === "Gallery" ? "/gallery" : "#"
                            }
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Button as={RouterLink} to="/book" className="bg-brand-500 text-brand-50 hover:bg-brand-400 px-6 py-3 rounded font-semibold w-full" variant="flat">
                        Book Now
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}



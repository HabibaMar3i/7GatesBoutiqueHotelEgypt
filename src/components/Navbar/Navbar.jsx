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

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "About Us",
        "Contact Us",
        "Our Services",
        "Gallery",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link as={RouterLink} to="/" className="flex items-center no-underline">
                        <AcmeLogo />
                        <p className="font-bold text-amber-900">7 Gates Boutique Hotel Egypt</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link as={RouterLink} to="/about" className="text-amber-900 hover:text-amber-700">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/contact" className="text-amber-900 hover:text-amber-700">
                        Contact Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/services" className="text-amber-900 hover:text-amber-700">
                        Our Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/gallery" className="text-amber-900 hover:text-amber-700">
                        Gallery
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={RouterLink} to="/book" className="bg-yellow-950 text-white hover:bg-yellow-900 px-4 py-2 rounded" variant="flat">
                        Book Now
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            className="w-full text-amber-900 hover:text-amber-700"
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
            </NavbarMenu>
        </Navbar>
    );
}



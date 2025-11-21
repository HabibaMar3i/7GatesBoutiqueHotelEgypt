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
            onMenuOpenChange={setIsMenuOpen}
            className="bg-transparent absolute top-0 left-0 right-0 z-50 px-4"
            maxWidth="full"
        >
            <NavbarContent className="shrink-0">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="shrink min-w-0">
                    <Link as={RouterLink} to="/" className="flex items-center no-underline">
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem>
                    <Link as={RouterLink} to="/about" className="font-medium">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/contact" className="font-medium">
                        Contact Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/services" className="font-medium">
                        Our Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={RouterLink} to="/gallery" className="font-medium">
                        Gallery
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="shrink-0">
                <NavbarItem className="hidden sm:flex">
                    <Button as={RouterLink} to="/book" className="px-6 py-2 rounded font-semibold" variant="flat">
                        Book Now
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            as={RouterLink}
                            className="w-full font-medium"
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
                    <Button as={RouterLink} to="/book" className="px-6 py-3 rounded font-semibold w-full" variant="flat">
                        Book Now
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}



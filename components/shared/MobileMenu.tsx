import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function MobileMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <MenuIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ms-4">
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>Features</DropdownMenuItem>
                <DropdownMenuItem>Pricing</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

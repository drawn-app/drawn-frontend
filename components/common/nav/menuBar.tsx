import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useUser } from "@/lib/hooks/UserContext";
import { LogOut, User } from "lucide-react";

export default function MenuBar() {

    const {isLoading, currentUser} = useUser()

    if (isLoading || !currentUser) return null

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={currentUser.avatar} alt="Avatar" width={20} height={20} className="object-cover" />
                    <AvatarFallback>{currentUser.displayName.charAt(0)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{currentUser.displayName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-3">
                    <User size={20}/>
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-3">
                    <LogOut size={20}/>
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        

    )
}
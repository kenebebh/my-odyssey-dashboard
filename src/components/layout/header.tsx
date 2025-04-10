import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BellIcon, MessageSquareIcon, SettingsIcon } from "lucide-react";
import { ThemeToggle } from "../helpers";

export default function Header() {
  return (
    <header className="flex items-center justify-end h-16 px-6 border-b dark:border-gray-800">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-gray-700 dark:text-gray-300"
        >
          <BellIcon className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 dark:bg-red-400 text-[10px] font-medium text-white flex items-center justify-center">
            3<span className="sr-only">3 unread notifications</span>
          </span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-gray-700 dark:text-gray-300"
        >
          <MessageSquareIcon className="h-5 w-5" />
          <span className="sr-only">Messages</span>
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 dark:bg-red-400 text-[10px] font-medium text-white flex items-center justify-center">
            5<span className="sr-only">5 unread messages</span>
          </span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-700 dark:text-gray-300"
        >
          <SettingsIcon className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/admin.png" alt="Admin" />
            <AvatarFallback>BK</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium dark:text-white">
              Banigo Kenebebh
            </p>
            <p className="text-xs text-muted-foreground dark:text-gray-400">
              Super Admin
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

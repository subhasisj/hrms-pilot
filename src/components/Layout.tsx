import { Link } from 'react-router-dom';
import { Users, FileText, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                HR Management
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                to="/requisitions"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Requisitions
              </Link>
              <Link
                to="/candidates"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Candidates
              </Link>
              <Link
                to="/interviews"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Interviews
              </Link>
              <Link
                to="/onboarding"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Onboarding
              </Link>
            </nav>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuItem asChild>
                <Link to="/requisitions">Requisitions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/candidates">Candidates</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/interviews">Interviews</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/onboarding">Onboarding</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-2xl py-6">
        <div className="mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
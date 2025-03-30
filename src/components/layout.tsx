import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useIsMobile } from '../hooks/use-mobile.ts';
import { Outlet } from 'react-router';

export default function Layout() {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        { isMobile && <SidebarTrigger /> }
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

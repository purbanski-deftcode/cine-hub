import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useIsMobile } from '../hooks/use-mobile.ts';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        { isMobile && <SidebarTrigger /> }
        {children}
      </main>
    </SidebarProvider>
  )
}

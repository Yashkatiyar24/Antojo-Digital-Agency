import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"

export default function HomePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Antojo Ops & Analytics System</h1>
        </div>
        <DashboardOverview />
      </main>
    </SidebarProvider>
  )
}

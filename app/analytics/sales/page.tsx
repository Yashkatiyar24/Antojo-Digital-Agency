import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SalesAnalytics } from "@/components/sales-analytics"

export default function SalesAnalyticsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Sales Performance Analytics</h1>
        </div>
        <SalesAnalytics />
      </main>
    </SidebarProvider>
  )
}

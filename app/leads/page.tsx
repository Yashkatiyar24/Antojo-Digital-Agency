import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { LeadsInterface } from "@/components/leads-interface"

export default function LeadsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Leads & CRM</h1>
        </div>
        <LeadsInterface />
      </main>
    </SidebarProvider>
  )
}

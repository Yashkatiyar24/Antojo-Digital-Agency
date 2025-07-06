import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AutomationWorkflows } from "@/components/automation-workflows"

export default function AutomationPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="flex items-center gap-2 p-4 border-b">
          <SidebarTrigger />
          <h1 className="text-2xl font-bold">Automation Workflows</h1>
        </div>
        <AutomationWorkflows />
      </main>
    </SidebarProvider>
  )
}

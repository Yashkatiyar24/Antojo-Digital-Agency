import { BarChart3, Building2, DollarSign, FileText, Target, Users, Zap, Database, TrendingUp } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const operationalItems = [
  {
    title: "Leads & CRM",
    url: "/leads",
    icon: Users,
  },
  {
    title: "Client Accounts",
    url: "/clients",
    icon: Building2,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FileText,
  },
  {
    title: "Sales Team",
    url: "/sales-team",
    icon: Target,
  },
  {
    title: "OKRs & KPIs",
    url: "/okrs",
    icon: TrendingUp,
  },
  {
    title: "Finance",
    url: "/finance",
    icon: DollarSign,
  },
]

const analyticsItems = [
  {
    title: "Sales Performance",
    url: "/analytics/sales",
    icon: BarChart3,
  },
  {
    title: "Financial Metrics",
    url: "/analytics/finance",
    icon: DollarSign,
  },
  {
    title: "Client Performance",
    url: "/analytics/clients",
    icon: Building2,
  },
  {
    title: "Project Tracking",
    url: "/analytics/projects",
    icon: FileText,
  },
]

const automationItems = [
  {
    title: "Workflows",
    url: "/automation",
    icon: Zap,
  },
  {
    title: "Data Sources",
    url: "/data-sources",
    icon: Database,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <div>
            <h2 className="font-semibold">Antojo</h2>
            <p className="text-xs text-muted-foreground">Digital Agency</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Operational Core (Airtable)</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {operationalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Analytics Dashboard (Looker)</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Automation Layer</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {automationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ArrowUpIcon, ArrowDownIcon, TrendingUp, Users, DollarSign, Target, FileText } from "lucide-react"

const salesData = [
  { month: "Jan", revenue: 45000, leads: 120, deals: 8 },
  { month: "Feb", revenue: 52000, leads: 135, deals: 12 },
  { month: "Mar", revenue: 48000, leads: 110, deals: 9 },
  { month: "Apr", revenue: 61000, leads: 150, deals: 15 },
  { month: "May", revenue: 55000, leads: 140, deals: 11 },
  { month: "Jun", revenue: 67000, leads: 160, deals: 18 },
]

const clientPerformanceData = [
  { name: "SEO Growth", value: 85, color: "#10b981" },
  { name: "SEM Performance", value: 72, color: "#3b82f6" },
  { name: "Social Media", value: 68, color: "#f59e0b" },
  { name: "Content Marketing", value: 91, color: "#8b5cf6" },
]

const projectStatusData = [
  { status: "On Track", count: 12, color: "#10b981" },
  { status: "At Risk", count: 3, color: "#f59e0b" },
  { status: "Delayed", count: 1, color: "#ef4444" },
  { status: "Completed", count: 8, color: "#6b7280" },
]

export function DashboardOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$67,000</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">160</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deals Closed</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
              +20% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownIcon className="h-3 w-3 text-red-500 mr-1" />
              -2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue performance over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-revenue)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Status Distribution</CardTitle>
            <CardDescription>Current status of all active projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: {
                  label: "Projects",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* OKRs and Client Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Q2 2024 OKRs Progress</CardTitle>
            <CardDescription>Key objectives and their completion status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Increase MRR by 25%</span>
                <Badge variant="secondary">85%</Badge>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Acquire 50 new clients</span>
                <Badge variant="secondary">72%</Badge>
              </div>
              <Progress value={72} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Launch 3 new service lines</span>
                <Badge variant="secondary">100%</Badge>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Improve client NPS to 8.5</span>
                <Badge variant="secondary">60%</Badge>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client Performance Metrics</CardTitle>
            <CardDescription>Average performance across all client campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientPerformanceData.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: metric.color }} />
                    <span className="text-sm font-medium">{metric.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold">{metric.value}%</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Architecture Overview */}
      <Card>
        <CardHeader>
          <CardTitle>System Architecture Overview</CardTitle>
          <CardDescription>How Airtable, Looker Studio, and automation tools work together</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">AT</span>
              </div>
              <h3 className="font-semibold mb-1">Airtable</h3>
              <p className="text-xs text-muted-foreground">Operational Core</p>
              <p className="text-xs mt-2">Data input, CRM, project management</p>
            </div>

            <div className="text-center p-4 border rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">LS</span>
              </div>
              <h3 className="font-semibold mb-1">Looker Studio</h3>
              <p className="text-xs text-muted-foreground">Analytics Dashboard</p>
              <p className="text-xs mt-2">Visual reporting, KPIs, insights</p>
            </div>

            <div className="text-center p-4 border rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">ZM</span>
              </div>
              <h3 className="font-semibold mb-1">Zapier/Make</h3>
              <p className="text-xs text-muted-foreground">Automation Layer</p>
              <p className="text-xs mt-2">Workflows, integrations, AI insights</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

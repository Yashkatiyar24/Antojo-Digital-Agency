import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, TrendingDown, Target, Users, DollarSign, Clock } from "lucide-react"

const salesFunnelData = [
  { stage: "Leads", value: 1000, color: "#3b82f6" },
  { stage: "Qualified", value: 400, color: "#10b981" },
  { stage: "Proposal", value: 200, color: "#f59e0b" },
  { stage: "Negotiation", value: 100, color: "#ef4444" },
  { stage: "Closed Won", value: 60, color: "#8b5cf6" },
]

const monthlyPerformance = [
  { month: "Jan", revenue: 45000, deals: 8, leads: 120, conversion: 6.7 },
  { month: "Feb", revenue: 52000, deals: 12, leads: 135, conversion: 8.9 },
  { month: "Mar", revenue: 48000, deals: 9, leads: 110, conversion: 8.2 },
  { month: "Apr", revenue: 61000, deals: 15, leads: 150, conversion: 10.0 },
  { month: "May", revenue: 55000, deals: 11, leads: 140, conversion: 7.9 },
  { month: "Jun", revenue: 67000, deals: 18, leads: 160, conversion: 11.3 },
]

const salesRepPerformance = [
  { name: "John Smith", deals: 28, revenue: 156000, conversion: 12.5, quota: 140000 },
  { name: "Sarah Johnson", deals: 22, revenue: 134000, conversion: 10.8, quota: 120000 },
  { name: "Mike Wilson", deals: 19, revenue: 98000, conversion: 9.2, quota: 110000 },
  { name: "Lisa Brown", deals: 15, revenue: 87000, conversion: 8.1, quota: 100000 },
]

const velocityData = [
  { stage: "Lead to Qualified", avgDays: 7, target: 5 },
  { stage: "Qualified to Proposal", avgDays: 14, target: 10 },
  { stage: "Proposal to Negotiation", avgDays: 21, target: 15 },
  { stage: "Negotiation to Close", avgDays: 12, target: 10 },
]

export function SalesAnalytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="flex gap-4">
        <Select defaultValue="6months">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">Last Month</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="1year">Last Year</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Reps</SelectItem>
            <SelectItem value="john">John Smith</SelectItem>
            <SelectItem value="sarah">Sarah Johnson</SelectItem>
            <SelectItem value="mike">Mike Wilson</SelectItem>
            <SelectItem value="lisa">Lisa Brown</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11.3%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +2.1% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Deal Size</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$13,840</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +8.2% from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales Velocity</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54 days</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
              -6 days from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$284K</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +18% from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Deals Trend</CardTitle>
            <CardDescription>Monthly performance over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--chart-1))",
                },
                deals: {
                  label: "Deals",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="var(--color-revenue)"
                    fill="var(--color-revenue)"
                    fillOpacity={0.6}
                  />
                  <Bar yAxisId="right" dataKey="deals" fill="var(--color-deals)" opacity={0.8} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Funnel</CardTitle>
            <CardDescription>Conversion rates through the sales pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesFunnelData.map((stage, index) => (
                <div key={stage.stage} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: stage.color }} />
                    <span className="text-sm font-medium">{stage.stage}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-bold">{stage.value}</span>
                    {index > 0 && (
                      <Badge variant="secondary">
                        {((stage.value / salesFunnelData[index - 1].value) * 100).toFixed(1)}%
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Rep Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Rep Performance</CardTitle>
          <CardDescription>Individual performance metrics and quota attainment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {salesRepPerformance.map((rep) => (
              <div key={rep.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{rep.name}</h4>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{rep.deals} deals</span>
                    <span>${rep.revenue.toLocaleString()} revenue</span>
                    <span>{rep.conversion}% conversion</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Quota: {((rep.revenue / rep.quota) * 100).toFixed(0)}%</div>
                  <Badge
                    variant={rep.revenue >= rep.quota ? "default" : "secondary"}
                    className={rep.revenue >= rep.quota ? "bg-green-100 text-green-800" : ""}
                  >
                    ${rep.revenue.toLocaleString()} / ${rep.quota.toLocaleString()}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sales Velocity */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Velocity by Stage</CardTitle>
          <CardDescription>Average time spent in each stage vs targets</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              avgDays: {
                label: "Average Days",
                color: "hsl(var(--chart-1))",
              },
              target: {
                label: "Target Days",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={velocityData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="stage" type="category" width={120} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="avgDays" fill="var(--color-avgDays)" />
                <Bar dataKey="target" fill="var(--color-target)" opacity={0.6} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Zap, Calendar, Mail, FileText, Database, Bot, ArrowRight, Play, Pause, Settings } from "lucide-react"

const workflows = [
  {
    id: 1,
    name: "Lead Capture & Assignment",
    description: "Automatically capture leads from forms and assign to sales reps",
    status: "active",
    triggers: ["Typeform Submission", "Website Contact Form"],
    actions: ["Create Airtable Record", "Assign to Rep", "Send Welcome Email"],
    lastRun: "2 minutes ago",
    successRate: 98.5,
    runs: 1247,
  },
  {
    id: 2,
    name: "Client Onboarding Sequence",
    description: "Automated onboarding workflow for new clients",
    status: "active",
    triggers: ["Deal Status: Closed Won"],
    actions: ["Create Project", "Send Welcome Package", "Schedule Kickoff"],
    lastRun: "1 hour ago",
    successRate: 95.2,
    runs: 89,
  },
  {
    id: 3,
    name: "Weekly Performance Reports",
    description: "Generate and send weekly performance summaries",
    status: "active",
    triggers: ["Schedule: Every Monday 9 AM"],
    actions: ["Query Airtable", "Generate Report", "Email to Team"],
    lastRun: "2 days ago",
    successRate: 100,
    runs: 24,
  },
  {
    id: 4,
    name: "Contract Status Updates",
    description: "Sync DocuSign contract status with Airtable",
    status: "paused",
    triggers: ["DocuSign Webhook"],
    actions: ["Update Deal Status", "Notify Sales Rep"],
    lastRun: "1 week ago",
    successRate: 92.1,
    runs: 156,
  },
  {
    id: 5,
    name: "Google Analytics Sync",
    description: "Daily sync of GA4 data to Looker Studio",
    status: "active",
    triggers: ["Schedule: Daily 6 AM"],
    actions: ["Fetch GA4 Data", "Update Looker Dataset"],
    lastRun: "6 hours ago",
    successRate: 97.8,
    runs: 180,
  },
  {
    id: 6,
    name: "AI Insights Generator",
    description: "Generate weekly AI-powered insights from performance data",
    status: "active",
    triggers: ["Schedule: Every Friday 5 PM"],
    actions: ["Analyze Data", "Generate Insights", "Create Summary"],
    lastRun: "3 days ago",
    successRate: 89.4,
    runs: 12,
  },
]

const integrations = [
  { name: "Airtable", status: "connected", icon: Database },
  { name: "Google Sheets", status: "connected", icon: FileText },
  { name: "Typeform", status: "connected", icon: FileText },
  { name: "DocuSign", status: "connected", icon: FileText },
  { name: "Google Calendar", status: "connected", icon: Calendar },
  { name: "Gmail", status: "connected", icon: Mail },
  { name: "Google Analytics", status: "connected", icon: Database },
  { name: "OpenAI", status: "connected", icon: Bot },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "paused":
      return "bg-yellow-100 text-yellow-800"
    case "error":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <Play className="h-3 w-3" />
    case "paused":
      return <Pause className="h-3 w-3" />
    default:
      return <Settings className="h-3 w-3" />
  }
}

export function AutomationWorkflows() {
  return (
    <div className="p-6 space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">1 paused</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Runs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,708</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.2%</div>
            <p className="text-xs text-muted-foreground">Average across all workflows</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142h</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Workflows List */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Automation Workflows</CardTitle>
              <CardDescription>Manage your automated processes and integrations</CardDescription>
            </div>
            <Button>
              <Zap className="h-4 w-4 mr-2" />
              Create Workflow
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{workflow.name}</h3>
                      <Badge className={getStatusColor(workflow.status)}>
                        {getStatusIcon(workflow.status)}
                        <span className="ml-1 capitalize">{workflow.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{workflow.description}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Last run: {workflow.lastRun}</span>
                      <span>Success rate: {workflow.successRate}%</span>
                      <span>{workflow.runs} total runs</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch checked={workflow.status === "active"} />
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Triggers</h4>
                    <div className="space-y-1">
                      {workflow.triggers.map((trigger, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted-foreground">
                          <Zap className="h-3 w-3" />
                          {trigger}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Actions</h4>
                    <div className="space-y-1">
                      {workflow.actions.map((action, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted-foreground">
                          <Settings className="h-3 w-3" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card>
        <CardHeader>
          <CardTitle>Connected Integrations</CardTitle>
          <CardDescription>Third-party services connected to your automation workflows</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <integration.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{integration.name}</span>
                </div>
                <Badge
                  variant={integration.status === "connected" ? "default" : "secondary"}
                  className={integration.status === "connected" ? "bg-green-100 text-green-800" : ""}
                >
                  {integration.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workflow Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Workflow Templates</CardTitle>
          <CardDescription>Pre-built automation templates for common use cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Lead Nurturing Sequence</h3>
              <p className="text-sm text-muted-foreground mb-3">Automated email sequence for new leads</p>
              <Button variant="outline" size="sm">
                Use Template
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Project Status Updates</h3>
              <p className="text-sm text-muted-foreground mb-3">Notify clients of project milestones</p>
              <Button variant="outline" size="sm">
                Use Template
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Invoice Generation</h3>
              <p className="text-sm text-muted-foreground mb-3">Auto-generate invoices from completed projects</p>
              <Button variant="outline" size="sm">
                Use Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

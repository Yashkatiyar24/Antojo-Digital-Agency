import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Filter, MoreHorizontal, Phone, Mail, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const leadsData = [
  {
    id: 1,
    name: "Bella Vista Restaurant",
    contact: "Maria Rodriguez",
    email: "maria@bellavista.com",
    phone: "(555) 123-4567",
    stage: "Qualified",
    dealSize: "$15,000",
    rep: "John Smith",
    lastContact: "2024-01-15",
    heatScore: "Hot",
    source: "Website",
  },
  {
    id: 2,
    name: "Urban Bites Cafe",
    contact: "David Chen",
    email: "david@urbanbites.com",
    phone: "(555) 234-5678",
    stage: "Proposal",
    dealSize: "$8,500",
    rep: "Sarah Johnson",
    lastContact: "2024-01-14",
    heatScore: "Warm",
    source: "Referral",
  },
  {
    id: 3,
    name: "Coastal Seafood Co",
    contact: "Jennifer Walsh",
    email: "jen@coastalseafood.com",
    phone: "(555) 345-6789",
    stage: "Discovery",
    dealSize: "$22,000",
    rep: "Mike Wilson",
    lastContact: "2024-01-13",
    heatScore: "Hot",
    source: "LinkedIn",
  },
  {
    id: 4,
    name: "Farm Fresh Deli",
    contact: "Robert Taylor",
    email: "rob@farmfreshdeli.com",
    phone: "(555) 456-7890",
    stage: "Initial Contact",
    dealSize: "$5,200",
    rep: "Lisa Brown",
    lastContact: "2024-01-12",
    heatScore: "Cold",
    source: "Cold Email",
  },
  {
    id: 5,
    name: "Spice Route Kitchen",
    contact: "Priya Patel",
    email: "priya@spiceroute.com",
    phone: "(555) 567-8901",
    stage: "Negotiation",
    dealSize: "$18,700",
    rep: "John Smith",
    lastContact: "2024-01-16",
    heatScore: "Hot",
    source: "Google Ads",
  },
]

const getStageColor = (stage: string) => {
  switch (stage) {
    case "Initial Contact":
      return "bg-gray-100 text-gray-800"
    case "Discovery":
      return "bg-blue-100 text-blue-800"
    case "Qualified":
      return "bg-yellow-100 text-yellow-800"
    case "Proposal":
      return "bg-purple-100 text-purple-800"
    case "Negotiation":
      return "bg-orange-100 text-orange-800"
    case "Closed Won":
      return "bg-green-100 text-green-800"
    case "Closed Lost":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getHeatColor = (heat: string) => {
  switch (heat) {
    case "Hot":
      return "bg-red-100 text-red-800"
    case "Warm":
      return "bg-yellow-100 text-yellow-800"
    case "Cold":
      return "bg-blue-100 text-blue-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function LeadsInterface() {
  return (
    <div className="p-6 space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search leads..." className="pl-8 w-64" />
          </div>
          <Select>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              <SelectItem value="initial">Initial Contact</SelectItem>
              <SelectItem value="discovery">Discovery</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="proposal">Proposal</SelectItem>
              <SelectItem value="negotiation">Negotiation</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Pipeline Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Qualified Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43</div>
            <p className="text-xs text-muted-foreground">34% conversion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$284K</div>
            <p className="text-xs text-muted-foreground">+18% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Deal Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$13.8K</div>
            <p className="text-xs text-muted-foreground">+5% vs last quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Leads</CardTitle>
          <CardDescription>Manage your sales pipeline and track lead progress</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Deal Size</TableHead>
                <TableHead>Heat Score</TableHead>
                <TableHead>Sales Rep</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leadsData.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-muted-foreground">{lead.source}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{lead.contact}</div>
                      <div className="text-sm text-muted-foreground">{lead.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStageColor(lead.stage)}>{lead.stage}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{lead.dealSize}</TableCell>
                  <TableCell>
                    <Badge className={getHeatColor(lead.heatScore)}>{lead.heatScore}</Badge>
                  </TableCell>
                  <TableCell>{lead.rep}</TableCell>
                  <TableCell>{lead.lastContact}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                          <DropdownMenuItem>View History</DropdownMenuItem>
                          <DropdownMenuItem>Convert to Client</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

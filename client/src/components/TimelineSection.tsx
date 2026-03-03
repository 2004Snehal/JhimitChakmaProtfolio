import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  type: 'startup' | 'research' | 'internship';
  isUpcoming?: boolean;
}

export default function TimelineSection() {
  //todo: remove mock functionality - timeline data will come from props or context
  const timelineData: TimelineItem[] = [
    {
      id: "1",
      title: "Research Analyst",
      organization: "Elara Capital",
      period: "Feb'25 - Apr'25",
      location: "Mumbai, India", 
      description: "Decoded trends in Fiscal and Revenue Deficit and assessed State Budgets of West Bengal, Uttar Pradesh, Jharkhand, Odisha. Analysed Bid to Cover ratio and Max-Min spread for all 28 Indian States from auction results of State Government Securities.",
      type: "internship"
    },
    {
      id: "2",
      title: "Financial Analyst", 
      organization: "India Accelerator",
      period: "Oct'24 - Nov'24",
      location: "Gurugram, India",
      description: "Analysed unit economics (COGS structure, contribution margin, cost absorption) for GREST; LTV:CAC, churn-adjusted retention for STAGE. Identified EBITDA-CFO divergence via working capital investment and benchmarked unit-level ROIC proxies, burn rate vs industry peers.",
      type: "internship"
    },
    {
      id: "3", 
      title: "Financial Analyst",
      organization: "Oister Global", 
      period: "Sep'24 - Oct'24",
      location: "Mumbai, India",
      description: "Analyzed Pre-IPO vs Post-IPO valuations of Nykaa, FirstCry, Zomato, Delhivery, Paytm, Urban Co., identifying key patterns in ROI. Interpreted investing data from funding history for Series A,B,C,D funding, correlating with IPO Subscription rates and EBITDA.",
      type: "internship"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return <Building2 className="h-5 w-5" />;
      default:
        return <Building2 className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-chart-2 text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="timeline" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            Building expertise through strategic internships in financial analysis and market research
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative flex gap-8 items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground border-4 border-background flex items-center justify-center z-10">
                  {getIcon(item.type)}
                </div>
                
                {/* Content card */}
                <Card className="flex-1 p-6 hover-elevate transition-all duration-300" data-testid={`timeline-item-${item.id}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                    </div>
                    <Badge className={getTypeColor(item.type)}>
                      Internship
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
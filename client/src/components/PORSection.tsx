import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Users, Target, TrendingUp, Award } from "lucide-react";

interface PORItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  type: 'financial' | 'leadership' | 'academic';
}

export default function PORSection() {
  const porData: PORItem[] = [
    {
      id: "1",
      title: "Financial Analyst", 
      organization: "IFSA IIT Kharagpur",
      period: "Aug'24 - Apr'25",
      location: "IIT Kharagpur",
      description: [
        "Drove client onboarding through proactive outreach (Capital A, Qi Ventures), including strategic collaborations with IvyCap Ventures",
        "Collaborated with India Accelerator on due diligence for early stage startups and with Oister Global on Private Market insights"
      ],
      type: "financial"
    },
    {
      id: "2",
      title: "Associate Member",
      organization: "Spring Fest | IIT Kharagpur", 
      period: "Oct'23 - Apr'24",
      location: "IIT Kharagpur",
      description: [
        "Spearheaded a team of 16 Campus Ambassadors across 8 colleges in Northeast India achieving a 70% YoY increase in participation",
        "Directed a team of 15 in a publicity drive across 16 Kolkata colleges, organised 8 Events engaging a national audience of over 400"
      ],
      type: "leadership"
    },
    {
      id: "3", 
      title: "School People Leader",
      organization: "Holy Cross School",
      period: "Jan'20 - Feb'21", 
      location: "Agartala, Tripura",
      description: [
        "Elected representative by electorate of 4K+ to chair the student body, leading a team of 30+ office bearers managing 8 houses",
        "Led daily student assemblies, hosted 5+ events, pioneered school's 1st online event, increasing reach by 100% on social media platforms"
      ],
      type: "academic"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'financial':
        return <TrendingUp className="h-5 w-5" />;
      case 'leadership':
        return <Users className="h-5 w-5" />;
      case 'academic':
        return <Award className="h-5 w-5" />;
      default:
        return <Target className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'financial':
        return 'bg-chart-1 text-primary-foreground';
      case 'leadership': 
        return 'bg-chart-2 text-primary-foreground';
      case 'academic':
        return 'bg-chart-3 text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'financial':
        return 'Financial Leadership';
      case 'leadership':
        return 'Team Leadership';
      case 'academic':
        return 'Student Leadership';
      default:
        return 'Leadership';
    }
  };

  return (
    <section id="por" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Positions of Responsibility</h2>
          <p className="text-lg text-muted-foreground">
            Leading with impact across financial analysis, team management, and organizational growth
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {porData.map((item, index) => (
              <div key={item.id} className="relative flex gap-8 items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground border-4 border-background flex items-center justify-center z-10">
                  {getIcon(item.type)}
                </div>
                
                {/* Content card */}
                <Card className="flex-1 p-6 hover-elevate transition-all duration-300" data-testid={`por-item-${item.id}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                    </div>
                    <Badge className={getTypeColor(item.type)}>
                      {getTypeLabel(item.type)}
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
                  
                  <div className="space-y-3">
                    {item.description.map((desc, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
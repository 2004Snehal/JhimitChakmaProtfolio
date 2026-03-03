import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Presentation, Calculator, Image, Eye } from "lucide-react";
import { useLocation } from "wouter";
import researchLabImage from "@assets/generated_images/wall.jpeg";
import project01Image from "@assets/project01 copy 2.png";
import project02Image from "@assets/project02.png";
import project03Image from "@assets/project03.png";

interface Project {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  technologies: string[];
  reportUrl?: string;
  presentationUrl?: string;
  financialModelUrl?: string;
  imageUrl?: string;
  category: 'Financial Analysis' | 'Equity Research' | 'M&A Analysis';
}

export default function ProjectsSection() {
  const [, navigate] = useLocation();
  //todo: remove mock functionality - project data will come from props or API
  const projects: Project[] = [
    {
      id: "1",
      title: "AI-Driven Marketing Analytics & Budget Optimization",
      organization: "GC Data Analytics",
      period: "Feb'25 - Mar'25",
      description: "Engineered ROI-based KPIs including ROMI, Retention Rate (8.3%), and Repeat Purchase Rate (7%) to evaluate marketing performance. Built a Random Forest + Adstock + SHAP model (MSE: 0.0454) showing Digital (38%) and SEM (28.7%) as key revenue drivers. Implemented Bayesian MMM with Geometric Adstock and Gurobi optimisation, driving 62.65% GMV uplift and $2.95B incremental ROI.",
      technologies: ["Python", "Random Forest", "SHAP", "Bayesian MMM", "Gurobi", "ROI Analysis", "Marketing Analytics"],
      reportUrl: "https://drive.google.com/file/d/1NFuwcO8TqdB86LD4-9vF_bhHQ9qMVn-y/view?usp=drive_link",
      presentationUrl: "https://drive.google.com/file/d/1tKTcn-AmTEboGyV_V9UDrFZcMucGbtAK/view?usp=drive_link", 
      imageUrl: project01Image,
      category: "Financial Analysis"
    },
    {
      id: "2",
      title: "Equity Research and Valuation of Medanta",
      organization: "Investment Fund | IFSA IIT Kharagpur",
      period: "Mar'25",
      description: "Executed DCF, CCA and FFA, estimated WACC(12.2%), EV, implied IV Rs.877–Rs.1,542(Base), Rs.1,153–Rs.3,043(Bull) vs CMP Rs.1,098. Performed Fama–French factor attribution, identifying negative alpha, low beta and growth-momentum tilt (HML 0.77%, WML +0.55%). Conducted bottom up equity research; applied DuPont to analyze ROE drivers and operational efficiency; recommended BUY/HOLD.",
      technologies: ["DCF", "WACC", "Fama-French", "DuPont Analysis", "Equity Valuation", "Financial Modeling"],
      reportUrl: "https://drive.google.com/file/d/1oqfPYTPj89BsKrvMzHfbzW-LBgfcVljW/view?usp=drive_link",
      imageUrl: project02Image,
      category: "Equity Research"
    },
    {
      id: "3",
      title: "HUL - Bikaji M&A Deal: Valuation, Synergies & Strategic Fit",
      organization: "IFSA IIT Kharagpur",
      period: "Jan'25", 
      description: "Analyzed Indian ethnic snack market, identifying Bikaji for HUL's diversification via operational, marketing, and distribution synergies. Identified 843 Cr in synergies (Revenue, COGS, OPEX) driving EPS accretion; built pro forma statements forecasting EBITDA & Income. Performed valuation of 15,000 Cr HUL-Bikaji acquisition using DCF, WACC (9.79%), and synergy modeling, estimating EV at 22,361 Cr.",
      technologies: ["M&A Analysis", "DCF", "Synergy Modeling", "Pro Forma", "EPS Accretion", "Market Analysis"],
      reportUrl: "https://drive.google.com/file/d/1Wzw2zPPWSETe4o6bqZ_QoV5rnYHKfko4/view?usp=drive_link", 
      
      financialModelUrl: "https://docs.google.com/spreadsheets/d/14AwLmgwR5mbRHEmZEY3MSG2OUlfxhQZr/edit?usp=drive_link&ouid=101597763135414179738&rtpof=true&sd=true",
      imageUrl: project03Image,
      category: "M&A Analysis"
    }
  ];

  const openLink = (url: string) => {
    // Placeholder URLs - will be replaced with actual Google Drive links
    window.open(url, '_blank');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Financial Analysis':
        return 'bg-chart-1 text-primary-foreground';
      case 'Equity Research':
        return 'bg-chart-2 text-primary-foreground';
      case 'M&A Analysis':
        return 'bg-chart-3 text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial analysis projects showcasing expertise in valuation, market research, and strategic consulting
          </p>
        </div>

        {/* Hero project image */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={researchLabImage}
              alt="Financial Research & Analysis"
              className="w-full h-64 lg:h-80 object-cover"
              data-testid="img-research-lab"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold text-white mb-2">Financial Research & Analysis</h3>
              <p className="text-white/90 max-w-md">
                Strategic financial consulting through data-driven valuation, market analysis, and investment research
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover-elevate transition-all duration-300" data-testid={`project-${project.id}`}>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold leading-tight mb-2">{project.title}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-primary font-medium">{project.organization}</p>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                  </div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} Preview`}
                    className="h-40 w-full object-cover"
                  />
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button
                    onClick={() => navigate(`/project/${project.id}`)}
                    variant="default"
                    size="sm"
                    className="w-full text-xs gap-2"
                    data-testid={`button-details-${project.id}`}
                  >
                    <Eye className="h-3 w-3" />
                    View Full Details
                  </Button>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.reportUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openLink(project.reportUrl!)}
                        data-testid={`button-report-${project.id}`}
                        className="text-xs flex-1"
                      >
                        <FileText className="h-3 w-3 mr-1" />
                        Report
                      </Button>
                    )}
                    {project.presentationUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openLink(project.presentationUrl!)}
                        data-testid={`button-presentation-${project.id}`}
                        className="text-xs flex-1"
                      >
                        <Presentation className="h-3 w-3 mr-1" />
                        Slides
                      </Button>
                    )}
                    {project.financialModelUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openLink(project.financialModelUrl!)}
                        data-testid={`button-model-${project.id}`}
                        className="text-xs flex-1"
                      >
                        <Calculator className="h-3 w-3 mr-1" />
                        Model
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
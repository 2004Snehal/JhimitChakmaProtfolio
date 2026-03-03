import { useRoute, Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Presentation, Calculator, ArrowLeft, ExternalLink, Mail } from "lucide-react";

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
  category: string;
  detailDescription?: string;
  keyMetrics?: string[];
  methodology?: string[];
  outcomes?: string[];
}

const projectsData: { [key: string]: Project } = {
  "1": {
    id: "1",
    title: "AI-Driven Marketing Analytics & Budget Optimization",
    organization: "GC Data Analytics",
    period: "Feb'25 - Mar'25",
    description: "Engineered ROI-based KPIs including ROMI, Retention Rate (8.3%), and Repeat Purchase Rate (7%) to evaluate marketing performance. Built a Random Forest + Adstock + SHAP model (MSE: 0.0454) showing Digital (38%) and SEM (28.7%) as key revenue drivers. Implemented Bayesian MMM with Geometric Adstock and Gurobi optimisation, driving 62.65% GMV uplift and $2.95B incremental ROI.",
    technologies: ["Python", "Random Forest", "SHAP", "Bayesian MMM", "Gurobi", "ROI Analysis", "Marketing Analytics"],
    reportUrl: "https://drive.google.com/file/d/1NFuwcO8TqdB86LD4-9vF_bhHQ9qMVn-y/view?usp=drive_link",
    presentationUrl: "https://drive.google.com/file/d/1tKTcn-AmTEboGyV_V9UDrFZcMucGbtAK/view?usp=drive_link",
    financialModelUrl: undefined,
    category: "Financial Analysis",
    detailDescription: "Comprehensive marketing analytics project focused on optimizing budget allocation across digital channels through advanced machine learning and statistical modeling techniques.",
    keyMetrics: [
      "Retention Rate: 8.3%",
      "Repeat Purchase Rate: 7%", 
      "Model MSE: 0.0454",
      "Digital Channel Impact: 38%",
      "SEM Revenue Driver: 28.7%",
      "GMV Uplift: 62.65%",
      "Incremental ROI: $2.95B"
    ],
    methodology: [
      "Engineered comprehensive ROI-based KPIs for marketing performance evaluation",
      "Developed Random Forest model integrated with Adstock modeling for media mix optimization",
      "Applied SHAP (SHapley Additive exPlanations) for model interpretability",
      "Implemented Bayesian Media Mix Modeling with Geometric Adstock transformation",
      "Utilized Gurobi optimization engine for budget allocation constraints",
      "Conducted attribution analysis across digital and traditional channels"
    ],
    outcomes: [
      "Achieved 62.65% increase in Gross Merchandise Value (GMV)",
      "Generated $2.95 billion in incremental ROI through optimized budget allocation",
      "Identified Digital channels as 38% revenue driver enabling strategic investment shift",
      "Established SEM as key 28.7% revenue contributor for prioritized funding",
      "Created scalable framework for ongoing marketing performance optimization",
      "Delivered actionable insights for executive-level marketing strategy decisions"
    ]
  },
  "2": {
    id: "2",
    title: "Equity Research and Valuation of Medanta",
    organization: "Investment Fund | IFSA IIT Kharagpur",
    period: "Mar'25",
    description: "Executed DCF, CCA and FFA, estimated WACC(12.2%), EV, implied IV Rs.877–Rs.1,542(Base), Rs.1,153–Rs.3,043(Bull) vs CMP Rs.1,098. Performed Fama–French factor attribution, identifying negative alpha, low beta and growth-momentum tilt (HML 0.77%, WML +0.55%). Conducted bottom up equity research; applied DuPont to analyze ROE drivers and operational efficiency; recommended BUY/HOLD.",
    technologies: ["DCF", "WACC", "Fama-French", "DuPont Analysis", "Equity Valuation", "Financial Modeling"],
    reportUrl: "https://drive.google.com/file/d/1oqfPYTPj89BsKrvMzHfbzW-LBgfcVljW/view?usp=drive_link",
    presentationUrl: undefined,
    financialModelUrl: undefined, 
    category: "Equity Research",
    detailDescription: "Comprehensive equity research and valuation analysis of Medanta Healthcare, employing multiple valuation methodologies and advanced factor attribution models.",
    keyMetrics: [
      "WACC: 12.2%",
      "Base Case IV: Rs.877–Rs.1,542", 
      "Bull Case IV: Rs.1,153–Rs.3,043",
      "Current Market Price: Rs.1,098",
      "HML Factor: 0.77%",
      "WML Factor: +0.55%",
      "Alpha: Negative"
    ],
    methodology: [
      "Executed Discounted Cash Flow (DCF) analysis with detailed revenue and cost projections",
      "Performed Comparable Company Analysis (CCA) using industry peer multiples",
      "Conducted Financial Forecast Analysis (FFA) with scenario-based projections", 
      "Calculated Weighted Average Cost of Capital (WACC) using CAPM methodology",
      "Applied Fama-French three-factor model for risk-adjusted return attribution",
      "Utilized DuPont framework for comprehensive ROE driver analysis",
      "Performed bottom-up equity research with sector and company-specific analysis"
    ],
    outcomes: [
      "Established comprehensive valuation range supporting investment decision framework",
      "Identified negative alpha indicating potential underperformance vs market",
      "Determined low beta profile suggesting defensive investment characteristics",
      "Revealed growth-momentum tilt through factor attribution analysis",
      "Provided BUY/HOLD recommendation based on fundamental analysis",
      "Created replicable valuation model for ongoing monitoring and updates"
    ]
  },
  "3": {
    id: "3", 
    title: "HUL - Bikaji M&A Deal: Valuation, Synergies & Strategic Fit",
    organization: "IFSA IIT Kharagpur",
    period: "Jan'25",
    description: "Analyzed Indian ethnic snack market, identifying Bikaji for HUL's diversification via operational, marketing, and distribution synergies. Identified 843 Cr in synergies (Revenue, COGS, OPEX) driving EPS accretion; built pro forma statements forecasting EBITDA & Income. Performed valuation of 15,000 Cr HUL-Bikaji acquisition using DCF, WACC (9.79%), and synergy modeling, estimating EV at 22,361 Cr.",
    technologies: ["M&A Analysis", "DCF", "Synergy Modeling", "Pro Forma", "EPS Accretion", "Market Analysis"],
    reportUrl: "https://drive.google.com/file/d/1Wzw2zPPWSETe4o6bqZ_QoV5rnYHKfko4/view?usp=drive_link", 
    presentationUrl: undefined,
    financialModelUrl: "https://docs.google.com/spreadsheets/d/14AwLmgwR5mbRHEmZEY3MSG2OUlfxhQZr/edit?usp=drive_link&ouid=101597763135414179738&rtpof=true&sd=true",
    category: "M&A Analysis",
    detailDescription: "Strategic M&A analysis evaluating Hindustan Unilever Limited's acquisition of Bikaji Foods, focusing on market positioning, synergy realization, and value creation potential.",
    keyMetrics: [
      "Total Synergies Identified: ₹843 Cr",
      "Acquisition Value: ₹15,000 Cr",
      "Combined Entity EV: ₹22,361 Cr", 
      "WACC: 9.79%",
      "EPS Accretion: Positive",
      "Market Share Expansion: Significant"
    ],
    methodology: [
      "Conducted comprehensive Indian ethnic snack market analysis and competitive positioning",
      "Identified strategic rationale for HUL diversification into ethnic snack segment",
      "Quantified operational synergies through supply chain optimization and cost reduction",
      "Calculated marketing synergies via cross-selling and brand leverage opportunities",
      "Analyzed distribution synergies through HUL's established retail network expansion",
      "Built detailed pro forma financial statements integrating both entities",
      "Performed DCF valuation with synergy-adjusted cash flows and appropriate WACC"
    ],  
    outcomes: [
      "Identified ₹843 Cr in quantifiable synergies across revenue, COGS, and OPEX",
      "Demonstrated positive EPS accretion supporting shareholder value creation",
      "Established combined entity valuation at ₹22,361 Cr reflecting synergy premium",
      "Validated strategic fit through market analysis and competitive positioning",
      "Created comprehensive M&A framework applicable to similar transactions",
      "Delivered investment recommendation supporting acquisition decision"
    ]
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id;
  
  if (!projectId || !projectsData[projectId]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const project = projectsData[projectId];

  const openLink = (url: string) => {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="font-bold text-xl">Jhimit Chakma</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Project Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-lg">
                  <span className="text-primary font-medium">{project.organization}</span>
                  <span className="text-muted-foreground">{project.period}</span>
                </div>
              </div>
              <Badge className={getCategoryColor(project.category) + " text-sm px-4 py-2"}>
                {project.category}
              </Badge>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.detailDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.reportUrl && (
              <Button onClick={() => openLink(project.reportUrl!)} className="gap-2">
                <FileText className="h-4 w-4" />
                View Report
                <ExternalLink className="h-3 w-3" />
              </Button>
            )}
            {project.presentationUrl && (
              <Button onClick={() => openLink(project.presentationUrl!)} variant="outline" className="gap-2">
                <Presentation className="h-4 w-4" />
                View Presentation  
                <ExternalLink className="h-3 w-3" />
              </Button>
            )}
            {project.financialModelUrl && (
              <Button onClick={() => openLink(project.financialModelUrl!)} variant="outline" className="gap-2">
                <Calculator className="h-4 w-4" />
                Financial Model
                <ExternalLink className="h-3 w-3" />
              </Button>
            )}
          </div>

          {/* Key Metrics */}
          {project.keyMetrics && (
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Key Metrics & Results</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.keyMetrics.map((metric, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                    <p className="font-medium">{metric}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Methodology */}
          {project.methodology && (
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Methodology & Approach</h2>
              <div className="space-y-4">
                {project.methodology.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{method}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Outcomes */}
          {project.outcomes && (
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Outcomes & Impact</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-chart-1 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Technologies */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4">Interested in Similar Analysis?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I specialize in comprehensive financial analysis, equity research, and strategic consulting. 
              Let's discuss how I can help with your next project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={() => openLink('mailto:jhimitchakma.iitkgp@gmail.com')}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button onClick={() => openLink('https://www.linkedin.com/in/jhimit-chakma-iitkgp/')} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
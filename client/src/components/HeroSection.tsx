import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/jhimit.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
                Jhimit Chakma
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-light">
                <span className="text-primary">Financial Analyst</span> |{' '}
                <span className="text-primary">CFA L1 Candidate</span> |{' '}
                <span className="text-primary">Consultancy</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Strategic financial analyst and consultant with expertise in equity valuation, market analysis, and data-driven insights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('timeline')}
                className="hover-elevate"
                data-testid="button-view-work"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="hover-elevate"
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openLink('https://www.linkedin.com/in/jhimit-chakma-iitkgp/')}
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openLink('mailto:jhimitchakma.iitkgp@gmail.com')}
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <img
                src={profileImage}
                alt="Jhimit Chakma"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-card shadow-2xl"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
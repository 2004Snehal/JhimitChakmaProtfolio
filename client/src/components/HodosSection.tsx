import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign, Target, Bot, Zap, Shield, Video } from "lucide-react";

export default function HodosSection() {
  const openHodosWebsite = () => {
    window.open('https://www.hodosindia.com', '_blank');
  };

  const openHiCapyWebsite = () => {
    window.open('https://www.hicapy.com', '_blank');
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Entrepreneurship</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions that automate complex workflows and enhance productivity
          </p>
        </div>

        {/* HiCapy Section - Currently Building */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <img src="/hicapy.png" alt="HiCapy Logo" className="w-12 h-12 animate-pulse" />
                <div>
                  <h3 className="text-2xl font-semibold">HiCapy - Currently Building</h3>
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">In Development</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Building an AI personal assistant that automates scheduling, email triage, and meeting representation. 
                Your time, finally reclaimed through intelligent automation.
              </p>
              <Button 
                onClick={openHiCapyWebsite}
                className="hover-elevate"
                data-testid="button-hicapy-website"
              >
                Visit HiCapy
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Digital Twin</h4>
                <p className="text-xs text-muted-foreground">AI that learns your communication style</p>
              </Card>
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Lightning Scheduling</h4>
                <p className="text-xs text-muted-foreground">Instant calendar coordination</p>
              </Card>
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Private by Default</h4>
                <p className="text-xs text-muted-foreground">Enterprise-grade encryption</p>
              </Card>
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Meeting Proxy</h4>
                <p className="text-xs text-muted-foreground">AI attends meetings for you</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Hodos Section */}
        <div className="border-t pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hodos - Previous Venture</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Revolutionized corporate travel expense management through automation and strategic partnerships 
                  with Fortune 500 companies including Otis, Dassault, and Rakuten.
                </p>
                <Button 
                  onClick={openHodosWebsite}
                  className="hover-elevate"
                  variant="outline"
                  data-testid="button-hodos-website"
                >
                  Visit Hodos Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <Card className="p-6">
                <h4 className="text-xl font-semibold mb-4">Role: Co-Founder & COO</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Built MVP for travel audit automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Collaborated with industry leaders including Otis, Dassault, and Rakuten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Led investor discussions and strategic funding opportunities</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Enterprise Scale</h4>
                <p className="text-sm text-muted-foreground">
                  Built for large corporations with complex travel policies
                </p>
              </Card>
              
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Industry Partners</h4>
                <p className="text-sm text-muted-foreground">
                  Collaborated with Fortune 500 companies
                </p>
              </Card>
              
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Cost Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Automated expense tracking and audit processes
                </p>
              </Card>
              
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Strategic Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Led product roadmap and market positioning
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import iitKgpImage from "@assets/image_1758046521081.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic financial analyst and CFA Level 1 candidate with proven leadership experience 
            across financial modeling, equity research, and market analysis for sustainable growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a strategic financial analyst and CFA Level 1 candidate currently pursuing B.Tech in Electrical Engineering 
                at IIT Kharagpur. My expertise lies at the intersection of financial modeling, equity research, and data-driven investment analysis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through multiple internships at leading financial institutions like Elara Capital, India Accelerator, and Oister Global, 
                I've developed deep expertise in valuation methodologies, market research, and portfolio analysis. My proven leadership skills, 
                verified through multiple positions of responsibility, enable me to drive teams toward data-driven financial solutions.
              </p>
            </div>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Education</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">B.Tech (Hons.), Electrical Engineering</p>
                      <p className="text-muted-foreground">Indian Institute of Technology Kharagpur</p>
                      <p className="text-sm text-muted-foreground">2023 - 2027 • CGPA: 7.93/10</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Academic Excellence</h4>
                  <p className="text-muted-foreground">
                    NTSE Scholar awarded by the Government of India with a selection rate of 0.3%. 
                    Secured top 1% ranking in JEE Advanced 2023 for admission to IIT Kharagpur.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={iitKgpImage}
                alt="IIT Kharagpur Campus"
                className="rounded-lg shadow-2xl w-full max-w-lg"
                data-testid="img-campus"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
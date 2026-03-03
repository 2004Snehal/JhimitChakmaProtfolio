import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, MapPin, Phone, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import jhimitImage from "@assets/jhimit.jpeg";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    //todo: implement actual form submission to backend
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const openEmail = () => {
    window.open('mailto:jhimitchakma.iitkgp@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Interested in financial consulting, investment analysis, or strategic advisory services?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <Card className="p-6 hover-elevate cursor-pointer" onClick={openEmail}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">jhimitchakma.iitkgp@gmail.com</p>
                    </div>
                  </div>
                </Card>
                
                <Card 
                  className="p-6 hover-elevate cursor-pointer" 
                  onClick={() => openLink('https://www.linkedin.com/in/jhimit-chakma-iitkgp/')}
                  data-testid="contact-linkedin"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <p className="text-muted-foreground">Connect professionally</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services & Expertise</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Financial modeling and valuation services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Equity research and investment analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>M&A advisory and strategic consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Market research and data analytics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card 
              className="p-8 hover-elevate cursor-pointer transition-all duration-300 max-w-sm"
              onClick={() => openLink('https://www.linkedin.com/in/jhimit-chakma-iitkgp/')}
              data-testid="linkedin-profile-card"
            >
              <div className="text-center space-y-6">
                <div className="relative">
                  <img
                    src={jhimitImage}
                    alt="Jhimit Chakma"
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Jhimit Chakma</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    Financial Analyst | CFA L1 Candidate
                  </p>
                  <p className="text-muted-foreground text-sm">
                    IIT Kharagpur | 500+ connections
                  </p>
                </div>
                
                <Button className="w-full gap-2">
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn Profile
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
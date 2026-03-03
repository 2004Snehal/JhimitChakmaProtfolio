import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openLink('https://www.linkedin.com/in/jhimit-chakma-iitkgp/')}
              data-testid="footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openLink('mailto:jhimitchakma.iitkgp@gmail.com')}
              data-testid="footer-email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="text-center space-y-2">
            <button 
              onClick={scrollToTop}
              className="font-bold text-xl hover:text-primary transition-colors"
              data-testid="footer-name"
            >
              Jhimit Chakma
            </button>
            <p className="text-muted-foreground">Financial Analyst | CFA L1 Candidate | Consultant</p>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Jhimit Chakma. Strategic financial consulting with passion for excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
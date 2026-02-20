import { Mail, MapPin, Download, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV
    alert('CV download functionality would be implemented here');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Gaurav Mandloi</h1>
              <h2 className="text-2xl text-indigo-400">Senior Technical Trainer</h2>
              <p className="text-lg text-slate-400">Data Science • Machine Learning • Advanced DSA • Python Expert</p>
            </div>
            
            <div className="inline-block bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg shadow-indigo-500/50 border border-indigo-400/20 my-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white">15+</div>
                <div className="text-base text-indigo-200">Years Experience</div>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-lg max-w-3xl mx-auto">
              With 15 years of experience in technical training, I specialize in conducting interactive 
              sessions on Data Science, Machine Learning, Deep Learning, Advanced DSA, and Python programming. 
              Passionate about simplifying complex technical concepts for diverse audiences.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>Vadodara, Gujarat</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>gaurav.mandloi26@gmail.com</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={handleDownloadCV} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/50">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                onClick={() => window.open('https://linkedin.com/in/gaurav-mandloi-0059a8146', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                onClick={() => window.open('https://github.com/gmandloi27', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
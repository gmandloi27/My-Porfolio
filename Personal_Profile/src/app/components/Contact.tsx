import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:gaurav.mandloi26@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vadodara, Gujarat, India',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'gaurav.mandloi26@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXX XXX XXXX',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Get In Touch</h2>
          <p className="text-slate-400">Feel free to reach out for collaborations or training inquiries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-3 rounded-lg border border-indigo-500/30">
                        <Icon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{info.label}</p>
                        <p className="text-slate-400">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-indigo-500/20">
                <h4 className="font-semibold text-white mb-4">Connect on Social Media</h4>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                    onClick={() => window.open('https://linkedin.com/in/gaurav-mandloi-0059a8146', '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                    onClick={() => window.open('https://github.com/gmandloi27', '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-indigo-500/20">
                <h4 className="font-semibold text-white mb-2">Languages</h4>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                    English
                  </span>
                  <span className="px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
                    Hindi
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject"
                  className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  className="bg-slate-800/50 border-indigo-500/30 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/50">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
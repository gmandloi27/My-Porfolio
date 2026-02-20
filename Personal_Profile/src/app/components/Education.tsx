import { GraduationCap, Award, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Education() {
  const education = [
    {
      year: '2024',
      degree: 'Ph.D. in Computer Science and Engineering',
      institution: 'Nirwan University Jaipur (Rj.)',
      status: 'Pursuing',
    },
    {
      year: '2015',
      degree: 'Master of Technology',
      institution: 'RGPV Bhopal',
      status: 'Completed',
    },
    {
      year: '2008',
      degree: 'Bachelor of Engineering',
      institution: 'RGPV Bhopal',
      status: 'Completed',
    },
  ];

  const certifications = [
    {
      title: 'Certified Data Scientist',
      issuer: 'Edureka',
      year: '2023',
    },
    {
      title: 'Google Data Analyst Professional',
      issuer: 'Google',
      year: '2023',
    },
    {
      title: 'AWS Cloud Solutions Architect',
      issuer: 'AWS',
      year: '2023',
    },
    {
      title: 'IBM Machine Learning Specialist',
      issuer: 'IBM',
      year: '2023',
    },
    {
      title: 'DevOps on AWS Specialization',
      issuer: 'AWS',
      year: '2023',
    },
  ];

  const publications = [
    'Mandloi, G., "A Survey on Feature Extraction Technique for Colour Images", International Journal of Computer Science and Information Technology (IJCSIT), Vol.5(3)',
    'Mandloi, G., Pathak, K., "An Efficient & Detailed Digital Image Feature Extraction Method Using K-NN Algorithm and Image tags", International Journal of Computer Applications (IJCA)',
    'Mandloi, G., Pathak, K., "An Efficient & Detailed Digital Image Feature Extraction Method Using K-NN Algorithm and Image tags", International Journal of Computer Science and Information Technology (IJCSIT), Vol.6(4)',
    'Mandloi, G., Raghuvanshi, A., "An Improved Content Based Image Retrieval Using a Multi Scale Saliency Model", International Journal of Computer Science and Information Technology (IJCSIT), Vol.6(6)',
    'Mandloi, G., Jain, D. C., Gupta, P. K., "A Review on Visual Saliency Detection Based On Multi Scale K-NN Features", Delving Acropolis, Vol.2/Issue1',
    'Mandloi, G., "Machine Learning Algorithms and Applications: A Review", International Journal of Scientific Research and Development (IJSRD), Vol.7/Issue 11',
  ];

  const awards = [
    {
      title: 'Star Educator of the Year',
      organization: 'Acropolis Institute of Technology and Research, Indore',
      year: '2019',
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-950/50 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Education & Achievements</h2>
          <p className="text-slate-400">Academic qualifications, certifications, and research contributions</p>
        </div>

        <Tabs defaultValue="education" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-indigo-500/20">
            <TabsTrigger value="education" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-slate-300">Education</TabsTrigger>
            <TabsTrigger value="certifications" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-slate-300">Certifications</TabsTrigger>
            <TabsTrigger value="publications" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-slate-300">Publications</TabsTrigger>
            <TabsTrigger value="awards" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-slate-300">Awards</TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="mt-6">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-3 rounded-lg border border-indigo-500/30">
                      <GraduationCap className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-slate-400">{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
                            {edu.year}
                          </span>
                          <p className="text-sm text-slate-400 mt-1">{edu.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-600/20 to-green-600/10 p-3 rounded-lg border border-green-500/30">
                      <Award className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-sm text-slate-400">{cert.issuer}</p>
                      <p className="text-sm text-slate-500 mt-2">{cert.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publications" className="mt-6">
            <Card className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 backdrop-blur-sm">
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-indigo-500/20 last:border-b-0">
                    <FileText className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">{pub}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="awards" className="mt-6">
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-600/10 p-3 rounded-lg border border-yellow-500/30">
                      <Award className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{award.title}</h3>
                      <p className="text-slate-400 mt-1">{award.organization}</p>
                      <p className="text-sm text-slate-500 mt-2">{award.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
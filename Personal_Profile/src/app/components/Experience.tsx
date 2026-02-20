import { Briefcase, Star } from 'lucide-react';
import { Card } from './ui/card';

export function Experience() {
  const experiences = [
    {
      period: 'Jun 2023 – Present',
      title: 'Senior Technical Trainer',
      company: 'byteXL TechEd Pvt. Ltd',
      responsibilities: [
        'Conducting interactive sessions on Advanced DSA, Data Structure using Python, Design & Analysis of Algorithm, Data Science, Machine Learning, and Deep Learning using Python',
        'Leading Impact Training in Python and facilitating sessions on Advanced Algorithms, Deep Learning and Predictive Analysis using Statistics',
        'Conducting training sessions on Python applications in Deep Learning and Statistical Predictive Analysis',
      ],
      highlights: [
        'Introduced a new training module on advanced Data Visualization techniques, resulting in increase in participant engagement and knowledge retention',
        'Spearheaded the implementation and design of a Machine Learning system that predicted over 90% accuracy',
      ],
    },
    {
      period: 'Jul 2022 – Jun 2023',
      title: 'Senior Technical Trainer',
      company: 'iNurture Education Solution, Vadodara',
      responsibilities: [
        'Conducted various hands-on sessions on Data Structure, Design & Analysis of Algorithm, Data Science, Machine Learning, and Deep Learning using Python',
        'Led Training Sessions on Dimension Reduction, Model Validation, and Predictive Analysis using Statistics using Python',
      ],
      highlights: [
        'Implemented a personalized learning approach, resulting in improvement in student performance',
      ],
    },
    {
      period: 'Sep 2016 – Jul 2022',
      title: 'Senior Educator',
      company: 'Acropolis Institute of Technology & Research, Indore',
      responsibilities: [
        'Delivered comprehensive courses on Computer Science and Engineering topics',
        'Mentored students in research projects and technical skill development',
      ],
      highlights: [
        'Recognized as Star Educator of the Year in 2019',
      ],
    },
    {
      period: 'Mar 2010 – Sep 2016',
      title: 'Senior Educator',
      company: 'Sushila Devi Bansal College of Technology, Indore',
      responsibilities: [
        'Taught fundamental and advanced Computer Science courses',
        'Developed curriculum and course materials',
      ],
      highlights: [],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Work Experience</h2>
          <p className="text-slate-400">A journey of continuous learning and teaching excellence</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-3 rounded-lg border border-indigo-500/30">
                  <Briefcase className="h-6 w-6 text-indigo-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-indigo-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-indigo-500/20">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-slate-200 mb-2">Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {exp.highlights.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">★</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '1000+', label: 'Students Trained' },
    { icon: BookOpen, value: '6', label: 'Publications' },
    { icon: TrendingUp, value: '90%+', label: 'Model Accuracy' },
  ];

  const competencies = [
    'Advanced Data Structures & Algorithms',
    'Data Structure Using Python',
    'Data Science',
    'Design and Analysis of Algorithm',
    'Python Programming',
    'Interactive Learning',
    'Data Visualization',
    'Machine Learning',
    'Real-time Dash-boarding',
    'Hand-on Training for ML and Deep Learning',
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/50 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Passionate educator and technical expert with a proven track record in delivering impactful training programs
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-sm">
                <Icon className="h-10 w-10 text-indigo-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Profile Summary</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Possess 15 years of experience as Senior Technical Trainer, conducting interactive sessions 
                on Data Structure using Python/C, Design & Analysis of Algorithm, Data Science, Machine Learning, 
                and Deep Learning using Python.
              </p>
              <p>
                Proficient in simplifying technical concepts for diverse audiences, with a focus on corporate 
                training in the Edtech industry.
              </p>
              <p>
                Expert in providing Impact Training in Python and leading sessions on Dimension Reduction, 
                Model Validation, and Predictive Analysis using Statistics.
              </p>
              <p>
                Highly skilled in Tableau, Advanced Excel, Deep Learning with TensorFlow, Data Visualization 
                and Modeling, and Back-end Tool: Django.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {competencies.map((competency, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 rounded-full text-sm hover:from-indigo-600/30 hover:to-purple-600/30 transition-all border border-indigo-500/20 hover:border-indigo-500/40 backdrop-blur-sm"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
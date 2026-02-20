import { Code, Database, BarChart3, Brain, Cloud, Wrench } from 'lucide-react';
import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'C', 'C++'],
    },
    {
      icon: Code,
      title: 'Advanced DSA',
      skills: ['Data Structures', 'Algorithm Design', 'Algorithm Analysis', 'Problem Solving'],
    },
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      skills: ['TensorFlow', 'Deep Learning', 'Machine Learning', 'Predictive Analysis'],
    },
    {
      icon: Database,
      title: 'Data Science',
      skills: ['Data Visualization', 'Statistical Analysis', 'Model Validation', 'Dimension Reduction'],
    },
    {
      icon: BarChart3,
      title: 'Analytics Tools',
      skills: ['Tableau', 'Advanced Excel', 'Real-time Dashboarding'],
    },
    {
      icon: Wrench,
      title: 'Backend & Frameworks',
      skills: ['Django', 'Flask', 'Neo4j'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS Cloud Solutions', 'DevOps on AWS'],
    },
  ];

  const softSkills = [
    'Communication',
    'Leadership',
    'Problem Solving',
    'Team Collaboration',
    'Adaptability',
    'Time Management',
    'Critical Thinking',
    'Creativity',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950/50 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Technical Skills</h2>
          <p className="text-slate-400">Expertise across multiple domains and technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-2 rounded-lg border border-indigo-500/30">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-md text-sm border border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 rounded-full font-medium hover:from-indigo-600/30 hover:to-purple-600/30 transition-all border border-indigo-500/30 hover:border-indigo-500/50 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
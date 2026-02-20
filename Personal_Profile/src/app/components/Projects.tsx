import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Machine Learning Model for Auto Insurance Industry',
      description: 'Built a Machine Learning Model to predict whether an owner will initiate an auto insurance claim in the next year.',
      technologies: ['Python', 'Machine Learning', 'Predictive Analysis'],
      image: 'https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzAxOTk3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Medical Knowledge Graph from EHR',
      description: 'Constructed heterogeneous medical knowledge graph using patient, diseases, drugs and side effects data. Implemented named entity recognition, entity normalization, and transferred to Graph neural networks for drug interaction prediction.',
      technologies: ['Python', 'Neo4j', 'Graph Neural Networks', 'NLP'],
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzcwMTgwNTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Stock Price Prediction using LSTM',
      description: 'Developed LSTM-based neural network model for stock price prediction. Performed comprehensive data preprocessing including discretization, transformation, cleaning and integration. Implemented backpropagation for model optimization.',
      technologies: ['Python', 'LSTM', 'TensorFlow', 'Deep Learning'],
      image: 'https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzAxOTk3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Real-Time Turbulence Compensation System',
      description: 'Developed algorithm for rectifying atmospheric turbulence and detecting moving objects (vehicles/humans) using graph and non-deep learning methods. Created GUI for practical implementation.',
      technologies: ['Python', 'Computer Vision', 'GUI Development'],
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzcwMTgwNTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'AI-Powered Personalized Content Generation',
      description: 'Created LSTM-based generative models for personalized content generation. Built Flask-powered backend with interactive frontend for seamless user experience.',
      technologies: ['Python', 'LSTM', 'Flask', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzAxOTk3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Real-Time Interactive Dashboard',
      description: 'Developed comprehensive real-time dashboard using Python libraries for data visualization and monitoring. Enabled dynamic data analysis and reporting capabilities.',
      technologies: ['Python', 'Tableau', 'Data Visualization', 'Dashboard Design'],
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzcwMTgwNTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Projects</h2>
          <p className="text-slate-400">Real-world applications demonstrating technical expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border-indigo-500/20 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/20 group backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-slate-800/50 text-indigo-300 border-indigo-500/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                  View Details
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
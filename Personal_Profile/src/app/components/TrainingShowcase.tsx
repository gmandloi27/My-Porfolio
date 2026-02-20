import { Code, Users, BookOpen, Award } from 'lucide-react';

export function TrainingShowcase() {
  return (
    <section className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section - Training in Action */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-indigo-500/20">
              {/* Python Code Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900 p-8">
                <div className="font-mono text-green-400 text-sm leading-relaxed">
                  <div className="text-purple-400"># Machine Learning Model Training</div>
                  <div className="mt-2"><span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd</div>
                  <div><span className="text-blue-400">import</span> numpy <span className="text-blue-400">as</span> np</div>
                  <div><span className="text-blue-400">from</span> sklearn.model_selection <span className="text-blue-400">import</span> train_test_split</div>
                  <div><span className="text-blue-400">from</span> sklearn.ensemble <span className="text-blue-400">import</span> RandomForestClassifier</div>
                  <div className="mt-4"><span className="text-purple-400"># Load and prepare data</span></div>
                  <div>df = pd.read_csv(<span className="text-yellow-400">'data.csv'</span>)</div>
                  <div>X = df.drop(<span className="text-yellow-400">'target'</span>, axis=<span className="text-yellow-400">1</span>)</div>
                  <div>y = df[<span className="text-yellow-400">'target'</span>]</div>
                  <div className="mt-4"><span className="text-purple-400"># Train model</span></div>
                  <div>X_train, X_test, y_train, y_test = train_test_split(</div>
                  <div className="ml-4">X, y, test_size=<span className="text-yellow-400">0.2</span>, random_state=<span className="text-yellow-400">42</span></div>
                  <div>)</div>
                  <div className="mt-2">model = RandomForestClassifier(n_estimators=<span className="text-yellow-400">100</span>)</div>
                  <div>model.fit(X_train, y_train)</div>
                  <div className="mt-4">accuracy = model.score(X_test, y_test)</div>
                  <div><span className="text-blue-400">print</span>(<span className="text-yellow-400">f'Accuracy: {'{accuracy:.2%}'}'</span>)</div>
                </div>
              </div>
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Stats Badge */}
              <div className="absolute bottom-4 right-4 bg-gradient-to-br from-indigo-600/95 to-purple-600/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg shadow-indigo-500/50 border border-indigo-400/20">
                <div className="text-sm text-indigo-200">Training Delivered</div>
                <div className="text-2xl font-bold text-white">500+ Sessions</div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-xl shadow-indigo-500/50 border border-indigo-400/20">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span className="font-semibold">Live Training</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Interactive Technical Training
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Transforming complex concepts into clear, actionable knowledge through 
                hands-on training sessions in Data Science, Machine Learning, and Python programming.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-600/10 to-indigo-600/5 p-4 rounded-lg border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-500/40 transition-all">
                <Users className="h-8 w-8 text-indigo-400 mb-2" />
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-slate-400">Students Trained</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/10 to-purple-600/5 p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all">
                <BookOpen className="h-8 w-8 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Courses Delivered</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/10 to-green-600/5 p-4 rounded-lg border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all">
                <Code className="h-8 w-8 text-green-400 mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400">Practical Focus</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600/10 to-orange-600/5 p-4 rounded-lg border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all">
                <Award className="h-8 w-8 text-orange-400 mb-2" />
                <div className="text-2xl font-bold text-white">15</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-500/10 rounded-r backdrop-blur-sm">
              <p className="text-slate-300 italic">
                "Making machine learning accessible through clear explanations, 
                real-world examples, and practical implementations."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
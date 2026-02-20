import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-indigo-500/20 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-3">
          <p className="flex items-center justify-center gap-2 text-slate-400">
            Made with <Heart className="h-4 w-4 text-indigo-500 fill-indigo-500" /> by Gaurav Mandloi
          </p>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import Chatbot from './components/Chatbot';
import { Lesson, UserProgress } from './types';
import { textbookData } from './data';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  // Default to first lesson
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(textbookData[0].lessons[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Progress State
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('phys12_progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('phys12_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  const handleLessonCompletion = (score: number) => {
    setUserProgress(prev => ({
      ...prev,
      [selectedLesson.id]: {
        score: Math.max(score, prev[selectedLesson.id]?.score || 0),
        completed: score >= 80
      }
    }));
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar 
        onSelectLesson={setSelectedLesson} 
        selectedLessonId={selectedLesson.id}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        userProgress={userProgress}
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden relative w-full">
        {/* Mobile Header */}
        <header className="bg-white border-b border-slate-200 p-4 flex items-center gap-3 lg:hidden shadow-sm z-10">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <h1 className="font-bold text-teal-800 truncate">Vật Lí 12 - CTST</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth bg-slate-50">
          <LessonView 
            lesson={selectedLesson} 
            onCompleteLesson={handleLessonCompletion}
            previousScore={userProgress[selectedLesson.id]?.score}
          />
        </main>

        <Chatbot currentLesson={selectedLesson} />
      </div>
    </div>
  );
};

export default App;
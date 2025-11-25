import React, { useState } from 'react';
import { textbookData } from '../data';
import { Chapter, Lesson, UserProgress } from '../types';
import { ChevronDown, ChevronRight, BookOpen, X, CheckCircle } from 'lucide-react';

interface SidebarProps {
  onSelectLesson: (lesson: Lesson) => void;
  selectedLessonId?: string;
  isOpen: boolean;
  toggleSidebar: () => void;
  userProgress: UserProgress;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectLesson, selectedLessonId, isOpen, toggleSidebar, userProgress }) => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(textbookData.map(c => c.id));

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId) 
        : [...prev, chapterId]
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Content */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-slate-200 shadow-xl z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-2 font-bold text-lg text-teal-700">
            <div className="bg-teal-100 p-2 rounded-lg">
              <BookOpen size={20} className="text-teal-600" />
            </div>
            <span>Vật Lí 12</span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden p-1 hover:bg-slate-100 rounded text-slate-500">
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-64px)] p-4 space-y-4">
          {textbookData.map((chapter: Chapter) => (
            <div key={chapter.id} className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-left transition-colors"
              >
                <span className="text-sm uppercase tracking-wide">{chapter.title}</span>
                {expandedChapters.includes(chapter.id) ? <ChevronDown size={16} className="text-slate-400" /> : <ChevronRight size={16} className="text-slate-400" />}
              </button>
              
              {expandedChapters.includes(chapter.id) && (
                <div className="bg-white py-1">
                  {chapter.lessons.map((lesson: Lesson) => {
                    const progress = userProgress[lesson.id];
                    const completed = progress && progress.score >= 80;

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson);
                          if (window.innerWidth < 1024) toggleSidebar();
                        }}
                        className={`w-full text-left p-3 pl-4 text-sm transition-all border-l-4 flex items-center justify-between group ${
                          selectedLessonId === lesson.id
                            ? 'border-teal-500 bg-teal-50 text-teal-800 font-medium'
                            : 'border-transparent text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate pr-2">{lesson.title}</span>
                        <div className="shrink-0">
                          {completed && (
                            <CheckCircle size={16} className="text-green-500" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
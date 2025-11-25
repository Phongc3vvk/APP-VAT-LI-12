import React, { useState, useEffect } from 'react';
import { Lesson, QuizQuestion } from '../types';
import { BookText, Sigma, PenTool, CheckCircle, XCircle, HelpCircle, Lightbulb, Play } from 'lucide-react';
import MathRenderer from './MathRenderer';

interface LessonViewProps {
  lesson: Lesson;
  onCompleteLesson: (score: number) => void;
  previousScore?: number;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onCompleteLesson, previousScore }) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'exercises' | 'quiz'>('theory');
  
  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: number}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Reset state when lesson changes
  useEffect(() => {
    setActiveTab('theory');
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  }, [lesson.id]);

  const handleQuizSubmit = () => {
    if (!lesson.quizzes) return;
    
    let correctCount = 0;
    lesson.quizzes.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / lesson.quizzes.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
    onCompleteLesson(score);
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">{lesson.title}</h1>
            <div className="h-1.5 w-24 bg-teal-500 rounded-full"></div>
          </div>
          {previousScore !== undefined && (
            <div className={`px-4 py-2 rounded-lg text-sm font-bold border ${
              previousScore >= 80 
                ? 'bg-green-50 text-green-700 border-green-200' 
                : 'bg-orange-50 text-orange-700 border-orange-200'
            }`}>
              Điểm cao nhất: {previousScore}%
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 bg-slate-100 p-1 rounded-xl self-start">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all ${
            activeTab === 'theory'
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
          }`}
        >
          <BookText size={18} />
          Lý thuyết
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all ${
            activeTab === 'exercises'
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
          }`}
        >
          <PenTool size={18} />
          Ví dụ minh họa
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all ${
            activeTab === 'quiz'
              ? 'bg-white text-teal-700 shadow-sm'
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
          }`}
        >
          <HelpCircle size={18} />
          Trắc nghiệm
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-20 pr-2">
        
        {/* Theory Tab */}
        {activeTab === 'theory' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Knowledge Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                <BookText className="text-teal-600" size={20} />
                <h3 className="font-bold text-slate-800">Kiến thức trọng tâm</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  {lesson.summary.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-700 leading-relaxed group">
                      <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-teal-400 group-hover:bg-teal-600 transition-colors"></div>
                      <div className="flex-1">
                        {/* Removed prose class to avoid conflict with MathJax */}
                        <MathRenderer content={point} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulas Section */}
            {lesson.formulas && lesson.formulas.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {lesson.formulas.map((formula, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-sm border border-teal-100 hover:border-teal-300 transition-colors overflow-hidden group">
                    <div className="bg-teal-50/50 px-5 py-3 border-b border-teal-100 flex justify-between items-center">
                      <span className="text-sm font-semibold text-teal-800 uppercase tracking-wider">{formula.name}</span>
                      <Sigma size={16} className="text-teal-400" />
                    </div>
                    <div className="p-5">
                      <div className="text-xl text-center font-serif text-slate-800 my-2">
                        <MathRenderer content={formula.expression} />
                      </div>
                      {formula.note && (
                        <div className="mt-4 pt-3 border-t border-slate-100 text-sm text-slate-500 italic flex items-start gap-2">
                          <Lightbulb size={14} className="mt-0.5 shrink-0 text-amber-400" />
                          <MathRenderer content={formula.note} inline />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Exercises Tab */}
        {activeTab === 'exercises' && (
          <div className="space-y-6 animate-fadeIn">
            {lesson.exercises.length > 0 ? (
              lesson.exercises.map((ex, idx) => (
                <div key={ex.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">Ví dụ {idx + 1}</span>
                    </div>
                    <div className="text-slate-800 font-medium leading-relaxed">
                      <MathRenderer content={ex.question} />
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-3 text-emerald-700 font-semibold text-sm">
                      <CheckCircle size={16} />
                      Lời giải chi tiết
                    </div>
                    <div className="text-slate-700 bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                      <MathRenderer content={ex.solution.replace(/\n/g, '<br/>')} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300">
                <PenTool className="mx-auto text-slate-300 mb-3" size={48} />
                <p className="text-slate-500">Chưa có bài tập mẫu cho bài học này.</p>
              </div>
            )}
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="space-y-8 animate-fadeIn">
            {!lesson.quizzes || lesson.quizzes.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300">
                <HelpCircle className="mx-auto text-slate-300 mb-3" size={48} />
                <p className="text-slate-500">Chưa có câu hỏi trắc nghiệm cho bài học này.</p>
              </div>
            ) : (
              <>
                {quizSubmitted && (
                  <div className={`p-6 rounded-xl text-center mb-6 border ${
                    quizScore >= 80 ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
                  }`}>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: quizScore >= 80 ? '#15803d' : '#c2410c' }}>
                      Kết quả: {quizScore}/100
                    </h3>
                    <p className="text-slate-600">
                      {quizScore >= 80 
                        ? 'Chúc mừng! Bạn đã hoàn thành xuất sắc bài học này.' 
                        : 'Hãy xem lại lý thuyết và thử lại để đạt điểm cao hơn nhé.'}
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {lesson.quizzes.map((q, idx) => (
                    <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                      <div className="p-6 border-b border-slate-100 bg-slate-50/30">
                        <div className="flex gap-3">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-sm">
                            {idx + 1}
                          </span>
                          <div className="pt-1 font-medium text-slate-800">
                            <MathRenderer content={q.question} />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 grid gap-3">
                        {q.options.map((opt, optIdx) => {
                          let optionClass = "border-slate-200 hover:border-teal-300 hover:bg-teal-50";
                          let icon = null;

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optionClass = "border-green-500 bg-green-50 ring-1 ring-green-500";
                              icon = <CheckCircle size={18} className="text-green-600" />;
                            } else if (quizAnswers[q.id] === optIdx) {
                              optionClass = "border-red-500 bg-red-50 ring-1 ring-red-500";
                              icon = <XCircle size={18} className="text-red-600" />;
                            } else {
                              optionClass = "border-slate-200 opacity-50";
                            }
                          } else if (quizAnswers[q.id] === optIdx) {
                            optionClass = "border-teal-500 bg-teal-50 ring-1 ring-teal-500";
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                              className={`w-full text-left p-4 rounded-lg border transition-all flex justify-between items-center ${optionClass}`}
                            >
                              <div className="flex gap-3">
                                <span className="font-semibold text-slate-400">{String.fromCharCode(65 + optIdx)}.</span>
                                <MathRenderer content={opt} inline />
                              </div>
                              {icon}
                            </button>
                          );
                        })}
                      </div>
                      {quizSubmitted && q.explanation && (
                        <div className="mx-6 mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-800 text-sm flex gap-3">
                          <Lightbulb size={18} className="shrink-0 mt-0.5" />
                          <div>
                            <strong>Giải thích: </strong>
                            <MathRenderer content={q.explanation} inline />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {!quizSubmitted && (
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={handleQuizSubmit}
                      disabled={Object.keys(quizAnswers).length < lesson.quizzes.length}
                      className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-teal-200 hover:bg-teal-700 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2"
                    >
                      <CheckCircle size={20} />
                      Nộp bài & Xem kết quả
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonView;
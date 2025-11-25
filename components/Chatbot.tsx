import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Lesson } from '../types';
import { generateChatResponse } from '../services/geminiService';
import { Send, X, Loader2, Sparkles } from 'lucide-react';
import MathRenderer from './MathRenderer';

interface ChatbotProps {
  currentLesson?: Lesson;
}

const Chatbot: React.FC<ChatbotProps> = ({ currentLesson }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Xin chào! Mình là trợ lý Vật Lí AI. Mình có thể giúp gì cho bạn về bài học này?',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare context from current lesson
    let context = '';
    if (currentLesson) {
      context = `
        Bài học hiện tại: ${currentLesson.title}.
        Tóm tắt: ${currentLesson.summary.join('. ')}.
        Công thức: ${currentLesson.formulas?.map(f => `${f.name}: ${f.expression}`).join('; ') || 'Không có'}.
      `;
    }

    const responseText = await generateChatResponse(userMsg.text, context);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:scale-110 z-40 flex items-center gap-2"
        >
          <Sparkles size={24} />
          <span className="font-semibold hidden sm:inline">Hỏi AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full sm:w-[400px] h-[600px] max-h-screen sm:bottom-4 sm:right-4 bg-white shadow-2xl sm:rounded-2xl flex flex-col border border-slate-200 z-50 animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-4 flex justify-between items-center sm:rounded-t-2xl text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Trợ lý Vật Lí AI</h3>
                <p className="text-xs text-teal-100 opacity-90">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-teal-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.role === 'model' ? (
                    // Use MathRenderer to render LaTeX in chat response
                    <MathRenderer content={msg.text.replace(/\n/g, '<br/>')} />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                  <Loader2 size={16} className="animate-spin text-teal-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Hỏi về bài học (ví dụ: Giải thích lại công thức...)"
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:hover:bg-teal-600 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
               <p className="text-[10px] text-slate-400">Công thức Toán hãy viết trong dấu $...$</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
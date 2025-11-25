export interface Exercise {
  id: string;
  question: string;
  solution: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  summary: string[]; // List of bullet points or paragraphs
  formulas?: { name: string; expression: string; note?: string }[];
  exercises: Exercise[];
  quizzes?: QuizQuestion[]; // New field for multiple choice
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface UserProgress {
  [lessonId: string]: {
    score: number; // 0 to 100
    completed: boolean;
  }
}
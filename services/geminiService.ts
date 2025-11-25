import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: The API key is expected to be in process.env.API_KEY as per instructions.
// In a real Vite/React app, this would likely be import.meta.env.VITE_API_KEY or similar,
// but following the strict instruction to use process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateChatResponse = async (
  userMessage: string, 
  context: string = ''
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    
    const systemInstruction = `
      Bạn là một gia sư Vật Lí lớp 12 thân thiện và am hiểu, chuyên hỗ trợ học sinh Việt Nam học sách giáo khoa "Chân trời sáng tạo".
      Nhiệm vụ của bạn là giải thích các khái niệm, công thức và hướng dẫn giải bài tập một cách dễ hiểu, kiên nhẫn.
      Dưới đây là ngữ cảnh bài học hiện tại mà học sinh đang xem (nếu có):
      ${context}
      
      Hãy trả lời câu hỏi dựa trên ngữ cảnh này và kiến thức vật lí chuẩn. Dùng định dạng Markdown để trình bày công thức toán học rõ ràng.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Xin lỗi, tôi không thể tạo câu trả lời lúc này.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Đã xảy ra lỗi khi kết nối với AI. Vui lòng kiểm tra API Key hoặc thử lại sau.";
  }
};

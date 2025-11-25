import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    MathJax: any;
  }
}

interface MathRendererProps {
  content: string;
  inline?: boolean;
  className?: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ content, inline = false, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMathJaxReady, setIsMathJaxReady] = useState(false);

  // Helper to convert basic markdown (**bold**, \n) to HTML
  const processContent = (text: string) => {
    let processed = text
      // Escape HTML characters to prevent XSS if content comes from untrusted source (here it's static data so it's generally safe, but good practice)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // Restore Math delimiters (MathJax needs raw $, \(, \), etc. but we need to be careful not to break HTML tags we add)
    // Actually, simplifying: Just process Markdown syntax that doesn't interfere with MathJax
    
    // Bold: **text** -> <b>text</b>
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    
    // Newlines: \n -> <br/>
    processed = processed.replace(/\n/g, '<br/>');

    // Note: We assume the Latex content (inside $...$) does not contain ** or newlines that need html conversion
    // or that MathJax handles them correctly inside the math block.
    
    return processed;
  };

  // Effect to check for MathJax availability
  useEffect(() => {
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      setIsMathJaxReady(true);
    } else {
      const interval = setInterval(() => {
        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
          setIsMathJaxReady(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  // Effect to render content
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Always set the content first
    container.innerHTML = processContent(content);

    // Only try to typeset if MathJax is ready
    if (isMathJaxReady && window.MathJax.typesetPromise) {
      // Clear any previous MathJax elements to prevent duplication/errors
      // Note: MathJax 3 usually handles this via typesetPromise clearing the internal state for the node,
      // but explicit innerHTML reset above does the DOM clearing.
      
      window.MathJax.typesetPromise([container])
        .catch((err: any) => {
          console.warn('MathJax typeset failed, retrying...', err);
          // Optional: window.MathJax.typesetClear([container]);
        });
    }
  }, [content, isMathJaxReady]);

  const Tag = inline ? 'span' : 'div';

  return <Tag ref={containerRef} className={`math-content ${className}`} />;
};

export default MathRenderer;
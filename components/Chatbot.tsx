'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Terminal } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'SISTEMA_INICIALIZADO: Sou o assistente terminal do Carlos.Resende. Como posso ajudar você a construir seu próximo projeto?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `Você é o assistente terminal do Carlos Resende, um Desenvolvedor Fullstack. Seu objetivo é ajudar o Carlos a VENDER seus serviços. Seja técnico, autoritário, mas prestativo. Mencione que o Carlos constrói sites de alta performance que geram resultados. O usuário perguntou: ${input}` }] }
        ],
        config: {
          systemInstruction: "Fale como um assistente de terminal técnico. Use frases curtas, termos técnicos e foque em vender a expertise do Carlos."
        }
      });

      const botMsg = { role: 'bot', text: response.text || "ERRO: CONEXÃO_INTERROMPIDA" };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "ERRO: SISTEMA_OFFLINE. Por favor, use o formulário de contato." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-1000">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="terminal-window w-[350px] h-[500px] mb-6 flex flex-col shadow-accent/10"
          >
            {/* Header */}
            <div className="bg-border/50 px-4 py-2 flex items-center justify-between border-b border-border">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-accent" />
                <span className="mono text-[9px] opacity-50">console_dev — assistente</span>
              </div>
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-accent hover:bg-transparent"
              >
                <X size={16} />
              </Button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-xs">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 border ${
                    msg.role === 'user'
                      ? 'border-accent text-accent bg-accent/5'
                      : 'border-border text-text bg-surface'
                  }`}>
                    <span className="opacity-50 mr-2">{msg.role === 'user' ? '>' : '$'}</span>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="text-accent animate-pulse">_ DIGITANDO...</div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-surface">
              <div className="flex items-center gap-2">
                <span className="text-accent mono shrink-0">{'>'}</span>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite um comando..."
                  className="bg-transparent border-none shadow-none outline-none focus-visible:ring-0 focus-visible:border-none font-mono text-xs text-accent placeholder:text-muted/50 px-0 h-auto py-1"
                />
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={handleSend}
                  className="shrink-0 text-accent hover:text-white hover:bg-transparent"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-lg bg-surface border border-border shadow-2xl flex items-center justify-center text-accent hover:border-accent hover:scale-105 active:scale-95 transition-all group"
      >
        <Terminal size={24} className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

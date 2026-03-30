'use client';

import { motion } from 'motion/react';
import { ChevronRight, Code2, Cpu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-void pt-20 overflow-hidden grid-pattern">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="status-dot" />
              <span className="mono text-accent">Disponível para novos projetos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1]"
            >
              Eu construo produtos digitais de{' '}
              <span className="text-accent">alta performance</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              Desenvolvedor Fullstack especialista em arquiteturas web escaláveis,
              interfaces focadas em conversão e soluções digitais sob medida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="btn-tech-solid rounded-none h-auto">
                <a href="#contato">
                  ME_CONTRATE <ChevronRight size={18} />
                </a>
              </Button>
              <Button asChild className="btn-tech rounded-none h-auto">
                <a href="#portfolio">VER_PROJETOS</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-16 flex items-center gap-8 border-t border-border pt-8"
            >
              <div className="flex items-center gap-2">
                <Code2 size={20} className="text-accent" />
                <span className="mono text-[10px]">React / Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={20} className="text-accent" />
                <span className="mono text-[10px]">Cloud Native</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-accent" />
                <span className="mono text-[10px]">Escala Global</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="terminal-window">
              <div className="bg-border/50 px-4 py-2 flex items-center gap-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="mono text-[9px] ml-4 opacity-50">carlos-resende — bash</span>
              </div>
              <div className="p-8 font-mono text-sm space-y-4">
                <div className="flex gap-4">
                  <span className="text-accent">➜</span>
                  <span className="text-text">whoami</span>
                </div>
                <div className="text-muted">
                  Carlos Resende. Desenvolvedor Fullstack. <br />
                  Especialista em construir ativos digitais que vendem.
                </div>
                <div className="flex gap-4">
                  <span className="text-accent">➜</span>
                  <span className="text-text">ls skills/</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-accent/80">
                  <span>[react.js]</span>
                  <span>[next.js]</span>
                  <span>[node.js]</span>
                  <span>[typescript]</span>
                  <span>[postgresql]</span>
                  <span>[docker]</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-accent">➜</span>
                  <span className="text-text">cat missao.txt</span>
                </div>
                <div className="text-muted italic">
                  Meu objetivo é unir tecnologia complexa com resultados de negócio reais.
                </div>
                <div className="flex gap-4">
                  <span className="text-accent animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent/5 to-transparent pointer-events-none" />
    </section>
  );
};

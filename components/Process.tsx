'use client'

import { motion } from 'motion/react'
import { Search, Palette, Code2, Rocket } from 'lucide-react'

interface Step {
  number: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
  glow: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: <Search size={28} />,
    title: 'Pesquisa',
    description: 'Analiso seu negócio, concorrentes e público-alvo para identificar necessidades reais e traçar a estratégia ideal.',
    color: 'text-primary border-primary/30 bg-primary/10',
    glow: 'shadow-primary/20',
  },
  {
    number: '02',
    icon: <Palette size={28} />,
    title: 'Design',
    description: 'Crio wireframes e protótipos com foco em clareza, usabilidade e identidade visual alinhada à sua marca.',
    color: 'text-secondary border-secondary/30 bg-secondary/10',
    glow: 'shadow-secondary/20',
  },
  {
    number: '03',
    icon: <Code2 size={28} />,
    title: 'Desenvolvimento',
    description: 'Transformo o design em interfaces reais com código limpo, performático e escalável usando as melhores tecnologias.',
    color: 'text-tertiary border-tertiary/30 bg-tertiary/10',
    glow: 'shadow-tertiary/20',
  },
  {
    number: '04',
    icon: <Rocket size={28} />,
    title: 'Entrega',
    description: 'Entrego o projeto finalizado com documentação, suporte pós-lançamento e garantia de qualidade.',
    color: 'text-primary border-primary/30 bg-primary/10',
    glow: 'shadow-primary/20',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Linha conectora decorativa (desktop) */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent hidden lg:block -translate-y-8" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 w-fit">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider">Como Trabalho</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Meu processo de <span className="text-tertiary">trabalho</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Um fluxo estruturado que garante qualidade, alinhamento e resultados consistentes em cada projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="group relative flex flex-col gap-5 p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Número grande decorativo de fundo */}
              <span className="absolute top-4 right-6 text-6xl font-bold text-border/50 font-mono select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/10">
                {step.number}
              </span>

              {/* Ícone */}
              <div className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center border shadow-lg ${step.color} ${step.glow}`}>
                {step.icon}
              </div>

              <div className="relative z-10">
                <p className="text-xs font-mono text-muted-foreground mb-1">ETAPA {step.number}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

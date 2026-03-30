'use client'

import { motion } from 'motion/react'
import { Layout, Server, Smartphone, Search, Code, Cpu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  desc: string
  colorClass: string
  glowClass: string
}

const services: Service[] = [
  {
    icon: Layout,
    title: 'Desenvolvimento Front-end',
    desc: 'Interfaces modernas, rápidas e responsivas utilizando React e Next.js com foco em UX.',
    colorClass: 'bg-primary/10 text-primary border-primary/20',
    glowClass: 'group-hover:shadow-primary/20',
  },
  {
    icon: Server,
    title: 'Desenvolvimento Back-end',
    desc: 'APIs robustas, seguras e escaláveis com Node.js, Express e bancos de dados modernos.',
    colorClass: 'bg-secondary/10 text-secondary border-secondary/20',
    glowClass: 'group-hover:shadow-secondary/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Garantindo que sua aplicação funcione perfeitamente em qualquer dispositivo e resolução.',
    colorClass: 'bg-tertiary/10 text-tertiary border-tertiary/20',
    glowClass: 'group-hover:shadow-tertiary/20',
  },
  {
    icon: Search,
    title: 'Otimização de SEO',
    desc: 'Melhorando a visibilidade nos buscadores com boas práticas de SEO técnico e de conteúdo.',
    colorClass: 'bg-primary/10 text-primary border-primary/20',
    glowClass: 'group-hover:shadow-primary/20',
  },
  {
    icon: Code,
    title: 'Arquitetura de Software',
    desc: 'Planejamento e estruturação de sistemas complexos, escaláveis e fáceis de manter.',
    colorClass: 'bg-secondary/10 text-secondary border-secondary/20',
    glowClass: 'group-hover:shadow-secondary/20',
  },
  {
    icon: Cpu,
    title: 'Integrações & IA',
    desc: 'Conectando sua aplicação a serviços externos, APIs de pagamento e automações com IA (n8n, Gemini).',
    colorClass: 'bg-tertiary/10 text-tertiary border-tertiary/20',
    glowClass: 'group-hover:shadow-tertiary/20',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Como eu posso <span className="text-primary">ajudar</span> você.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Ofereço soluções completas de desenvolvimento web, desde a concepção até o deploy final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-xl ${service.glowClass}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${service.colorClass} ${service.glowClass}`}>
                <service.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

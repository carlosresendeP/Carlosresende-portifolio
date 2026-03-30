'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, Filter } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: 'frontend' | 'fullstack'
  deploy: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: 40,
    title: 'Barber Shop',
    description: 'Landing page moderna para barbearia premium com design responsivo e mobile-first.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'fullstack',
    deploy: 'https://barber-shop-flame-seven.vercel.app/',
    githubUrl: 'https://github.com/carlosresendeP/BarberShop',
  },
  {
    id: 39,
    title: 'Vaga Certa',
    description: 'Plataforma de otimização de currículos com IA (Gemini) para destacar candidatos.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'IA'],
    category: 'fullstack',
    deploy: 'https://vaga-certa-ten.vercel.app/',
    githubUrl: 'https://github.com/carlosresendeP/vaga-certa',
  },
  {
    id: 38,
    title: 'DevBills — Finanças',
    description: 'Aplicação completa de gestão financeira com API robusta e interface moderna.',
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    category: 'fullstack',
    deploy: 'https://devbills-financas.vercel.app/',
    githubUrl: 'https://github.com/carlosresendeP/DevBills',
  },
  {
    id: 37,
    title: 'Aparatus — SaaS Barbearias',
    description: 'SaaS de agendamento para barbearias com controle de horários, filas e pagamentos.',
    tags: ['Next.js', 'Supabase', 'IA', 'SaaS'],
    category: 'fullstack',
    deploy: 'https://aparatus-nu.vercel.app',
    githubUrl: 'https://github.com/carlosresendeP/aparatus',
  },
  {
    id: 34,
    title: 'Net Gestão',
    description: 'Plataforma para gestão de grupos de networking com sistema de convites e indicações.',
    tags: ['Next.js', 'MongoDB', 'TypeScript'],
    category: 'fullstack',
    deploy: 'https://net-gestao.vercel.app/',
    githubUrl: 'https://github.com/carlosresendeP/net-gestao',
  },
  {
    id: 31,
    title: 'Performance Master',
    description: 'Landing page para academia integrada com chatbot inteligente via n8n.',
    tags: ['React', 'Styled Components', 'n8n'],
    category: 'frontend',
    deploy: 'https://performace-master-academia.vercel.app/',
    githubUrl: 'https://github.com/carlosresendeP/performace-master-academia',
  },
]

type FilterValue = 'all' | 'frontend' | 'fullstack'

const filterOptions: { label: string; value: FilterValue }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
]

const tagVariantMap: Record<string, string> = {
  'Next.js': 'bg-foreground/10 text-foreground',
  TypeScript: 'bg-primary/10 text-primary',
  React: 'bg-secondary/10 text-secondary',
  MongoDB: 'bg-green-500/10 text-green-400',
  Supabase: 'bg-emerald-500/10 text-emerald-400',
  IA: 'bg-purple-500/10 text-purple-400',
  SaaS: 'bg-yellow-500/10 text-yellow-400',
  'Node.js': 'bg-green-600/10 text-green-500',
  Tailwind: 'bg-sky-500/10 text-sky-400',
  n8n: 'bg-orange-500/10 text-orange-400',
  'Styled Components': 'bg-tertiary/10 text-tertiary',
}

function getTagClass(tag: string): string {
  return tagVariantMap[tag] ?? 'bg-muted text-muted-foreground'
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <Badge variant="outline" className="border-primary/30 text-primary font-mono text-xs px-3">
            Portfólio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Projetos que <span className="text-primary">entregam</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Soluções reais desenvolvidas para clientes e projetos pessoais.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <Filter size={14} className="text-muted-foreground" />
          {filterOptions.map((opt) => (
            <Button
              key={opt.value}
              size="sm"
              variant={activeFilter === opt.value ? 'default' : 'outline'}
              onClick={() => setActiveFilter(opt.value)}
              className={`rounded-full text-xs transition-all ${
                activeFilter === opt.value
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : ''
              }`}
            >
              {opt.label}
            </Button>
          ))}
        </div>

        {/* Grid de projetos usando Card shadcn */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <Card className="h-full group hover:ring-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 border-border">
                  {/* Imagem/Header visual */}
                  <div className="relative h-40 overflow-hidden rounded-t-xl bg-linear-to-br from-card to-muted">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/10 to-tertiary/20 group-hover:opacity-80 transition-opacity" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                      <div className="text-3xl font-bold text-foreground/20 font-mono tracking-tighter">
                        {`{${String(project.id)}}`}
                      </div>
                      <span className="text-xs text-muted-foreground font-mono mt-1">
                        {project.category}
                      </span>
                    </div>
                    {/* Overlay com links no hover */}
                    <div className="absolute inset-0 bg-background/85 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-white rounded-xl gap-1.5">
                        <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={13} />
                          Ver Live
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="rounded-xl gap-1.5">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <FaGithub size={13} />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium ${getTagClass(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <Separator />

                  <CardFooter className="pt-4 gap-2">
                    <Button size="sm" variant="ghost" asChild className="flex-1 gap-1.5 text-xs">
                      <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={12} />
                        Deploy
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild className="flex-1 gap-1.5 text-xs">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={12} />
                        Código
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="rounded-full gap-2">
            <a href="https://github.com/carlosresendeP" target="_blank" rel="noopener noreferrer">
              <FaGithub size={16} />
              Ver todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

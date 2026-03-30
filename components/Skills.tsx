'use client'

import { motion } from 'motion/react'
import {
  FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase, FaHtml5, FaCss3Alt,
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiPostgresql, SiPrisma, SiN8N, SiDocker,
} from 'react-icons/si'
import { TbBrandVite } from 'react-icons/tb'

interface Skill {
  name: string
  icon: React.ReactNode
  level: 'Básico' | 'Intermediário' | 'Avançado'
  pct: number
}

interface SkillCategory {
  title: string
  color: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'from-primary to-primary/60',
    skills: [
      { name: 'React', icon: <FaReact />, level: 'Avançado', pct: 90 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 'Avançado', pct: 85 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediário', pct: 70 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Avançado', pct: 90 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 'Avançado', pct: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 'Avançado', pct: 90 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-secondary to-secondary/60',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediário', pct: 70 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 'Intermediário', pct: 65 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Básico', pct: 45 },
      { name: 'Prisma', icon: <SiPrisma />, level: 'Intermediário', pct: 60 },
      { name: 'Docker', icon: <SiDocker />, level: 'Básico', pct: 35 },
    ],
  },
  {
    title: 'Design & Tools',
    color: 'from-tertiary to-tertiary/60',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 'Intermediário', pct: 75 },
      { name: 'Figma', icon: <FaFigma />, level: 'Básico', pct: 40 },
      { name: 'Vite', icon: <TbBrandVite />, level: 'Avançado', pct: 85 },
      { name: 'n8n / IA', icon: <SiN8N />, level: 'Básico', pct: 40 },
      { name: 'SQL', icon: <FaDatabase />, level: 'Intermediário', pct: 60 },
    ],
  },
]

const levelColor: Record<Skill['level'], string> = {
  Avançado: 'text-primary border-primary/30 bg-primary/10',
  Intermediário: 'text-secondary border-secondary/30 bg-secondary/10',
  Básico: 'text-muted-foreground border-border bg-muted/30',
}

function SkillBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-linear-to-r ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 w-fit">
            <span className="text-xs font-mono text-secondary uppercase tracking-wider">Stack Técnico</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Tecnologias que <span className="text-secondary">domino</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Ferramentas e linguagens que uso no dia a dia para construir produtos completos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-1 w-8 rounded-full bg-linear-to-r ${cat.color}`} />
                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-foreground text-sm font-medium">
                        <span className="text-base opacity-70">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${levelColor[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                    <SkillBar pct={skill.pct} color={cat.color} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

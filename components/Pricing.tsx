'use client'

import { motion } from 'motion/react'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

interface Plan {
  name: string
  price: string
  desc: string
  features: string[]
  color: string
  btnColor: string
  popular?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Landing Page',
    price: 'R$ 1.500',
    desc: 'Perfeito para profissionais liberais e pequenas empresas que precisam de presença digital.',
    features: [
      'Design Exclusivo',
      'Otimização de SEO',
      'Responsivo para Mobile',
      'Integração com WhatsApp',
      'Hospedagem Grátis (1 ano)',
    ],
    color: 'border-primary/20 hover:border-primary/50',
    btnColor: 'bg-primary hover:bg-primary/90 shadow-primary/20',
  },
  {
    name: 'Business Pro',
    price: 'R$ 3.500',
    desc: 'Ideal para empresas que buscam uma presença digital robusta com funcionalidades avançadas.',
    features: [
      'Tudo do plano anterior',
      'Blog Integrado',
      'Painel Administrativo',
      'Integração com CRM',
      'Suporte Prioritário',
    ],
    color: 'border-secondary/40 hover:border-secondary/70',
    btnColor: 'bg-secondary hover:bg-secondary/90 shadow-secondary/20',
    popular: true,
    badge: 'Mais Popular',
  },
  {
    name: 'SaaS Customizado',
    price: 'Sob Consulta',
    desc: 'Soluções complexas e personalizadas para o seu negócio, com infraestrutura completa.',
    features: [
      'Arquitetura Escalável',
      'Autenticação de Usuários',
      'Pagamentos Recorrentes',
      'Infraestrutura na Nuvem',
      'Consultoria Técnica',
    ],
    color: 'border-tertiary/20 hover:border-tertiary/50',
    btnColor: 'bg-tertiary hover:bg-tertiary/90 shadow-tertiary/20',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 w-fit">
            <span className="text-xs font-mono text-tertiary uppercase tracking-wider">Preços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Investimento para o seu <span className="text-tertiary">sucesso</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Valores transparentes e planos adaptados à sua necessidade. <strong className="text-foreground">Orçamento gratuito.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col p-8 rounded-3xl bg-card border transition-all duration-300 ${plan.color} ${
                plan.popular ? 'scale-105 shadow-2xl shadow-secondary/10' : ''
              }`}
            >
              {/* Badge popular */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-secondary/30">
                  <Sparkles size={12} />
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== 'Sob Consulta' && (
                  <span className="text-muted-foreground text-sm ml-2">/ projeto</span>
                )}
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center border border-border flex-shrink-0">
                      <Check size={11} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 rounded-xl text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${plan.btnColor}`}
              >
                Escolher Plano
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Não encontrou o que procura?{' '}
          <a href="#contact" className="text-primary hover:underline font-medium">
            Fale comigo
          </a>{' '}
          e criamos um plano personalizado.
        </p>
      </div>
    </section>
  )
}

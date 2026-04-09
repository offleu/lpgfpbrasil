import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2d5016] rounded" />
            <span className="text-xl font-semibold tracking-tight">GFP GoldForest</span>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#sobre" className="text-sm hover:text-[#2d5016] transition-colors">Sobre</a>
            <a href="#atuacao" className="text-sm hover:text-[#2d5016] transition-colors">Atuação</a>
            <a href="#diferenciais" className="text-sm hover:text-[#2d5016] transition-colors">Diferenciais</a>
            <a href="#contato" className="px-6 py-2.5 bg-[#2d5016] text-white rounded-sm hover:bg-[#3d6622] transition-colors">
              Fale com a GFP
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4"
          >
            <a href="#sobre" className="text-sm hover:text-[#2d5016] transition-colors" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#atuacao" className="text-sm hover:text-[#2d5016] transition-colors" onClick={() => setMobileMenuOpen(false)}>Atuação</a>
            <a href="#diferenciais" className="text-sm hover:text-[#2d5016] transition-colors" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
            <a href="#contato" className="px-6 py-2.5 bg-[#2d5016] text-white rounded-sm hover:bg-[#3d6622] transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
              Fale com a GFP
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1530888700212-757c0e2f13d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwaW5lJTIwdHJlZXMlMjBhZXJpYWwlMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NzU3NDI0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Forest aerial view"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-white/90 text-sm tracking-[0.2em] uppercase mb-6">Connecting markets. Delivering value.</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Excelência Global em Papel, Celulose e Fibras de Madeira
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Conectando o mercado brasileiro aos mais seletos produtores internacionais, com inteligência comercial, solidez e precisão.
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 bg-[#2d5016] text-white rounded-sm hover:bg-[#3d6622] transition-all hover:scale-105"
            >
              Fale com a GFP
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="sobre" title="Uma atuação pautada por excelência">
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
          A GFP GoldForest Negócios e Representações Ltda atua no desenvolvimento e na gestão de negócios no setor de papel, papel cartão, celulose e aparas, com uma abordagem orientada à qualidade, consistência e visão de longo prazo.
        </p>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mt-6">
          Com mais de 15 anos de atuação, a empresa consolidou uma presença relevante ao conectar o mercado brasileiro aos principais produtores globais, operando com discrição, confiabilidade e elevado padrão profissional.
        </p>
      </Section>

      {/* Essence Section with Image */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experiência que sustenta confiança</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A GFP foi estruturada sobre uma base de mais de três décadas de experiência no setor de papel e celulose, incluindo atuação junto a organizações de referência global.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esse histórico proporciona uma compreensão aprofundada das dinâmicas internacionais do setor, permitindo conduzir operações com precisão, segurança e elevado nível de governança.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1758304481023-82acd8a35287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwYXBlciUyMG1pbGwlMjBpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGFlcmlhbHxlbnwxfHx8fDE3NzU3NDI0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial complex aerial view"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="atuacao" title="Uma atuação abrangente e estratégica" dark>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-12">
          A GFP opera de forma integrada ao longo de toda a cadeia de valor, oferecendo soluções completas e personalizadas:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          <ServiceCard
            title="Comercialização"
            description="Papel, papel cartão, celulose e aparas"
          />
          <ServiceCard
            title="Representação"
            description="Produtores internacionais de alto padrão"
          />
          <ServiceCard
            title="Estruturação Global"
            description="Intermediação de operações internacionais"
          />
          <ServiceCard
            title="Relações Comerciais"
            description="Desenvolvimento de parcerias de longo prazo"
          />
          <ServiceCard
            title="Logística Internacional"
            description="Soluções para transporte marítimo"
          />
          <ServiceCard
            title="Soluções Financeiras"
            description="Estruturação de financiamento"
          />
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section title="Amplitude com curadoria">
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-8">
          A GFP detém o mais amplo portfólio de produtos disponíveis para importação direta no mercado brasileiro, resultado de uma curadoria criteriosa e de relações consolidadas com produtores internacionais.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mt-12">
          <FeatureBox title="Diversidade qualificada" />
          <FeatureBox title="Condições diferenciadas" />
          <FeatureBox title="Acesso direto às origens" />
          <FeatureBox title="Confiabilidade no fornecimento" />
        </div>
      </Section>

      {/* Sourcing Section with Image */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1759272548457-12b8580bfca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXIlMjBwb3J0JTIwbG9naXN0aWNzfGVufDF8fHx8MTc3NTc0MjQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cargo ship at port"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Inteligência na conexão de mercados</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A GFP atua como uma plataforma estratégica de sourcing internacional, estruturando operações de exportação de materiais celulósicos produzidos no Brasil para diversos continentes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Por meio de uma abordagem analítica e relacional, promove a integração eficiente entre oferta e demanda global, assegurando fluidez, segurança e consistência nas transações.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="border-l-4 border-[#2d5016] pl-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Estrutura financeira como diferencial</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Por meio de cooperação internacional com empresas coligadas, a GFP oferece soluções estruturadas de financiamento para operações de importação direta.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Eficiência na alocação de capital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Viabilização de operações de maior escala</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Otimização do fluxo financeiro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Maior competitividade para clientes</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-l-4 border-[#2d5016] pl-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Eficiência logística com alcance global</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A GFP oferece soluções logísticas completas para transporte marítimo internacional, assegurando eficiência, previsibilidade e controle em todas as etapas da operação.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Otimização de custos de transporte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Confiabilidade nos prazos de entrega</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Gestão eficiente de embarques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5016] mt-2 flex-shrink-0" />
                    <span>Integração entre origem e destino</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <Section title="Relações que refletem credibilidade" dark>
        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">
          A GFP mantém relações institucionais com empresas reconhecidas globalmente por sua excelência operacional e qualidade de produtos. Essas conexões reforçam seu posicionamento como um elo confiável entre mercados exigentes e altamente competitivos.
        </p>
      </Section>

      {/* Differentials */}
      <Section id="diferenciais" title="Diferenciais que definem padrão">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          <DifferentialCard text="Portfólio mais amplo para importação direta no Brasil" />
          <DifferentialCard text="Atuação global estruturada" />
          <DifferentialCard text="Soluções completas: comercial, financeira e logística" />
          <DifferentialCard text="Relacionamento com produtores de referência internacional" />
          <DifferentialCard text="Capacidade de estruturação financeira" />
          <DifferentialCard text="Experiência consolidada e visão estratégica" />
          <DifferentialCard text="Discrição, confiabilidade e precisão operacional" />
        </div>
      </Section>

      {/* Final CTA */}
      <section id="contato" className="py-32 lg:py-40 bg-[#2d5016] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1592912856915-bad0031bd105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmb3Jlc3QlMjBwaW5lJTIwdHJlZXMlMjBhZXJpYWwlMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NzU3NDI0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Forest"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Relações que constroem valor</h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              A GFP atua com foco na construção de relações comerciais sólidas e duradouras, conectando empresas a oportunidades consistentes no mercado global de papel e celulose.
            </p>
            <a
              href="mailto:contato@gfpgoldforest.com"
              className="inline-block px-10 py-4 bg-white text-[#2d5016] rounded-sm hover:bg-white/90 transition-all hover:scale-105 font-semibold"
            >
              Entre em contato
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2d5016] rounded" />
              <span className="text-xl font-semibold tracking-tight">GFP GoldForest</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 GFP GoldForest Negócios e Representações Ltda. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Section Component
function Section({
  children,
  title,
  id,
  dark = false
}: {
  children: React.ReactNode;
  title: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section id={id} className={`py-24 lg:py-32 ${dark ? 'bg-muted/30' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 max-w-4xl">{title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}

// Scroll Reveal Component
function ScrollReveal({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Service Card Component
function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="border-l-2 border-[#2d5016] pl-6 py-4"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

// Feature Box Component
function FeatureBox({ title }: { title: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 border border-border rounded-sm hover:border-[#2d5016] transition-colors"
    >
      <p className="font-medium">{title}</p>
    </motion.div>
  );
}

// Differential Card Component
function DifferentialCard({ text }: { text: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-start gap-4 group"
    >
      <div className="w-2 h-2 rounded-full bg-[#2d5016] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
      <p className="text-lg">{text}</p>
    </motion.div>
  );
}
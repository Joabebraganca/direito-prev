import { createFileRoute, Link } from "@tanstack/react-router";
import heroOffice from "@/assets/hero-office.jpg";
import direitoPrev from "@/assets/direitoprev.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const areas = [
  {
    n: "01",
    title: "Direito Previdenciário",
    desc: "Aposentadorias, revisões, benefícios por incapacidade e planejamento previdenciário.",
    to: "/direito-prev" as const,
  },
  {
    n: "02",
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, família e sucessões com atuação estratégica.",
    to: "/areas" as const,
  },
  {
    n: "03",
    title: "Direito Administrativo",
    desc: "Concursos, licitações e defesa em processos administrativos disciplinares.",
    to: "/areas" as const,
  },
  {
    n: "04",
    title: "Consultoria Jurídica",
    desc: "Análise preventiva e pareceres para pessoas físicas, servidores e empresas.",
    to: "/areas" as const,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroOffice}
          alt="Biblioteca jurídica com iluminação dourada"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        <div className="container-prose relative grid gap-12 py-28 md:grid-cols-12 md:py-40">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Advocacia em Brasília — Desde a fundação
            </div>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-balance text-cream md:text-7xl">
              A tradição do <em className="text-gold not-italic">Direito</em>
              <br />
              a serviço do que <span className="italic text-gold">é seu</span>.
            </h1>
            <p className="mt-8 max-w-xl text-base text-cream/80 md:text-lg">
              O escritório Mota Farias Advocacia atua com rigor técnico e escuta atenta,
              guiando clientes por decisões jurídicas que exigem confiança, discrição e
              autoridade — com destaque para o vertical{" "}
              <span className="text-gold">Direito Prev</span>, dedicado ao direito
              previdenciário.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center border border-gold bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-emerald-deep transition-transform hover:-translate-y-0.5"
              >
                Agendar consultoria
              </Link>
              <Link
                to="/direito-prev"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cream/90 hover:text-gold"
              >
                Conheça o Direito Prev
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <aside className="hidden md:col-span-4 md:block">
            <div className="border-l border-gold/40 pl-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Arquitetura de marca
              </div>
              <div className="mt-4 space-y-4 text-sm text-cream/75">
                <div>
                  <div className="font-serif text-2xl text-cream">Mota Farias</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
                    Advocacia — marca principal
                  </div>
                </div>
                <div className="h-px w-8 bg-gold/60" />
                <div>
                  <div className="font-serif text-2xl text-gold">Direito Prev</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
                    Vertical previdenciário
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-prose grid gap-10 py-16 md:grid-cols-3">
          {[
            ["Ética", "Cada tese defendida passa pelo crivo da responsabilidade profissional."],
            ["Técnica", "Fundamentação criteriosa, jurisprudência atualizada e atenção ao detalhe."],
            ["Presença", "Atendimento próximo, com clareza em cada etapa do processo."],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Princípio</div>
              <h3 className="mt-2 font-serif text-3xl text-primary">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS */}
      <section className="py-24">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
                Áreas de atuação
              </div>
              <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
                Domínios que <em className="text-emerald">exigem profundidade</em>.
              </h2>
            </div>
            <Link
              to="/areas"
              className="text-xs uppercase tracking-[0.24em] text-primary hover:text-gold"
            >
              Ver todas as áreas →
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {areas.map((a) => (
              <Link
                key={a.n}
                to={a.to}
                className="group block bg-background p-10 transition-colors hover:bg-card"
              >
                <div className="flex items-baseline gap-4 text-gold">
                  <span className="font-serif text-2xl">{a.n}</span>
                  <span className="h-px flex-1 bg-gold/40" />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-primary">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
                <div className="mt-8 text-[10px] uppercase tracking-[0.24em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Ler mais →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIREITO PREV — vertical */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose grid gap-12 py-24 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <img
              src={direitoPrev}
              alt="Documentos previdenciários sobre mesa de madeira"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full border border-gold/20 object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
              Vertical especializado
            </div>
            <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
              <span className="text-gold">Direito Prev</span>
              <br />
              o cuidado que sua aposentadoria merece.
            </h2>
            <p className="mt-6 max-w-lg text-cream/80">
              Um núcleo dedicado do Mota Farias Advocacia, criado para tratar do direito
              previdenciário com a atenção que ele exige — do primeiro requerimento à revisão
              de benefícios já concedidos.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/85">
              {[
                "Aposentadorias por tempo, idade e regras de transição",
                "Benefícios por incapacidade e BPC/LOAS",
                "Revisão da vida toda e revisões de RMI",
                "Planejamento previdenciário estratégico",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-px w-4 flex-none bg-gold" />
                  {i}
                </li>
              ))}
            </ul>
            <Link
              to="/direito-prev"
              className="mt-10 inline-flex items-center border border-gold bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-emerald-deep hover:-translate-y-0.5 transition-transform"
            >
              Explorar Direito Prev
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-prose">
          <div className="grid gap-10 border border-border bg-card p-10 md:grid-cols-12 md:items-center md:p-16">
            <div className="md:col-span-8">
              <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
                Consultoria inicial
              </div>
              <h2 className="mt-3 font-serif text-4xl text-primary text-balance">
                Cada caso começa com uma escuta atenta.
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Agende uma conversa reservada com nossa equipe. Avaliamos seu cenário com
                discrição e apresentamos as melhores estratégias jurídicas.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link
                to="/contato"
                className="inline-flex items-center border border-primary bg-primary px-7 py-4 text-xs uppercase tracking-[0.24em] text-primary-foreground hover:bg-emerald"
              >
                Falar com o escritório
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

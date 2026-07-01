import { createFileRoute, Link } from "@tanstack/react-router";
import direitoPrev from "@/assets/direitoprev.jpg";

export const Route = createFileRoute("/direito-prev")({
  head: () => ({
    meta: [
      { title: "Direito Prev — Vertical Previdenciário | Mota Farias Advocacia" },
      {
        name: "description",
        content:
          "Direito Prev é o vertical do escritório Mota Farias dedicado ao Direito Previdenciário: aposentadorias, revisões, benefícios por incapacidade e planejamento.",
      },
      { property: "og:title", content: "Direito Prev — Vertical Previdenciário" },
      {
        property: "og:description",
        content:
          "Um núcleo especializado do Mota Farias Advocacia dedicado ao direito previdenciário, com escuta atenta e estratégia técnica.",
      },
      { property: "og:image", content: "https://cdn.motafarias.adv.br/og/direito-prev.jpg" },
    ],
  }),
  component: DireitoPrev,
});

const services = [
  {
    title: "Aposentadorias",
    desc: "Por tempo de contribuição, idade, especial, professor e regras de transição.",
  },
  {
    title: "Revisões",
    desc: "Revisão da vida toda, revisão de RMI e correção de benefícios já concedidos.",
  },
  {
    title: "Benefícios por incapacidade",
    desc: "Auxílio-doença, aposentadoria por invalidez, auxílio-acidente e perícias.",
  },
  {
    title: "BPC / LOAS",
    desc: "Benefício assistencial ao idoso e à pessoa com deficiência.",
  },
  {
    title: "Pensão por morte",
    desc: "Concessão, revisão e habilitação de dependentes com estratégia probatória.",
  },
  {
    title: "Planejamento previdenciário",
    desc: "Análise CNIS, projeções e escolha da melhor regra para se aposentar.",
  },
];

const steps = [
  ["01", "Escuta", "Reunião reservada para entender sua história contributiva e objetivos."],
  ["02", "Diagnóstico", "Análise do CNIS, documentos e simulação de cenários."],
  ["03", "Estratégia", "Definição da tese, do momento e do caminho — administrativo ou judicial."],
  ["04", "Acompanhamento", "Você recebe atualizações claras em cada etapa do processo."],
];

function DireitoPrev() {
  return (
    <>
      {/* Hero submarca */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container-prose relative grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-cream/70">
              <span className="h-px w-8 bg-gold" />
              Um vertical Mota Farias Advocacia
            </div>
            <h1 className="mt-8 font-serif text-6xl leading-[1.02] text-gold md:text-8xl">
              Direito <em className="not-italic">Prev</em>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-2xl italic text-cream/90">
              O cuidado que sua aposentadoria merece.
            </p>
            <p className="mt-6 max-w-xl text-cream/75">
              Núcleo especializado em Direito Previdenciário. Combinamos rigor técnico, análise
              detalhada do CNIS e escuta atenta para transformar o seu direito em benefício
              efetivo — no melhor momento e na melhor regra.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center border border-gold bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-emerald-deep hover:-translate-y-0.5 transition-transform"
              >
                Planejar minha aposentadoria
              </Link>
              <a
                href="#servicos"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cream/90 hover:text-gold"
              >
                Ver serviços <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <img
              src={direitoPrev}
              alt="Documentos previdenciários"
              width={1280}
              height={960}
              className="w-full border border-gold/20 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24">
        <div className="container-prose">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
              O que fazemos
            </div>
            <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
              Frentes de atuação previdenciária.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="bg-background p-8">
                <div className="h-px w-8 bg-gold" />
                <h3 className="mt-5 font-serif text-2xl text-primary">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="border-y border-border bg-secondary/40 py-24">
        <div className="container-prose">
          <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
            Como trabalhamos
          </div>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl text-primary md:text-5xl">
            Um método claro, do primeiro contato ao benefício.
          </h2>

          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map(([n, t, d]) => (
              <li key={n}>
                <div className="font-serif text-4xl text-gold">{n}</div>
                <div className="mt-4 h-px w-8 bg-primary/40" />
                <h3 className="mt-4 font-serif text-2xl text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-prose">
          <div className="border border-gold/40 bg-primary p-10 text-primary-foreground md:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
                  Análise previdenciária
                </div>
                <h2 className="mt-3 font-serif text-4xl text-cream text-balance">
                  Descubra qual a melhor regra para você se aposentar.
                </h2>
                <p className="mt-3 max-w-xl text-cream/75">
                  Envie seus dados e faremos uma análise inicial confidencial do seu CNIS.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <Link
                  to="/contato"
                  className="inline-flex items-center border border-gold bg-gold px-7 py-4 text-xs uppercase tracking-[0.24em] text-emerald-deep"
                >
                  Solicitar análise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

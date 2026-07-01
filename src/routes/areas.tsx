import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação — Mota Farias Advocacia" },
      {
        name: "description",
        content:
          "Direito Previdenciário, Civil, Administrativo, Família e Consultoria Jurídica em Brasília com o escritório Mota Farias Advocacia.",
      },
      { property: "og:title", content: "Áreas de Atuação — Mota Farias Advocacia" },
      {
        property: "og:description",
        content:
          "Conheça as áreas em que o escritório Mota Farias atua com profundidade técnica e sensibilidade humana.",
      },
    ],
  }),
  component: Areas,
});

const areas = [
  {
    n: "01",
    title: "Direito Previdenciário",
    desc: "Área conduzida pelo vertical Direito Prev, com foco em aposentadorias, revisões, benefícios por incapacidade, BPC/LOAS e planejamento previdenciário.",
    highlights: ["Aposentadorias", "Revisões", "Benefícios por incapacidade", "Planejamento"],
  },
  {
    n: "02",
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, cobranças, indenizações e defesa patrimonial com atuação estratégica em todas as instâncias.",
    highlights: ["Contratos", "Responsabilidade civil", "Indenizações", "Patrimônio"],
  },
  {
    n: "03",
    title: "Direito de Família e Sucessões",
    desc: "Divórcios, alimentos, guarda, inventários, testamentos e planejamento sucessório com discrição e sensibilidade.",
    highlights: ["Divórcio", "Guarda", "Inventário", "Planejamento sucessório"],
  },
  {
    n: "04",
    title: "Direito Administrativo",
    desc: "Servidores públicos, concursos, PADs, licitações e contratos administrativos — do requerimento à judicialização.",
    highlights: ["Servidores", "Concursos", "PAD", "Licitações"],
  },
  {
    n: "05",
    title: "Direito do Trabalho",
    desc: "Assessoria a trabalhadores e empregadores com foco em soluções negociadas e defesa técnica em juízo.",
    highlights: ["Rescisões", "Verbas", "Assédio", "Acordos"],
  },
  {
    n: "06",
    title: "Consultoria Jurídica",
    desc: "Pareceres, análise contratual e prevenção de litígios para pessoas físicas, servidores e empresas.",
    highlights: ["Pareceres", "Compliance", "Contratos", "Prevenção"],
  },
];

function Areas() {
  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-32">
          <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
            Áreas de atuação
          </div>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl text-balance text-cream md:text-6xl">
            Profundidade em <em className="text-gold">cada disciplina</em> do Direito.
          </h1>
          <p className="mt-6 max-w-2xl text-cream/80">
            Nosso escritório atua em áreas selecionadas, com equipe dedicada e verticais
            especializados. A seguir, os campos em que o Mota Farias oferece atuação
            estratégica.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-prose grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {areas.map((a) => (
            <article key={a.n} className="bg-background p-10">
              <div className="flex items-baseline gap-4 text-gold">
                <span className="font-serif text-2xl">{a.n}</span>
                <span className="h-px flex-1 bg-gold/40" />
              </div>
              <h2 className="mt-6 font-serif text-3xl text-primary">{a.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {a.highlights.map((h) => (
                  <li
                    key={h}
                    className="border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary/80"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="container-prose mt-16 flex flex-wrap items-center justify-between gap-6 border border-border bg-card p-10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
              Sua causa não está listada?
            </div>
            <h3 className="mt-2 font-serif text-2xl text-primary">
              Converse com nossa equipe.
            </h3>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.24em] text-primary-foreground hover:bg-emerald"
          >
            Consulta reservada
          </Link>
        </div>
      </section>
    </>
  );
}

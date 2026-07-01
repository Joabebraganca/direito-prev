import { createFileRoute, Link } from "@tanstack/react-router";
import lawyer from "@/assets/lawyer-portrait.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "O Escritório — Mota Farias Advocacia" },
      {
        name: "description",
        content:
          "Conheça o escritório Mota Farias Advocacia: história, princípios e a equipe por trás do vertical Direito Prev.",
      },
      { property: "og:title", content: "O Escritório — Mota Farias Advocacia" },
      {
        property: "og:description",
        content:
          "Um escritório em Brasília fundado sobre ética, técnica e presença — com atuação destacada em Direito Previdenciário.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container-prose grid gap-12 py-24 md:grid-cols-12 md:items-end md:py-32">
          <div className="md:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
              O escritório
            </div>
            <h1 className="mt-6 font-serif text-5xl text-balance text-cream md:text-6xl">
              Uma banca em <em className="text-gold">Brasília</em>,
              <br /> construída sobre a confiança.
            </h1>
          </div>
          <p className="md:col-span-5 text-cream/80">
            Mota Farias Advocacia é um escritório dedicado à prática de um Direito atento à
            realidade de cada cliente. Atuamos com rigor técnico, discrição e disponibilidade
            — princípios que orientam desde o primeiro contato até o desfecho de cada causa.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-prose grid gap-16 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <img
              src={lawyer}
              alt="Alan Mota Farias, advogado"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full border border-border object-cover"
            />
            <div className="mt-6 border-l border-gold/60 pl-4">
              <div className="font-serif text-xl text-primary">Alan Mota Farias</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Advogado — OAB/DF · Sócio-fundador
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.32em] text-gold">Nossa banca</div>
            <h2 className="mt-3 font-serif text-4xl text-primary">
              O Direito como ofício de escuta.
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Nasce em Brasília como um escritório de banca — daqueles em que o cliente
                encontra sempre o mesmo advogado, com atenção real ao seu caso. Combinamos a
                seriedade da tradição jurídica com uma comunicação clara e contemporânea.
              </p>
              <p>
                Nossa presença é dividida entre a marca principal <span className="text-primary font-medium">Mota Farias Advocacia</span>,
                voltada às diversas áreas do Direito, e o vertical{" "}
                <span className="text-primary font-medium">Direito Prev</span>, criado para
                aprofundar a atuação em Direito Previdenciário.
              </p>
              <p>
                Acreditamos que a comunicação também é parte do ofício. Por isso, cuidamos da
                nossa presença digital com a mesma seriedade que dedicamos aos autos.
              </p>
            </div>

            <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
              {[
                ["Ética", "O norte de cada decisão."],
                ["Técnica", "Atualização constante."],
                ["Presença", "Escuta em cada etapa."],
              ].map(([t, d]) => (
                <div key={t}>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                    Princípio
                  </div>
                  <h3 className="mt-2 font-serif text-2xl text-primary">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contato"
              className="mt-12 inline-flex items-center border border-primary bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.24em] text-primary-foreground hover:bg-emerald"
            >
              Marcar reunião
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

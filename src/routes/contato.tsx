import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Mota Farias Advocacia" },
      {
        name: "description",
        content:
          "Fale com o escritório Mota Farias Advocacia em Brasília. Consultoria reservada em Direito Previdenciário, Civil e Administrativo.",
      },
      { property: "og:title", content: "Contato — Mota Farias Advocacia" },
      {
        property: "og:description",
        content: "Agende uma consultoria reservada com o escritório Mota Farias Advocacia.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container-prose py-24 md:py-28">
          <div className="text-[10px] uppercase tracking-[0.32em] text-gold">Contato</div>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl text-balance text-cream md:text-6xl">
            Uma conversa <em className="text-gold">reservada</em> antes de qualquer decisão.
          </h1>
          <p className="mt-6 max-w-2xl text-cream/80">
            Escreva-nos com o resumo do seu caso. Retornamos com uma proposta de reunião —
            presencial em Brasília ou por videochamada.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-prose grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Escritório</div>
            <h2 className="mt-3 font-serif text-3xl text-primary">Brasília — DF</h2>
            <div className="mt-8 space-y-6 text-sm">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  E-mail
                </div>
                <a
                  href="mailto:contato@motafarias.adv.br"
                  className="mt-1 block font-serif text-xl text-primary hover:text-emerald"
                >
                  contato@motafarias.adv.br
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Instagram
                </div>
                <a
                  href="https://instagram.com/motafarias.adv"
                  className="mt-1 block font-serif text-xl text-primary hover:text-emerald"
                >
                  @motafarias.adv
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Site institucional
                </div>
                <a
                  href="http://advogadoinbrasilia.adv.br/"
                  className="mt-1 block font-serif text-xl text-primary hover:text-emerald"
                >
                  advogadoinbrasilia.adv.br
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-6 border border-border bg-card p-8 md:p-10"
            >
              <div className="grid gap-2">
                <label className="text-[10px] uppercase tracking-[0.24em] text-primary">
                  Nome completo
                </label>
                <input
                  required
                  className="border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none focus:border-gold"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-[10px] uppercase tracking-[0.24em] text-primary">
                    E-mail
                  </label>
                  <input
                    required
                    type="email"
                    className="border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none focus:border-gold"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-[10px] uppercase tracking-[0.24em] text-primary">
                    Telefone
                  </label>
                  <input
                    className="border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none focus:border-gold"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-[10px] uppercase tracking-[0.24em] text-primary">
                  Área de interesse
                </label>
                <select className="border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none focus:border-gold">
                  <option>Direito Previdenciário (Direito Prev)</option>
                  <option>Direito Civil</option>
                  <option>Família e Sucessões</option>
                  <option>Direito Administrativo</option>
                  <option>Direito do Trabalho</option>
                  <option>Consultoria</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-[10px] uppercase tracking-[0.24em] text-primary">
                  Resumo do caso
                </label>
                <textarea
                  rows={5}
                  required
                  className="border border-border bg-background p-4 text-base text-foreground outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center border border-primary bg-primary px-7 py-4 text-xs uppercase tracking-[0.24em] text-primary-foreground hover:bg-emerald"
              >
                Enviar mensagem
              </button>

              {sent && (
                <p className="text-sm text-emerald">
                  Recebemos sua mensagem. Em breve entraremos em contato.
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                As informações compartilhadas são tratadas com sigilo profissional, conforme o
                Código de Ética da OAB.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

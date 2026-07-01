import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center border border-gold/60 text-gold font-serif text-xl">
            M
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl tracking-tight text-primary">Mota Farias</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Advocacia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm md:flex">
          {[
            { to: "/", label: "Início" },
            { to: "/areas", label: "Áreas de Atuação" },
            { to: "/direito-prev", label: "Direito Prev" },
            { to: "/sobre", label: "O Escritório" },
            { to: "/contato", label: "Contato" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato"
          className="hidden items-center border border-primary bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-emerald md:inline-flex"
        >
          Consultoria
        </Link>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border border-border md:hidden"
        >
          <span className="sr-only">Abrir menu</span>
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container-prose flex flex-col py-4 text-sm">
            {[
              { to: "/", label: "Início" },
              { to: "/areas", label: "Áreas de Atuação" },
              { to: "/direito-prev", label: "Direito Prev" },
              { to: "/sobre", label: "O Escritório" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-gold/60 text-gold font-serif text-xl">
              M
            </span>
            <div className="leading-tight">
              <div className="font-serif text-2xl">Mota Farias</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-cream/70">
                Advocacia
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm text-cream/75">
            Atuação técnica e humana em Brasília, com dedicação especial ao Direito
            Previdenciário através do vertical <span className="text-gold">Direito Prev</span>.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Escritório</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Brasília — DF</li>
            <li>OAB/DF</li>
            <li>Atendimento presencial e on‑line</li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Contato</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a href="mailto:contato@motafarias.adv.br" className="hover:text-gold">
                contato@motafarias.adv.br
              </a>
            </li>
            <li>
              <a href="https://instagram.com/motafarias.adv" className="hover:text-gold">
                @motafarias.adv
              </a>
            </li>
            <li>
              <a href="http://advogadoinbrasilia.adv.br/" className="hover:text-gold">
                advogadoinbrasilia.adv.br
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-prose flex flex-col gap-2 py-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Mota Farias Advocacia. Todos os direitos reservados.</span>
          <span className="tracking-[0.2em] uppercase text-gold/80">
            Direito Prev — vertical previdenciário
          </span>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Erro 404</div>
        <h1 className="mt-3 font-serif text-5xl text-primary">Página não encontrada</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          O endereço acessado não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-emerald"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-primary">Esta página não carregou</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Ocorreu um erro. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-primary bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-emerald"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-border px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-foreground hover:bg-secondary"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mota Farias Advocacia — Direito Previdenciário e Consultoria Jurídica em Brasília" },
      {
        name: "description",
        content:
          "Escritório Mota Farias Advocacia em Brasília. Atuação estratégica com destaque para o Direito Prev, vertical especializado em direito previdenciário.",
      },
      { name: "author", content: "Mota Farias Advocacia" },
      { property: "og:title", content: "Mota Farias Advocacia — Direito Previdenciário em Brasília" },
      {
        property: "og:description",
        content:
          "Autoridade em Direito Previdenciário e consultoria jurídica. Conheça o Direito Prev, vertical especializado do escritório Mota Farias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Karla:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

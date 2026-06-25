import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Smartphone,
  Zap,
  Shield,
  Wallet,
  RefreshCw,
  Send,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Star,
} from "lucide-react";

import _logoAsset from "../../images/logo.png";
import _promo1 from "../../images/promo-1.jpeg.jpeg";
import _promo2 from "../../images/promo-2.jpeg.jpeg";
import _promo3 from "../../images/promo-3.jpeg.jpeg";
import _promo4 from "../../images/promo-4.jpeg.jpeg";
import _screenHome from "../../images/screen-home.jpg";
import _screenProviders from "../../images/screen-providers.jpg";
import _screenServices from "../../images/screen-services.jpg";

const logoAsset = { url: _logoAsset };
const promo1 = { url: _promo1 };
const promo2 = { url: _promo2 };
const promo3 = { url: _promo3 };
const promo4 = { url: _promo4 };
const screenHome = { url: _screenHome };
const screenProviders = { url: _screenProviders };
const screenServices = { url: _screenServices };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIM Services — All-in-one telecom dashboard" },
      {
        name: "description",
        content:
          "SIM Services unifies Maroc Telecom, Orange and inwi in one beautiful app. Recharge, transfer, register lines and manage every request from a single place.",
      },
      { property: "og:title", content: "SIM Services — All-in-one telecom dashboard" },
      {
        property: "og:description",
        content: "One app for Maroc Telecom, Orange and inwi. Fast, secure, beautiful.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset.url },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <LogoMarquee />
      <Features />
      <Showcase />
      <HowItWorks />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 mx-auto mt-3 flex w-[min(1180px,94%)] items-center justify-between rounded-full border border-border/60 bg-background/70 px-3 py-2 backdrop-blur-xl sm:px-4"
    >
      <a href="#top" className="flex items-center gap-2">
        <img src={logoAsset.url} alt="SIM Services" className="h-9 w-9 rounded-xl" />
        <span className="font-display text-base font-bold tracking-tight sm:text-lg">
          SIM <span className="text-gradient-brand">Services</span>
        </span>
      </a>
      <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
        <a href="#features" className="transition-colors hover:text-foreground">Features</a>
        <a href="#showcase" className="transition-colors hover:text-foreground">App</a>
        <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
      </nav>
      <a
        href="#download"
        className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
      >
        Get the app
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </motion.header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <section id="top" ref={ref} className="relative px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-3xl animate-pulse-glow" />
        <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-brand-orange opacity-30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-magenta" />
            New · v3 dashboard is live
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            One app for every{" "}
            <span className="text-gradient-brand">SIM</span>,
            <br className="hidden sm:block" /> every request.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            SIM Services unifies Maroc Telecom, Orange and inwi inside one beautiful
            workspace. Recharge balance, register a line, port a number, request a
            PIN/PUK — all from a single tap.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Download now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              See it in action
            </a>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { k: "120k+", v: "Requests" },
              { k: "3", v: "Operators" },
              { k: "4.9★", v: "User rating" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-gradient-brand sm:text-3xl">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Phone composition */}
        <motion.div style={{ y, rotate: rot }} className="relative mx-auto w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-8 top-16 hidden w-44 -rotate-6 sm:block"
          >
            <PhoneFrame src={screenProviders.url} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto w-64 animate-float-slow sm:w-72"
          >
            <PhoneFrame src={screenHome.url} highlight />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-6 top-24 hidden w-44 sm:block"
          >
            <PhoneFrame src={screenServices.url} />
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-card px-4 py-2 shadow-soft ring-1 ring-border"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-semibold">Request approved · just now</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, highlight = false }: { src: string; highlight?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.2rem] border border-border/80 bg-card p-1.5 ${
        highlight ? "shadow-phone" : "shadow-soft"
      }`}
    >
      <div className="overflow-hidden rounded-[1.8rem]">
        <img src={src} alt="App screen" className="block h-auto w-full" loading="lazy" />
      </div>
    </div>
  );
}

/* ---------- LOGO MARQUEE ---------- */
function LogoMarquee() {
  const items = [
    { name: "Maroc Telecom", color: "text-red-600" },
    { name: "orange", color: "text-orange-500" },
    { name: "inwi", color: "text-fuchsia-600" },
    { name: "ADSL · Fiber", color: "text-foreground" },
    { name: "PIN / PUK", color: "text-foreground" },
    { name: "Port-out", color: "text-foreground" },
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border/60 bg-card/40 py-6 backdrop-blur">
      <div className="mx-auto max-w-6xl overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
          {row.map((it, i) => (
            <span
              key={i}
              className={`font-display text-2xl font-bold tracking-tight opacity-70 ${it.color}`}
            >
              {it.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES ---------- */
const features = [
  { icon: Smartphone, title: "All operators, one inbox", body: "Maroc Telecom, Orange and inwi requests live side by side — no app switching." },
  { icon: Wallet, title: "Balance you can trust", body: "Add credit, hide your balance and track every dirham spent on requests." },
  { icon: RefreshCw, title: "Port & restore numbers", body: "Move a line between operators or restore a lost number in a couple of taps." },
  { icon: Shield, title: "PIN / PUK on demand", body: "Securely request your codes whenever you need them, with full audit history." },
  { icon: Send, title: "Send a new request", body: "Forfaits, registrations, ADSL/Fiber — a single fluid flow with smart defaults." },
  { icon: Zap, title: "Built for speed", body: "Optimistic UI, offline drafts and instant status — feels native, scales global." },
];

function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Why SIM Services"
          title={<>Everything your line needs, <span className="text-gradient-brand">nothing it doesn't.</span></>}
          sub="Designed for resellers, shops and power users who juggle dozens of SIMs every week."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </motion.div>
  );
}

/* ---------- SHOWCASE (promo images) ---------- */
function Showcase() {
  const items = [
    { src: promo1.url, label: "Service catalog", tone: "from-amber-400 to-orange-500" },
    { src: promo3.url, label: "Pick a provider", tone: "from-orange-500 to-rose-500" },
    { src: promo2.url, label: "Maroc Telecom flows", tone: "from-rose-500 to-fuchsia-500" },
    { src: promo4.url, label: "Always with you", tone: "from-fuchsia-500 to-purple-600" },
  ];
  return (
    <section id="showcase" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Inside the app"
          title={<>A workspace that feels <span className="text-gradient-brand">handcrafted.</span></>}
          sub="Bold colour. Crisp typography. Motion where it matters."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${it.tone} p-1 shadow-soft`}
            >
              <div className="overflow-hidden rounded-[1.4rem] bg-card">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full bg-background/85 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                <span>{it.label}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Pick a provider", d: "Maroc Telecom, Orange or inwi — branded the way you'd expect.", img: screenProviders.url },
    { n: "02", t: "Choose the service", d: "Forfaits, registration, restore, port-out, PIN/PUK, cancel.", img: screenServices.url },
    { n: "03", t: "Track every request", d: "Live status, history and balance — all in one home screen.", img: screenHome.url },
  ];
  return (
    <section id="how" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title={<>Three taps from idea <span className="text-gradient-brand">to done.</span></>}
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-5xl font-extrabold text-gradient-brand">{s.n}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </div>
              <PhoneFrame src={s.img} />
              <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIAL ---------- */
function Testimonial() {
  return (
    <section className="px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 p-8 text-center backdrop-blur sm:p-14"
      >
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        <div className="relative">
          <div className="mx-auto flex w-fit items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug sm:text-3xl">
            "I used to run three operator portals on three browsers. SIM Services
            collapsed all of that into a single, gorgeous dashboard — my shop
            processes <span className="text-gradient-brand">2× more requests a day.</span>"
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-brand" />
            <div className="text-left">
              <div className="text-sm font-bold">Yassine B.</div>
              <div className="text-xs text-muted-foreground">SIM reseller · Casablanca</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="download" className="px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] bg-gradient-brand p-10 text-primary-foreground shadow-glow sm:p-16"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
          <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-80 w-80 rounded-full bg-black blur-3xl" />
        </div>
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Your SIM workflow,<br /> finally beautiful.
            </h2>
            <p className="mt-4 max-w-lg text-base opacity-90 sm:text-lg">
              Install SIM Services today. Free for the first 30 requests — no card,
              no setup, no friction.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-bold text-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                <Smartphone className="h-4 w-4" /> Download for Android
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
              >
                <Globe className="h-4 w-4" /> Open web app
              </a>
            </div>
          </div>
          <motion.img
            initial={{ rotate: 6, y: 20, opacity: 0 }}
            whileInView={{ rotate: 4, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={logoAsset.url}
            alt="SIM Services logo"
            className="mx-auto w-48 drop-shadow-2xl sm:w-60"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={logoAsset.url} alt="" className="h-7 w-7 rounded-lg" />
          <span className="text-sm font-semibold">
            SIM <span className="text-gradient-brand">Services</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SIM Services · Made with care in Morocco
        </p>
      </div>
    </footer>
  );
}

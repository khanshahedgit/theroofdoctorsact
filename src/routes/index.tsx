import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import inspectionImage from "@/assets/roof-inspection.jpg";
import repairImage from "@/assets/roof-repair.jpg";
import installationImage from "@/assets/roof-installation.jpg";
import guttersImage from "@/assets/roof-gutters.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roofing Experts Canberra | The Roof Doctors ACT" },
      { name: "description", content: "The Roof Doctors ACT provides roof repairs, installation, gutters and inspections across Queanbeyan and Canberra City." },
      { property: "og:title", content: "The Roof Doctors ACT | Roofing Experts" },
      { property: "og:description", content: "Roofing experts you can trust across Queanbeyan and Canberra City." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phoneHref = "tel:+61410604726";
const emailHref = "mailto:theroofdoc747@gmail.com";
const whatsappHref = "https://wa.me/61410604726";
const messengerHref = "https://www.facebook.com/messages/t/theroofdoctorsact/";

const services = [
  { title: "Roof Repairs & Restoration", text: "Focused repair and restoration work for existing roofs." },
  { title: "New Roof Installation", text: "New roof installation for residential and commercial properties." },
  { title: "Gutter Replacement & Maintenance", text: "Gutter replacement and ongoing maintenance." },
  { title: "Roof Inspections & Maintenance", text: "Practical roof inspections and maintenance support." },
  { title: "Commercial & Residential Roofing", text: "Roofing services across commercial and residential properties." },
  { title: "Emergency Roofing Services", text: "Roofing assistance when urgent work is required." },
];

const heroScenes = [
  { image: inspectionImage, kicker: "Roof inspections & maintenance", title: "Look closer. Protect what matters." },
  { image: repairImage, kicker: "Roof repairs & restoration", title: "Experienced hands. Considered repairs." },
  { image: installationImage, kicker: "New roof installation", title: "Built for the roof ahead." },
];

const projectImages = [
  { src: inspectionImage, alt: "Roofer inspecting a metal roof" },
  { src: repairImage, alt: "Roofing professionals repairing roof tiles" },
  { src: installationImage, alt: "New metal roof installation" },
  { src: guttersImage, alt: "Modern roof gutter detail" },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-gold" : "text-primary"}`}><span className="h-px w-8 bg-gold" />{children}</p>;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" aria-label="The Roof Doctors ACT home" className={`group flex items-center gap-3 ${light ? "text-hero-foreground" : "text-foreground"}`}>
      <span className="grid size-11 place-items-center border border-gold/70"><span className="font-display text-xl text-gold">RD</span></span>
      <span><strong className="block text-sm uppercase tracking-[0.12em]">The Roof Doctors</strong><span className="block text-[10px] uppercase tracking-[0.3em] text-gold">ACT</span></span>
    </a>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-hero-foreground/20 text-hero-foreground">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <BrandMark light />
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] md:flex">
          <a href="#services" className="transition-colors hover:text-gold">Services</a>
          <a href="#about" className="transition-colors hover:text-gold">About</a>
          <a href="#contact" className="transition-colors hover:text-gold">Contact</a>
        </nav>
        <Button asChild variant="inverse" size="lg" className="hidden sm:inline-flex"><a href={phoneHref}><Phone /> Call now</a></Button>
        <Button asChild variant="inverse" size="icon" className="sm:hidden"><a href={phoneHref} aria-label="Call The Roof Doctors"><Phone /></a></Button>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [chapter, setChapter] = useState(0);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -35]);
  useMotionValueEvent(scrollYProgress, "change", (value) => setChapter(Math.min(2, Math.floor(value * 3))));

  return (
    <section ref={ref} id="top" className="relative h-[300vh] bg-deep">
      <div className="film-grain sticky top-0 h-screen overflow-hidden">
        {heroScenes.map((scene, index) => (
          <motion.img key={scene.title} src={scene.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" initial={false} animate={{ opacity: chapter === index ? 1 : 0, scale: chapter === index && !reduce ? 1.035 : 1 }} transition={{ duration: reduce ? 0 : 1.15, ease: "easeInOut" }} />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--deep)_92%,transparent)_0%,color-mix(in_oklab,var(--deep)_65%,transparent)_48%,color-mix(in_oklab,var(--deep)_20%,transparent)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,color-mix(in_oklab,var(--deep)_70%,transparent)_0%,transparent_52%)]" />
        <Header />

        <motion.div style={{ y: titleY }} className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-20 pt-28 sm:px-8 md:items-center md:pb-0">
          <div className="max-w-3xl text-hero-foreground">
            <motion.p key={`k-${chapter}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold"><span className="h-px w-10 bg-gold" />{heroScenes[chapter].kicker}</motion.p>
            <motion.h1 key={`t-${chapter}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-5xl leading-[0.98] sm:text-6xl md:text-8xl">{chapter === 0 ? "The Roof Doctors ACT" : heroScenes[chapter].title}</motion.h1>
            <motion.p key={`p-${chapter}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-base leading-7 text-hero-foreground/80 sm:text-lg">{chapter === 0 ? "The Roof Doctors — Roofing Experts You Can Trust" : chapter === 1 ? "Over 5 years of roofing experience across Queanbeyan and Canberra City." : "Commercial and residential roofing, approached with care."}</motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg"><a href={phoneHref}><Phone /> Call now</a></Button>
              <Button asChild variant="inverse" size="lg"><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-6 right-5 z-20 flex items-center gap-3 sm:right-8 md:bottom-10 md:right-12">
          <span className="text-[10px] font-bold tracking-[0.2em] text-hero-foreground/70">0{chapter + 1}</span>
          <div className="flex gap-1.5">{heroScenes.map((_, index) => <span key={index} className={`h-px transition-all duration-500 ${index === chapter ? "w-10 bg-gold" : "w-5 bg-hero-foreground/35"}`} />)}</div>
          <span className="text-[10px] text-hero-foreground/50">03</span>
        </div>
        <a href="#projects" className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-hero-foreground/70 md:flex">Scroll <ArrowDown className="size-4 animate-bounce" /></a>
      </div>
    </section>
  );
}

function ImageRail() {
  const images = [...projectImages, ...projectImages];
  return (
    <section id="projects" className="overflow-hidden bg-deep py-20 text-hero-foreground sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><Eyebrow light>Roofing in focus</Eyebrow><h2 className="max-w-2xl text-4xl sm:text-6xl">The work, from every angle.</h2></div><p className="max-w-sm text-sm leading-6 text-hero-foreground/65">Roof inspections, repairs, installation and gutter work in Australian roofing environments.</p></div></Reveal>
      <div className="edge-mask group overflow-hidden">
        <div className="animate-rail flex w-max gap-4 px-2 group-hover:[animation-play-state:paused]">
          {images.map((image, index) => <figure key={`${image.alt}-${index}`} className="relative h-72 w-[76vw] shrink-0 overflow-hidden border border-hero-foreground/10 sm:h-96 sm:w-[42vw] lg:w-[30vw]"><img src={image.src} alt={index < 4 ? image.alt : ""} loading="lazy" width={1600} height={1000} className="h-full w-full object-cover brightness-75 transition duration-700 hover:scale-[1.035] hover:brightness-100" /></figure>)}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_1.1fr]"><div><Eyebrow>What we do</Eyebrow><h2 className="text-5xl leading-tight sm:text-7xl">Care for every roofline.</h2></div><p className="self-end text-lg leading-8 text-muted-foreground">Commercial and residential roofing services across Queanbeyan, Queanbeyan East and Canberra City.</p></Reveal>
        <div>{services.map((service, index) => <motion.article key={service.title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ delay: index * 0.04 }} className="group grid gap-4 border-b border-border py-8 transition-colors hover:border-gold md:grid-cols-[100px_1fr_1fr_auto] md:items-center"><span className="font-display text-4xl text-gold/70">0{index + 1}</span><h3 className="text-2xl md:text-3xl">{service.title}</h3><p className="max-w-md text-sm leading-6 text-muted-foreground">{service.text}</p><ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-2" /></motion.article>)}</div>
      </div>
    </section>
  );
}

function VideoCarousel() {
  const [active, setActive] = useState(0);
  const slots = ["Video 01", "Video 02", "Video 03"];
  const move = (next: number) => setActive(Math.max(0, Math.min(slots.length - 1, next)));
  return (
    <section className="overflow-hidden bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 flex items-end justify-between gap-6"><div><Eyebrow>Facebook reels</Eyebrow><h2 className="text-4xl sm:text-6xl">See the work in motion.</h2></div><div className="hidden items-center gap-2 sm:flex"><Button variant="outline" size="icon" aria-label="Previous video" onClick={() => move(active - 1)} disabled={active === 0}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Next video" onClick={() => move(active + 1)} disabled={active === 2}><ChevronRight /></Button></div></Reveal>
        <div className="mx-auto max-w-sm sm:max-w-md">
          <motion.div className="flex cursor-grab gap-5 active:cursor-grabbing" animate={{ x: `calc(${-active * 100}% - ${active * 20}px)` }} transition={{ type: "spring", stiffness: 260, damping: 30 }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12} onDragEnd={(_, info) => { if (info.offset.x < -45) move(active + 1); if (info.offset.x > 45) move(active - 1); }}>
            {slots.map((slot, index) => <motion.article key={slot} animate={{ opacity: active === index ? 1 : 0.45, scale: active === index ? 1 : 0.94 }} className="aspect-[9/15] w-full shrink-0 overflow-hidden border border-border bg-deep text-hero-foreground shadow-premium"><div className="relative flex h-full flex-col items-center justify-center bg-[linear-gradient(145deg,var(--deep),color-mix(in_oklab,var(--primary)_45%,var(--deep)))] p-8 text-center"><Play className="mb-6 size-12 stroke-1 text-gold" /><p className="font-display text-3xl">{slot}</p><p className="mt-3 text-xs uppercase tracking-[0.18em] text-hero-foreground/55">Facebook Reel placeholder</p><span className="absolute bottom-6 border-t border-hero-foreground/20 pt-4 text-[10px] uppercase tracking-[0.16em] text-hero-foreground/50">Replace with your video</span></div></motion.article>)}
          </motion.div>
        </div>
        <div className="mt-8 flex justify-center gap-2">{slots.map((_, index) => <span key={index} className={`h-1 transition-all ${index === active ? "w-9 bg-gold" : "w-4 bg-border"}`} />)}</div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative bg-deep py-24 text-hero-foreground sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 md:grid-cols-[0.75fr_1.25fr]">
        <Reveal><Eyebrow light>Recommendation</Eyebrow><h2 className="text-4xl sm:text-6xl">Words from a customer.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-hero-foreground/60">This section is ready to grow as more real recommendations are supplied.</p></Reveal>
        <Reveal className="relative border-l border-gold/60 py-6 pl-8 sm:pl-14"><Quote className="mb-8 size-11 stroke-1 text-gold" /><blockquote className="font-display text-3xl leading-snug sm:text-5xl">“Burhan and his team was very professional. find the issue in my roof and fix it. highly recommended.”</blockquote><footer className="mt-10 flex items-center gap-4"><span className="grid size-11 place-items-center border border-gold text-gold">AU</span><div><p className="font-semibold">Adnan Uddin</p><p className="text-xs text-hero-foreground/55">recommends</p></div></footer><div className="mt-12 flex items-center gap-3 text-xs text-hero-foreground/50"><span className="text-gold">01</span><span className="h-px w-16 bg-gold" /><span>01</span></div></Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal><Eyebrow>About The Roof Doctors</Eyebrow><h2 className="text-5xl leading-[1.05] sm:text-7xl">Roofing experts you can trust.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">The Roof Doctors ACT provides roof repairs, restoration, new roof installation, gutter work, inspections and maintenance for commercial and residential properties.</p><div className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2"><div><p className="font-display text-5xl text-gold">5+</p><p className="mt-2 text-sm text-muted-foreground">Years of roofing experience</p></div><div><MapPin className="mb-3 text-primary" /><p className="text-sm leading-7">Queanbeyan, NSW<br />Queanbeyan East, NSW<br />Canberra City, ACT</p></div></div></Reveal>
        <Reveal className="relative"><img src={inspectionImage} alt="Roofing inspection on an Australian home" loading="lazy" width={1600} height={1000} className="aspect-[4/5] w-full object-cover" /><div className="absolute -bottom-5 -left-3 flex max-w-[250px] items-center gap-4 bg-deep p-5 text-hero-foreground shadow-premium sm:-left-8"><ShieldCheck className="size-8 shrink-0 text-gold" /><p className="text-sm leading-5">Commercial & residential roofing</p></div></Reveal>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [position, setPosition] = useState(50);
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 md:flex md:items-end md:justify-between"><div><Eyebrow>Before & after</Eyebrow><h2 className="text-4xl sm:text-6xl">See the difference.</h2></div><p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground md:mt-0">Demonstration imagery only — replace these slots with genuine project photographs.</p></Reveal>
        <Reveal className="relative aspect-[4/3] overflow-hidden border border-border sm:aspect-[16/9]">
          <img src={repairImage} alt="Replaceable before roofing image" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}><img src={installationImage} alt="Replaceable after roofing image" loading="lazy" width={1600} height={1000} className="absolute inset-y-0 left-0 h-full max-w-none object-cover" style={{ width: "100vw", maxWidth: "1280px" }} /></div>
          <span className="absolute left-4 top-4 bg-deep/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-hero-foreground">After</span><span className="absolute right-4 top-4 bg-deep/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-hero-foreground">Before</span>
          <div className="pointer-events-none absolute inset-y-0 w-px bg-hero-foreground shadow-premium" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-hero-foreground bg-deep text-hero-foreground"><ChevronLeft className="size-4" /><ChevronRight className="size-4" /></span></div>
          <input aria-label="Move before and after comparison" type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
        </Reveal>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="film-grain relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l border-primary-foreground/15 opacity-30 lg:block"><div className="h-full w-full bg-[repeating-linear-gradient(135deg,transparent,transparent_24px,var(--gold)_25px,var(--gold)_26px)]" /></div>
      <Reveal className="relative mx-auto max-w-7xl px-5 sm:px-8"><Eyebrow light>Start a conversation</Eyebrow><div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]"><div><h2 className="max-w-4xl text-5xl leading-tight sm:text-7xl">Let’s talk about your roof.</h2><p className="mt-6 text-lg text-primary-foreground/75">Get in touch with The Roof Doctors ACT.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="gold" size="lg"><a href={phoneHref}><Phone /> Call now</a></Button><Button asChild variant="inverse" size="lg"><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button><Button asChild variant="inverse" size="lg"><a href={emailHref}><Mail /> Email us</a></Button></div></div><div className="flex flex-col justify-end gap-5 border-l border-primary-foreground/20 pl-6 text-sm"><a href={phoneHref} className="hover:text-gold">+61 410 604 726</a><a href={emailHref} className="break-all hover:text-gold">theroofdoc747@gmail.com</a></div></div></Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep pb-10 pt-20 text-hero-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 border-b border-hero-foreground/15 pb-16 md:grid-cols-[1.2fr_1fr_0.7fr_0.8fr]"><div><BrandMark light /><p className="mt-6 max-w-xs text-sm leading-6 text-hero-foreground/55">The Roof Doctors — Roofing Experts You Can Trust</p></div><div><h3 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-gold">Services</h3><ul className="space-y-3 text-sm text-hero-foreground/65">{services.map((service) => <li key={service.title}>{service.title}</li>)}</ul></div><div><h3 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-gold">Locations</h3><ul className="space-y-3 text-sm text-hero-foreground/65"><li>Queanbeyan, NSW</li><li>Queanbeyan East, NSW</li><li>Canberra City, ACT</li></ul></div><div><h3 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-gold">Contact</h3><div className="space-y-4 text-sm text-hero-foreground/65"><a className="flex gap-3 hover:text-gold" href={phoneHref}><Phone className="size-4" />+61 410 604 726</a><a className="flex gap-3 break-all hover:text-gold" href={emailHref}><Mail className="size-4 shrink-0" />theroofdoc747@gmail.com</a><a className="flex gap-3 hover:text-gold" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />WhatsApp</a><a className="flex gap-3 hover:text-gold" href={messengerHref} target="_blank" rel="noreferrer"><Facebook className="size-4" />Messenger</a></div></div></div>
        <div className="flex flex-col gap-3 pt-8 text-xs text-hero-foreground/40 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} The Roof Doctors ACT</p><p>Queanbeyan · Canberra City</p></div>
      </div>
    </footer>
  );
}

function Index() {
  return <main><Hero /><ImageRail /><Services /><VideoCarousel /><Testimonials /><About /><BeforeAfter /><ContactCTA /><Footer /></main>;
}
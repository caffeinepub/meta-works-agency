import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Globe,
  Loader2,
  Mail,
  Menu,
  Rocket,
  Search,
  Star,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { useActor } from "./hooks/useActor";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Target,
    title: "Meta Ads",
    description:
      "Precision-targeted Facebook & Instagram campaigns that convert browsers into buyers at scale.",
    accent: "yellow",
  },
  {
    icon: Globe,
    title: "Social Media Marketing",
    description:
      "Full-spectrum social strategy — content, community management, and growth across every platform.",
    accent: "magenta",
  },
  {
    icon: Search,
    title: "SEO & Content",
    description:
      "Organic visibility that compounds. We rank your brand for the keywords that drive real revenue.",
    accent: "yellow",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description:
      "High-intent search and display campaigns optimized for maximum ROI and minimum waste.",
    accent: "magenta",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Automated email flows and broadcast campaigns that nurture leads and retain customers.",
    accent: "yellow",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Crystal-clear dashboards and actionable reports — no vanity metrics, only decisions that matter.",
    accent: "magenta",
  },
];

const WHY_US = [
  {
    icon: BarChart3,
    title: "Data-Driven",
    desc: "Every decision backed by real-time analytics. We let numbers guide strategy, not gut feelings.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    desc: "Meta Blueprint, Google Ads, and HubSpot certified — our team lives and breathes digital marketing.",
  },
  {
    icon: Zap,
    title: "Full-Service",
    desc: "From strategy to creative to reporting, everything under one roof. No more juggling agencies.",
  },
  {
    icon: Rocket,
    title: "Proven Results",
    desc: "300% average ROAS across clients. We don't celebrate impressions — we celebrate revenue.",
  },
];

const STATS = [
  { number: "200+", label: "Clients Served" },
  { number: "5M+", label: "Reach Generated" },
  { number: "300%", label: "Average ROAS" },
  { number: "10+", label: "Years Experience" },
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CEO, Luminary Skincare",
    quote:
      "MetaWorks took our ROAS from 1.8x to 4.2x in just 60 days. Their Meta Ads strategy completely transformed our e-commerce business.",
  },
  {
    name: "James Okafor",
    role: "Founder, FitNation App",
    quote:
      "The team at MetaWorks is exceptional. They drove 45,000 app installs in Q4 at a cost-per-install 40% below our benchmark.",
  },
  {
    name: "Priya Mehta",
    role: "Marketing Director, NovaTech",
    quote:
      "Their full-service approach saved us from managing four different vendors. One team, one vision, outstanding results.",
  },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Nav({
  mobileOpen,
  setMobileOpen,
}: { mobileOpen: boolean; setMobileOpen: (v: boolean) => void }) {
  const scrolled = useScrolled();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-black text-xl tracking-tight uppercase">
            Meta<span className="text-primary">Works</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-ocid="nav.get_started.button"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border-2 border-primary text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow-yellow"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.menu.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b-2 border-primary px-6 pb-6"
          >
            <nav className="flex flex-col gap-5 pt-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-2 px-6 py-3 bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors w-full"
                onClick={() => {
                  setMobileOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Funky hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-funky-bg.dim_1600x900.jpg')",
        }}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 noise-bg" />

      {/* Yellow blob glow top-left */}
      <div className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      {/* Magenta blob glow bottom-right */}
      <div className="absolute bottom-1/4 right-1/6 w-64 h-64 rounded-full bg-accent/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="mb-8">
            <span className="skew-label inline-flex items-center gap-2 px-4 py-1.5 bg-primary/15 border border-primary/50 text-primary text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
              Meta Blueprint Certified Agency
            </span>
          </motion.div>

          {/* Main headline — chunky stacked display type */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display font-black leading-[0.9] tracking-tight mb-8"
          >
            <span className="block text-6xl md:text-8xl lg:text-[10rem] uppercase text-foreground">
              Grow
            </span>
            <span className="block text-6xl md:text-8xl lg:text-[10rem] uppercase">
              <span className="funky-underline text-foreground">Your</span>{" "}
              <span className="text-primary glow-text-yellow">Brand</span>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl uppercase text-muted-foreground mt-2">
              in the Digital World
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            We are a full-service digital marketing agency specializing in Meta
            Ads, social media growth, and performance campaigns that deliver
            measurable ROI.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            {/* Funky CTA — black fill, thick yellow border */}
            <a
              href="#contact"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-200 glow-yellow group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#results"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-foreground/30 text-foreground font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-200"
            >
              See Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-5 h-5 text-primary rotate-90" />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-28 relative diagonal-divider bg-secondary/40"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="mb-16">
            <span className="skew-label inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-black uppercase tracking-[0.2em] mb-4">
              What We Do
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight">
              Services Built{" "}
              <span
                className="text-accent glow-magenta"
                style={{ textShadow: "0 0 40px oklch(0.68 0.3 340 / 0.6)" }}
              >
                for Growth
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mt-4">
              Every service we offer is engineered to deliver measurable results
              for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                data-ocid={`services.item.${i + 1}`}
                whileHover={{ rotate: i % 2 === 0 ? 1.5 : -1.5, scale: 1.02 }}
                className="funky-card p-6 cursor-default transition-colors duration-300 group"
              >
                <div
                  className={`w-11 h-11 flex items-center justify-center mb-5 ${
                    service.accent === "yellow"
                      ? "bg-primary/15 border border-primary/40"
                      : "bg-accent/15 border border-accent/40"
                  }`}
                >
                  <service.icon
                    className={`w-5 h-5 ${
                      service.accent === "yellow"
                        ? "text-primary"
                        : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="skew-label inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-black uppercase tracking-[0.2em] mb-4">
              Why Us
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight">
              The MetaWorks <span className="text-primary">Difference</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mt-4">
              We are not just another agency. Here is what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group"
              >
                <div className="w-14 h-14 bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300 group-hover:rotate-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section
      id="results"
      className="py-28 relative overflow-hidden diagonal-divider bg-secondary/40"
    >
      {/* Big yellow blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/8 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="skew-label inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-black uppercase tracking-[0.2em] mb-4">
              The Numbers
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight">
              Results That{" "}
              <span className="text-primary glow-text-yellow">Speak</span>
            </h2>
          </motion.div>

          {/* Staggered giant stat numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 -mx-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className={`px-4 py-6 border-l-2 border-primary/20 ${
                  i % 2 === 0 ? "lg:mt-0" : "lg:mt-10"
                }`}
              >
                <div className="font-display font-black stat-number text-7xl md:text-8xl lg:text-9xl text-primary glow-text-yellow leading-none">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-bold text-sm uppercase tracking-widest mt-3">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="w-4 h-4 text-primary fill-primary" />
      ))}
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="skew-label inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-black uppercase tracking-[0.2em] mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight">
              What Our{" "}
              <span
                className="text-accent"
                style={{ textShadow: "0 0 40px oklch(0.68 0.3 340 / 0.6)" }}
              >
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                data-ocid={`testimonials.item.${i + 1}`}
                whileHover={{ rotate: i % 2 === 0 ? 1 : -1 }}
                className="funky-card p-7 flex flex-col gap-4"
              >
                <StarRating />
                <p className="text-foreground/85 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-primary/20 pt-4">
                  <div className="font-display font-black text-sm uppercase tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      if (actor) {
        await actor.submitContactForm(form.name, form.email, form.message);
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <span className="skew-label inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-black uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight">
              Ready to{" "}
              <span className="text-primary glow-text-yellow">Scale?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mt-4">
              Tell us about your business and goals. We will get back to you
              within 24 hours.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-2xl">
            <div className="funky-card p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    data-ocid="contact.success_state"
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-5 rotate-3">
                      <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-black uppercase mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. We will be in touch within 24
                      hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 border-2 border-primary text-primary font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-name"
                          className="text-xs font-bold uppercase tracking-widest"
                        >
                          Name
                        </Label>
                        <Input
                          id="contact-name"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                          data-ocid="contact.input"
                          className="bg-secondary/60 border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-email"
                          className="text-xs font-bold uppercase tracking-widest"
                        >
                          Email
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          required
                          data-ocid="contact.search_input"
                          className="bg-secondary/60 border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-message"
                        className="text-xs font-bold uppercase tracking-widest"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell us about your goals, current challenges, and how we can help..."
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        required
                        data-ocid="contact.textarea"
                        className="bg-secondary/60 border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none rounded-none"
                      />
                    </div>

                    {status === "error" && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-destructive text-sm font-medium"
                      >
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest rounded-none glow-yellow text-sm"
                      data-ocid="contact.submit_button"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="border-t-2 border-primary/30 py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rotate-3">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-black text-xl uppercase tracking-tight">
                Meta<span className="text-primary">Works</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Your growth partner in Meta Ads, social media, and performance
              digital marketing.
            </p>
          </div>

          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-primary mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-primary mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border-2 border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border-2 border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-all"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border-2 border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            &copy; {year} MetaWorks. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ResultsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

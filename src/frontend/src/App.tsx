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
  },
  {
    icon: Globe,
    title: "Social Media Marketing",
    description:
      "Full-spectrum social strategy — content, community management, and growth across every platform.",
  },
  {
    icon: Search,
    title: "SEO & Content",
    description:
      "Organic visibility that compounds. We rank your brand for the keywords that drive real revenue.",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description:
      "High-intent search and display campaigns optimized for maximum ROI and minimum waste.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Automated email flows and broadcast campaigns that nurture leads and retain customers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Crystal-clear dashboards and actionable reports — no vanity metrics, only decisions that matter.",
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
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-18 flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-primary/10 border border-primary/40 flex items-center justify-center rounded-sm group-hover:bg-primary/20 transition-colors">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
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
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-ocid="nav.get_started.button"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/40 text-primary font-medium text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
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
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border px-6 pb-6"
          >
            <nav className="flex flex-col gap-5 pt-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors w-full rounded-sm"
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
      {/* Deep atmospheric background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 noise-bg" />

      {/* Subtle radial glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/6 blur-[160px] pointer-events-none" />
      {/* Deep glow bottom */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full bg-accent/4 blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 border border-primary/25 text-primary text-xs font-medium uppercase tracking-[0.18em] rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
              Meta Blueprint Certified Agency
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display leading-[1.05] tracking-tight mb-8"
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
              Grow Your
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-primary glow-text-gold">Brand</span>
              <span className="text-foreground"> in the</span>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-normal text-muted-foreground italic mt-1">
              Digital World
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
            <a
              href="#contact"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 glow-gold rounded-sm group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#results"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-border text-foreground font-medium text-sm uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all duration-300 rounded-sm"
            >
              See Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronRight className="w-5 h-5 text-muted-foreground rotate-90" />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Services Built{" "}
              <span className="text-primary italic">for Growth</span>
            </h2>
            <div className="gold-divider w-24 mt-6 mb-0" />
            <p className="text-muted-foreground max-w-xl mt-5">
              Every service we offer is engineered to deliver measurable results
              for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                data-ocid={`services.item.${i + 1}`}
                className="premium-card p-7 cursor-default"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/25 flex items-center justify-center mb-5 rounded-sm">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-tight mb-2 text-foreground">
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
            visible: { transition: { staggerChildren: 0.09 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.2em] mb-4">
              Why Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              The MetaWorks{" "}
              <span className="text-primary italic">Difference</span>
            </h2>
            <div className="gold-divider w-24 mt-6" />
            <p className="text-muted-foreground max-w-xl mt-5">
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
                <div className="w-12 h-12 bg-primary/8 border border-primary/20 flex items-center justify-center mb-5 rounded-sm group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-tight mb-2">
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
      className="py-28 relative overflow-hidden bg-secondary/20"
    >
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />

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
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.2em] mb-4">
              The Numbers
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Results That <span className="text-primary italic">Speak</span>
            </h2>
            <div className="gold-divider w-24 mt-6" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="bg-background px-8 py-10"
              >
                <div className="font-display font-bold stat-number text-5xl md:text-6xl lg:text-7xl text-primary glow-text-gold leading-none mb-3">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
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
        <Star key={n} className="w-3.5 h-3.5 text-primary fill-primary" />
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
            visible: { transition: { staggerChildren: 0.09 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              What Our <span className="text-primary italic">Clients Say</span>
            </h2>
            <div className="gold-divider w-24 mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                data-ocid={`testimonials.item.${i + 1}`}
                className="premium-card p-8 flex flex-col gap-5"
              >
                <StarRating />
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-5">
                  <div className="font-display font-semibold text-sm text-foreground">
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
            visible: { transition: { staggerChildren: 0.09 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Ready to <span className="text-primary italic">Scale?</span>
            </h2>
            <div className="gold-divider w-24 mt-6" />
            <p className="text-muted-foreground max-w-xl mt-5">
              Tell us about your business and goals. We will get back to you
              within 24 hours.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-2xl">
            <div className="premium-card p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    data-ocid="contact.success_state"
                    className="text-center py-12"
                  >
                    <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 rounded-sm">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      Message Sent
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. We will be in touch within 24
                      hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 border border-primary/40 text-primary font-medium text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all rounded-sm"
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
                          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
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
                          className="bg-secondary/50 border-border focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors rounded-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-email"
                          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
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
                          className="bg-secondary/50 border-border focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors rounded-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-message"
                        className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
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
                        className="bg-secondary/50 border-border focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors resize-none rounded-sm"
                      />
                    </div>

                    {status === "error" && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-destructive text-sm"
                      >
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-widest rounded-sm glow-gold text-sm"
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
    <footer className="border-t border-border py-14 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center rounded-sm">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Meta<span className="text-primary">Works</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Your growth partner in Meta Ads, social media, and performance
              digital marketing.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center text-muted-foreground transition-all rounded-sm"
              >
                <SiFacebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center text-muted-foreground transition-all rounded-sm"
              >
                <SiInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center text-muted-foreground transition-all rounded-sm"
              >
                <SiLinkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
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

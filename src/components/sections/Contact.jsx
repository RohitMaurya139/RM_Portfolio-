import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, AlertCircle, Send } from "lucide-react";
import Container from "../ui/Container";
import { SITE, SOCIALS } from "../../data/site";
import { cn } from "../../lib/utils";

const WEB3FORMS_KEY = "624db762-0f15-4b69-b5da-863da692eb08";

const LINKS = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/rohit139maurya",
    href: SOCIALS.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "@RohitMaurya139",
    href: SOCIALS.github,
    external: true,
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [focused, setFocused] = useState(null);

  const disabled =
    status === "sending" || !form.name || !form.email || !form.message;

  const submit = async (e) => {
    e.preventDefault();
    if (disabled) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
          from_name: "Portfolio · " + form.name,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={submit}
      className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.012] p-6 text-left md:p-8"
    >
      <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-white/45">
        <span className="text-violet-300/80">MSG</span>
        <span className="h-px flex-1 bg-white/[0.06]" />
        <span>SEND A MESSAGE</span>
      </div>

      <AnimatePresence>
        {status === "ok" && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mb-5 flex items-center gap-2.5 rounded-lg border border-emerald-400/25 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-200"
          >
            <Check size={16} strokeWidth={2} />
            Sent — I'll get back to you soon.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mb-5 flex items-center gap-2.5 rounded-lg border border-red-400/25 bg-red-400/[0.06] px-4 py-3 text-sm text-red-200"
          >
            <AlertCircle size={16} strokeWidth={2} />
            Couldn't send — try emailing directly.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={form.name}
          onChange={change}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          focused={focused === "name"}
          placeholder="Your name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={change}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          focused={focused === "email"}
          placeholder="you@company.com"
        />
      </div>

      <Field
        as="textarea"
        label="Message"
        name="message"
        rows={5}
        value={form.message}
        onChange={change}
        onFocus={() => setFocused("message")}
        onBlur={() => setFocused(null)}
        focused={focused === "message"}
        placeholder="What are you working on?"
        className="mt-4"
      />

      <button
        type="submit"
        disabled={disabled}
        className={cn(
          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all",
          disabled
            ? "cursor-not-allowed bg-white/[0.06] text-white/40"
            : "bg-white text-black hover:bg-white/90"
        )}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  as: Tag = "input",
  label,
  focused,
  className,
  ...props
}) {
  return (
    <label className={cn("block min-w-0", className)}>
      <span
        className={cn(
          "block font-mono text-[10px] tracking-[0.18em] transition-colors",
          focused ? "text-violet-300" : "text-white/45"
        )}
      >
        {label.toUpperCase()}
      </span>
      <Tag
        {...props}
        className="mt-2 w-full rounded-lg border border-white/[0.08] bg-black/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-white/25 focus:bg-black/40 focus:outline-none"
      />
    </label>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.012] p-8 md:p-14"
        >
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 mask-radial" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-white/50">
                <span className="text-violet-300/80">08</span>
                <span className="h-px w-8 bg-white/10" />
                <span>CONTACT</span>
              </div>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Have an interesting problem to solve?
              </h2>
              <p className="mt-5 text-lg text-white/60 md:text-xl">
                Let's build something useful.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  Email me
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/90 transition-colors hover:border-white/25 hover:bg-white/5"
                >
                  LinkedIn <span aria-hidden className="text-white/50 group-hover:text-white/80">↗</span>
                </a>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/90 transition-colors hover:border-white/25 hover:bg-white/5"
                >
                  GitHub <span aria-hidden className="text-white/50 group-hover:text-white/80">↗</span>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/[0.06] pt-8 sm:grid-cols-3 lg:grid-cols-1">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group block min-w-0"
                  >
                    <div className="font-mono text-[10px] tracking-[0.18em] text-white/40">
                      {link.label.toUpperCase()}
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-white/85 transition-colors group-hover:text-white">
                      <span className="min-w-0 truncate">{link.value}</span>
                      <span aria-hidden className="flex-shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5">
                        {link.external ? "↗" : "→"}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

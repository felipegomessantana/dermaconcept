import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
import { MapPin, MessageCircle, Mail, Instagram } from "lucide-react";
import contactImg from "@/assets/contact-ambiente.jpg";

const contactItems = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Bernardo Monteiro, 1557 – 2º Andar, Funcionários, BH",
    href: "https://maps.google.com/?q=Av.+Bernardo+Monteiro,+1557+-+Funcionários,+Belo+Horizonte+-+MG",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(31) 98244-9473",
    href: "https://wa.me/5531982449473",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@dermaconcept.com.br",
    href: "mailto:contato@dermaconcept.com.br",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dermaconcept_academy",
    href: "https://instagram.com/dermaconcept_academy",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <section id="contato" className="bg-[#F8F5F1] py-24 lg:py-32">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Mobile: imagem no topo */}
          <AnimatedSection className="lg:hidden">
            <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl shadow-black/5">
              <img
                src={contactImg}
                alt="Ambiente premium Derma Concept"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
          </AnimatedSection>

          {/* Coluna esquerda — Info + Formulário */}
          <div className="col-span-1 lg:col-span-5">
            <AnimatedSection>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]">
                Contato
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Fale Conosco
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 lg:text-base">
                Agende sua avaliação ou tire suas dúvidas com nossa equipe.
              </p>

              {/* Contact grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-3 transition-colors"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7A7168]/10 text-[#7A7168]">
                      <item.icon size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                        {item.label}
                      </p>
                      <p className="text-sm leading-relaxed text-[#1A1A1A] group-hover:text-[#7A7168] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full border border-neutral-200 bg-white/60 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7A7168]/40 transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-neutral-200 bg-white/60 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7A7168]/40 transition-all"
                  />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Telefone / WhatsApp"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full border border-neutral-200 bg-white/60 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7A7168]/40 transition-all"
                />
                <textarea
                  placeholder="Sua mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full border border-neutral-200 bg-white/60 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7A7168]/40 transition-all resize-none"
                />
                <BorderBeamButton type="submit" className="w-full bg-[#7A7168] text-white uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#6a6259]">
                  Enviar Mensagem
                </BorderBeamButton>
              </form>
            </AnimatedSection>
          </div>

          {/* Coluna direita — Foto horizontal (desktop only) */}
          <AnimatedSection delay={0.15} className="hidden lg:block col-span-1 lg:col-span-7">
            <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl shadow-black/5">
              <img
                src={contactImg}
                alt="Ambiente premium Derma Concept"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
import { Phone, MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import contactImg from "@/assets/contact-ambiente.jpg";

const contactStrip = [
  { icon: Phone, label: "Telefone Fixo", value: "(31) 3564-6953", href: "tel:+553135646953" },
  { icon: MessageCircle, label: "WhatsApp", value: "(31) 98244-9473", href: "https://wa.me/5531982449473" },
  { icon: Instagram, label: "Instagram", value: "@dermaconcept_academy", href: "https://instagram.com/dermaconcept_academy" },
  { icon: Mail, label: "E-mail", value: "contato@dermaconcept.com.br", href: "mailto:contato@dermaconcept.com.br" },
  { icon: MapPin, label: "Endereço", value: "Av. Bernardo Monteiro, 1557 - 2º Andar - Funcionários, Belo Horizonte - MG, 30150-288", href: "https://maps.google.com/?q=Av.+Bernardo+Monteiro,+1557+-+Funcionários,+Belo+Horizonte+-+MG", wide: true },
];

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <section id="contato" className="bg-[#FAF8F5] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* 1. Cabeçalho */}
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Fale Conosco
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500 lg:text-[17px]">
            Agende sua avaliação ou tire suas dúvidas. Nossa equipe entrará em contato.
          </p>
        </AnimatedSection>

        {/* 2. Contact Strip */}
        <AnimatedSection>
          <div className="my-10 border-y border-neutral-200 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
              {contactStrip.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-start gap-3 transition-colors ${
                    (item as any).wide ? "lg:col-span-2" : ""
                  }`}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7A7168]/10 text-[#7A7168]">
                    <item.icon size={15} strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium leading-relaxed text-neutral-800 group-hover:text-[#7A7168] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 3. Grid: Form + Imagem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Mobile: imagem primeiro */}
          <AnimatedSection className="lg:hidden">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
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

          {/* Formulário */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full border border-neutral-200 bg-white px-5 py-3.5 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#7A7168]/30 transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-neutral-200 bg-white px-5 py-3.5 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#7A7168]/30 transition-all"
                />
              </div>
              <input
                type="tel"
                required
                placeholder="Telefone / WhatsApp"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full border border-neutral-200 bg-white px-5 py-3.5 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#7A7168]/30 transition-all"
              />
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full border border-neutral-200 bg-white px-5 py-3.5 text-sm text-[#1A1A1A] placeholder:text-neutral-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#7A7168]/30 transition-all resize-none"
              />
              <BorderBeamButton
                type="submit"
                className="w-full bg-[#7A7168] text-white uppercase tracking-[0.2em] text-xs font-semibold py-4 rounded-xl hover:bg-[#6a6259] transition-colors"
              >
                Enviar Mensagem
              </BorderBeamButton>
            </form>
          </AnimatedSection>

          {/* Imagem desktop */}
          <AnimatedSection delay={0.15} className="hidden lg:block">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
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

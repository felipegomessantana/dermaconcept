import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
import { MapPin, MessageCircle, Mail } from "lucide-react";
import contactImg from "@/assets/contact-ambiente.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Mobile: imagem no topo */}
          <AnimatedSection className="lg:hidden">
            <div className="aspect-video overflow-hidden rounded-3xl shadow-lg">
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

          {/* Coluna esquerda — Texto + Form + Contatos */}
          <div className="flex flex-col justify-center">
            <AnimatedSection>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
                Fale Conosco
              </h2>
              <p className="mt-4 mb-10 text-base leading-relaxed text-neutral-500 lg:text-[17px]">
                Agende sua avaliação ou tire suas dúvidas. Nossa equipe entrará em contato.
              </p>

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

              {/* Contatos rápidos */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <a
                    href="https://wa.me/5531982449473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-neutral-600 hover:text-[#7A7168] transition-colors"
                  >
                    <MessageCircle size={16} strokeWidth={1.5} className="text-[#7A7168]" />
                    (31) 98244-9473
                  </a>
                  <a
                    href="mailto:contato@dermaconcept.com.br"
                    className="group flex items-center gap-2.5 text-sm text-neutral-600 hover:text-[#7A7168] transition-colors"
                  >
                    <Mail size={16} strokeWidth={1.5} className="text-[#7A7168]" />
                    contato@dermaconcept.com.br
                  </a>
                  <a
                    href="https://maps.google.com/?q=Av.+Bernardo+Monteiro,+1557+-+Funcionários,+Belo+Horizonte+-+MG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-neutral-600 hover:text-[#7A7168] transition-colors"
                  >
                    <MapPin size={16} strokeWidth={1.5} className="text-[#7A7168]" />
                    Av. Bernardo Monteiro, 1557 – Funcionários, BH
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Coluna direita — Foto (desktop) */}
          <AnimatedSection delay={0.15} className="hidden lg:flex items-center">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
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

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import contactImg from "@/assets/contact-ambiente.jpg";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "" });
  };

  return (
    <section id="contato" className="section-padding bg-card">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Fale Conosco
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Entre em Contato</h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você 
            para esclarecer dúvidas e fornecer mais informações sobre nossos cursos.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground rounded focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground rounded focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground rounded focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <BorderBeamButton type="submit" className="w-full">
                Enviar
              </BorderBeamButton>
            </form>

            {/* Contact info */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin size={18} strokeWidth={1.5} />
                <span className="text-sm">São Paulo, SP — Brasil</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Phone size={18} strokeWidth={1.5} />
                <span className="text-sm">+55 (11) 99999-0000</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Mail size={18} strokeWidth={1.5} />
                <span className="text-sm">contato@dermaconceptacademy.com.br</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden rounded">
              <img
                src={contactImg}
                alt="Ambiente Derma Concept Academy"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

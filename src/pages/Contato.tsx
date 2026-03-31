import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { BorderBeamButton } from "@/components/ui/border-beam-button";
import { ContactInfoList } from "@/components/ContactInfoList";

const ContatoPage = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 text-center px-6">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Contato
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
            Entre em Contato com a Derma Concept Academy
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed text-lg">
            Coordenação à disposição para dúvidas, agenda e inscrições.
          </p>
        </AnimatedSection>
      </section>

      {/* Two-column layout */}
      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact info */}
            <AnimatedSection>
              <h2 className="text-xl font-heading mb-8">Informações de Contato</h2>
              <ContactInfoList />
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15}>
              <h2 className="text-xl font-heading mb-8">Envie uma Mensagem</h2>
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
                <div>
                  <label className="block text-sm tracking-wider uppercase text-muted-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground rounded focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>
                <BorderBeamButton type="submit">
                  Enviar
                </BorderBeamButton>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContatoPage;

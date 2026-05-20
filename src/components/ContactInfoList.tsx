import { Phone, Instagram, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WhatsAppIcon = ({ size = 18, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  </svg>
);

export interface ContactInfoItem {
  icon: LucideIcon | React.FC<{ size?: number; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
}

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    icon: Phone,
    label: "Telefone Fixo",
    value: "(31) 3564-6953",
    href: "tel:+553135646953",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "(31) 98244-9473",
    href: "https://wa.me/5531982449473",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@dermaconcept_academy",
    href: "https://instagram.com/dermaconcept_academy",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@dermaconcept.com.br",
    href: "mailto:contato@dermaconcept.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Bernardo Monteiro, 1557 - 2º Andar - Funcionários, Belo Horizonte - MG, 30150-288",
    href: "https://maps.google.com/?q=Av.+Bernardo+Monteiro,+1557+-+Funcionários,+Belo+Horizonte+-+MG",
  },
];

export const ContactInfoList = () => (
  <div className="space-y-5">
    {CONTACT_INFO.map((item) => (
      <a
        key={item.label}
        href={item.href}
        target={item.href?.startsWith("http") ? "_blank" : undefined}
        rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-start gap-4 transition-colors"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A7168] text-white">
          <item.icon size={18} strokeWidth={1.5} />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {item.label}
          </p>
          <p className="text-sm text-foreground group-hover:text-brand transition-colors leading-relaxed">
            {item.value}
          </p>
        </div>
      </a>
    ))}
  </div>
);

import { Resend } from "resend";

type ContactBody = {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
};

type VercelRequest = {
  method?: string;
  body?: ContactBody | string;
};

type VercelResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  end: () => void;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Serviço de e-mail não configurado. Defina RESEND_API_KEY no Vercel.",
    });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as ContactBody;
  const nome = body.nome?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const telefone = body.telefone?.trim() ?? "";
  const mensagem = body.mensagem?.trim() ?? "";

  if (!nome || !email || !telefone || !mensagem) {
    return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "E-mail inválido." });
  }

  const to = process.env.CONTACT_TO_EMAIL || "contato@dermaconcept.com.br";
  const from =
    process.env.RESEND_FROM_EMAIL || "Derma Concept Academy <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Novo contato pelo site — ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;">
          <h2 style="margin: 0 0 16px;">Nova mensagem do site</h2>
          <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(mensagem)}</p>
        </div>
      `,
      text: [
        "Nova mensagem do site",
        "",
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Telefone: ${telefone}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Não foi possível enviar a mensagem." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Erro interno ao enviar a mensagem." });
  }
}

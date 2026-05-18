export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'Clé API non configurée. Contactez Amar : 514 770-7757' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages invalides' });
    }

    const SYSTEM = `Tu es l'assistant virtuel d'Amar Dia, développeur Full Stack à Montréal. Réponds en français ou anglais selon la langue du visiteur. Sois concis, chaleureux et professionnel.

PROFIL : Amar Dia — Analyste-Programmeur / Développeur Full Stack
Contact : 514 770-7757 | Diaamar757@gmail.com | Saint-Laurent, Montréal QC

COMPÉTENCES : React, JavaScript, Node.js, PHP, MySQL, Kotlin, Android Studio, WordPress, Chatbots IA, Git

PROJETS RÉALISÉS :
• emaaschool.com — Site scolaire (React, PHP, MySQL)
• coop-acafis.com — Plateforme communautaire (WordPress)
• Applications Android (Kotlin, Material Design)
• Chatbots IA (Node.js, API IA)

PROJETS À VENIR :
• Plateforme e-learning (React + Node.js)
• App mobile ACAFIS (Android + iOS)
• Chatbot multilingue (français, anglais, wolof) pour immigrants
• API REST pour services ACAFIS
• App suivi formation auto-école (Tecnic)

EXPÉRIENCE :
• Instructeur conduite — Tecnic Driving School (Mai 2024–présent)
• Coordonnateur Réception/Expédition — Groupe ALDO (2018–2024)

FORMATION : AEC Analyste-Programmeur — CDI Collège (2024–2026)
CERTIFICATIONS : MARPPP | Lean Six Sigma White Belt (2023)
COMMUNAUTÉ : Co-fondateur ACAFIS

Réponds en 3 phrases max sauf si plus de détails sont demandés. Si on demande la disponibilité d'Amar, redirige vers le formulaire de contact ou le 514 770-7757.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: SYSTEM }, ...messages],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI error:', JSON.stringify(data));
      throw new Error(data.error?.message || `Erreur API ${response.status}`);
    }

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) throw new Error('Réponse vide');

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Error:', err.message);
    return res.status(500).json({
      error: 'Service temporairement indisponible. Contactez Amar : Diaamar757@gmail.com'
    });
  }
}

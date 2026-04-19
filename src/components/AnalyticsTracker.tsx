import { useEffect } from 'react';

const WEBHOOK_URL = 'https://discord.com/api/webhooks/1495318163158597652/k1fZAwKcbW0SEW9r4Zwi9JpAaeN6ur02Zn3oAQf5S7WyFsB5YcpdD5BpNh6hWJslaBiR';

export default function AnalyticsTracker() {
  useEffect(() => {
    // Prevent double-tracking in dev mode due to StrictMode
    let isTracked = false;

    const trackVisit = async () => {
      if (isTracked || import.meta.env.DEV) return;
      
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const now = new Date();
        const dateStr = now.toLocaleDateString('en-MY', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const timeStr = now.toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const payload = {
          embeds: [{
            title: "💎 New Portfolio Visit",
            description: `A visitor just landed on your creative studio.`,
            color: 0xDEDBC8,
            fields: [
              { name: "📅 Date", value: dateStr, inline: true },
              { name: "⌚ Time", value: timeStr, inline: true },
              { name: "📍 Location", value: `${data.city || 'Unknown'}, ${data.country_name || 'Unknown'}`, inline: false },
              { name: "🖥️ Device", value: `${navigator.platform}`, inline: true },
              { name: "🔗 Landing Page", value: window.location.pathname, inline: true },
            ],
            footer: { text: "Nithya Creative Studio Analytics" },
            timestamp: now.toISOString()
          }]
        };

        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        isTracked = true;
      } catch (error) {}
    };

    const handleInteraction = async (e: MouseEvent) => {
      if (import.meta.env.DEV) return;

      const target = e.target as HTMLElement;
      const interactive = target.closest('button, a');
      
      if (interactive) {
        const label = interactive.textContent?.trim() || (interactive as any).ariaLabel || 'Unnamed Element';
        const type = interactive.tagName;
        
        try {
          await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              embeds: [{
                title: "🖱️ User Interaction",
                description: `User interacted with a **${type}**`,
                color: 0x4ade80, // Green for actions
                fields: [
                  { name: "🔘 Label", value: label, inline: true },
                  { name: "🔗 Target", value: (interactive as any).href || 'Action Button', inline: true },
                  { name: "📍 Page", value: window.location.pathname, inline: true }
                ],
                timestamp: new Date().toISOString()
              }]
            })
          });
        } catch (error) {}
      }
    };

    trackVisit();
    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  return null;
}

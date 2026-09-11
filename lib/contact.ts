import type { SiteContact } from "@/lib/types";

export const CONTACT: SiteContact = {
  phone: "7659870346",
  phoneDisplay: "+91 76598 70346",
  email: "trinathdesigns@gmail.com",
  address: "805/W, Prashanthi Nagar, Vanasthalipuram – 500070, Hyderabad",
  mapsUrl: "https://maps.app.goo.gl/WDJth9rNmkyPd3XS6",
  hours: {
    weekdays: "Monday to Friday: 9:30 AM – 6:30 PM",
    saturday: "Saturday: 9:30 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
  tagline: "Next-Gen 3D Architectural Studio",
  whatsappPhone: "917659870346",
  instagram: "https://www.instagram.com/trinexbytds/",
  facebook: "https://www.facebook.com/share/19XH26GCrJ/",
  linkedin:
    "https://www.linkedin.com/in/trinex-by-trinath-design-studio-05181a319",
};

export const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.address,
)}&z=16&output=embed`;


export function buildConsultationMessage(fields: {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}) {
  return [
    "Hello TRINEX,",
    "",
    "I would like to request a consultation:",
    "",
    `Name: ${fields.name.trim()}`,
    `Phone: ${fields.phone.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Project Type: ${fields.projectType.trim()}`,
    "",
    "Message:",
    fields.message.trim(),
    "",
    "Thank you!",
  ].join("\n");
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${CONTACT.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function getMailtoUrl(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

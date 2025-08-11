import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Users,
  Globe,
  Settings,
} from "lucide-react";

export const useContactData = () => {
  const contactInfo = [
    {
      icon: <Mail className="icon" />,
      title: "Email",
      value: "contact@smartcrm.com",
      description: "Notre équipe vous répond sous 24h",
    },
    {
      icon: <Phone className="icon" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: <MapPin className="icon" />,
      title: "Adresse",
      value: "123 Rue de l'Innovation, 75001 Paris",
      description: "Siège social",
    },
    {
      icon: <Clock className="icon" />,
      title: "Support",
      value: "24/7",
      description: "Support technique disponible",
    },
  ];

  const departments = [
    {
      icon: <MessageCircle className="icon" />,
      title: "Support Client",
      description: "Assistance technique et questions générales",
      email: "support@smartcrm.com",
    },
    {
      icon: <Users className="icon" />,
      title: "Commercial",
      description: "Démos, tarifs et partenariats",
      email: "sales@smartcrm.com",
    },
    {
      icon: <Globe className="icon" />,
      title: "Marketing",
      description: "Partenariats et communication",
      email: "marketing@smartcrm.com",
    },
    {
      icon: <Settings className="icon" />,
      title: "Technique",
      description: "Intégrations et développement",
      email: "tech@smartcrm.com",
    },
  ];

  return {
    contactInfo,
    departments,
  };
};

import {
  GlobeAltIcon,
  ServerIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import FeatureSectionLeft from "../components/Services/FeatureSectionLeft";
import FeatureSectionRight from "../components/Services/FeatureSectionRight";
import ItInfraSupport from "../images/services/IT Infrastructure Support.png";

export default function Services() {
  const first = {
    title: "IT Infrastructure Support",
    description:
      "From diagnosing server and network issues to deploying essential hardware, we maintain and optimize your business's digital backbone.",
    image: ItInfraSupport,
    services: [
      {
        name: "Diagnostics",
        description:
          "PC & Servers, Printers, Switches, Cisco Routers, LAN/WAN/Internet",
        icon: WrenchIcon,
      },
      {
        name: "Servers",
        description: ["Server Deployment"],
        icon: ServerIcon,
      },
      {
        name: "Network Solutions",
        description: [
          "Link Balancer, Wireless Access Point",
        ],
        icon: GlobeAltIcon,
      },
    ],
  };
  const second = {
    title: "IT Infrastructure Support",
    description:
      "From diagnosing server and network issues to deploying essential hardware, we maintain and optimize your business's digital backbone.",
    image: ItInfraSupport,
    services: [
      {
        name: "Diagnostics",
        description:
          "PC & Servers, Printers, Switches, Cisco Routers, LAN/WAN/Internet",
        icon: WrenchIcon,
      },
      {
        name: "Servers",
        description: ["Server Deployment"],
        icon: ServerIcon,
      },
      {
        name: "Network Solutions",
        description: ["Link Balancer, Wireless Access Point"],
        icon: GlobeAltIcon,
      },
    ],
  };
  const third = {
    title: "IT Infrastructure Support",
    description:
      "From diagnosing server and network issues to deploying essential hardware, we maintain and optimize your business's digital backbone.",
    image: ItInfraSupport,
    services: [
      {
        name: "Diagnostics",
        description:
          "PC & Servers, Printers, Switches, Cisco Routers, LAN/WAN/Internet",
        icon: WrenchIcon,
      },
      {
        name: "Servers",
        description: ["Server Deployment"],
        icon: ServerIcon,
      },
      {
        name: "Network Solutions",
        description: ["Link Balancer, Wireless Access Point"],
        icon: GlobeAltIcon,
      },
    ],
  };
  return (
    <div>
      <div className="pt-10 bg-white">
        <FeatureSectionRight items={first} />
      </div>
      <FeatureSectionLeft items={second} />
      <FeatureSectionRight items={third} />
    </div>
  );
}

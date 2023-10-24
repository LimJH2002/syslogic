import {
  EnvelopeOpenIcon,
  FireIcon,
  GlobeAltIcon,
  ServerIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import FeatureSectionLeft from "../components/Services/FeatureSectionLeft";
import FeatureSectionRight from "../components/Services/FeatureSectionRight";
import Firewall from "../images/services/Firewall.png";
import ItInfraSupport from "../images/services/IT.png";
import Virtualization from "../images/services/Virtualization.png";

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
        description: "Server Deployment",
        icon: ServerIcon,
      },
      {
        name: "Network Solutions",
        description: "Link Balancer, Wireless Access Point",
        icon: GlobeAltIcon,
      },
    ],
  };
  const second = {
    title: "FireWall / Security / AntiSpam",
    description:
      "We assist in implementing and managing top-tier FireWall, Security, and AntiSpam solutions, ensuring your business remains protected against cyber threats and disruptions.",
    image: Firewall,
    services: [
      {
        name: "Enterprise Firewalls",
        description: "Fortigate, Palo Alto, Juniper",
        icon: FireIcon,
      },
      {
        name: "Unified Threat Management (UTM)",
        description: "WatchGuard, Sophos",
        icon: ShieldCheckIcon,
      },
      {
        name: "Security & Spam Protection",
        description: "Barracuda",
        icon: EnvelopeOpenIcon,
      },
    ],
  };
  const third = {
    title: "Virtualization",
    description:
      "Utilizing industry-leading tools, we help streamline your infrastructure, ensuring better resource management, scalability, and cost savings. Elevate your operations into a seamless virtual environment now!",
    image: Virtualization,
    services: [
      {
        name: "Hypervisor-based Virtualization",
        description:
          "Hyper-V (by Microsoft), VMWARE (by VMware, Inc.)",
        icon: WrenchIcon,
      },
    ],
  };
  const fourth = {
    title: "Virtualization",
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
  const fifth = {
    title: "Virtualization",
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
      <FeatureSectionLeft items={fourth} />
      <FeatureSectionRight items={fifth} />
    </div>
  );
}

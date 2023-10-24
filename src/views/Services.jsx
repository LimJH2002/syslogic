import {
  EnvelopeOpenIcon,
  FireIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ServerIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  WifiIcon,
  WrenchIcon,
  EllipsisHorizontalCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import FeatureSectionLeft from "../components/Services/FeatureSectionLeft";
import FeatureSectionRight from "../components/Services/FeatureSectionRight";
import Firewall from "../images/services/Firewall.png";
import ItInfraSupport from "../images/services/IT.png";
import Virtualization from "../images/services/Virtualization.png";
import Wifi from "../images/services/Wifi.png";
import Email from "../images/services/Email.png";

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
        description: "Hyper-V (by Microsoft), VMWARE (by VMware, Inc.)",
        icon: ServerStackIcon,
      },
    ],
  };
  const fourth = {
    title: "WiFi Solutions",
    description:
      "We offer advanced network management, seamless roaming, and top-tier security protocols. Experience connectivity without compromise.",
    image: Wifi,
    services: [
      {
        name: "Network Management & Stability",
        description: "Wifi Controller, Fast Roaming",
        icon: WifiIcon,
      },
      {
        name: "Security & Authentication",
        description: "Radius Authentication, 802.1x",
        icon: LockClosedIcon,
      },
    ],
  };
  const fifth = {
    title: "Email Server",
    description:
      "Elevate your business communication with tailored email solutions. Ensure seamless, secure, and efficient operations, catered to your business. Choose the best, choose reliability.",
    image: Email,
    services: [
      {
        name: "Microsoft Solutions",
        description:
          "Exchange 2010/2013/2016/2019, MS Office 365 (Cloud Computing)",
        icon: BriefcaseIcon,
      },
      {
        name: "Alternative Platforms",
        description: "Lotus Domino, Gsuite",
        icon: EllipsisHorizontalCircleIcon,
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

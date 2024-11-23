import {
  Calendar,
  ChartNoAxesCombined,
  Home,
  Inbox,
  Settings,
  Users,
} from "lucide-react";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";
import { RiInformation2Line } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { MdBiotech } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { SlPicture } from "react-icons/sl";
import { ImNewspaper } from "react-icons/im";
import { BiSolidContact } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";

export const NAV_LINKS = [
  { label: "About", src: "/about", icon: RiInformation2Line },
  { label: "Services", src: "/services", icon: GrServices },
  { label: "Technology", src: "/technology", icon: MdBiotech },
  { label: "Shop", src: "/shop", icon: GiShop },
  { label: "Gallery", src: "/portfolio", icon: SlPicture },
  { label: "Blog", src: "/blog", icon: ImNewspaper },
  { label: "Contact", src: "/contact", icon: BiSolidContact },
];

export const ADMIN_LINKS = [
  { title: "Home", url: "/", icon: Home },
  { title: "Overview", url: "/overview", icon: ChartNoAxesCombined },
  { title: "Products", url: "/products", icon: Inbox },
  { title: "Orders", url: "/orders", icon: Calendar },
  { title: "Users", url: "/users", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
];

export const SOCIAL_LINKS = [
  {
    href: "https://telegram.org/",
    name: "Telegram",
    icon: LiaTelegramPlane,
  },
  {
    href: "https://www.linkedin.com/",
    name: "Linkedin",
    icon: RiLinkedinFill,
  },
  {
    href: "https://www.facebook.com",
    name: "Facebook",
    icon: RiFacebookLine,
  },
  {
    href: "https://www.instagram.com",
    name: "Instagram",
    icon: RiInstagramLine,
  },
];

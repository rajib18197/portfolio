import { Outlet, useParams } from "react-router-dom";
import MainNav from "./MainNav";
import PageContainer from "./PageContainer";
import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import Social from "./Social";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { GrDocumentPdf } from "react-icons/gr";

const mainNavs = [
  { label: "Home", path: "/home", icon: <HiOutlineHome /> },
  { label: "Projects", path: "/projects", icon: <HiOutlineCalendarDays /> },
  { label: "About", path: "/about", icon: <HiOutlineHomeModern /> },
];

const socials = [
  {
    id: 1,
    label: "Resume",
    href: "https://drive.google.com/uc?export=download&id=17Tt2qOBhJZ8Uw4YOQApo3yPUWUNljhsH",
    download: true,
    icon: <GrDocumentPdf />,
  },
  {
    id: 2,
    label: "GitHub",
    href: "https://github.com/rajib18197",
    icon: <FaGithub />,
  },
  {
    id: 3,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajuzest/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    label: "LeetCode",
    href: "https://leetcode.com/rajib_zest/",
    icon: <SiLeetcode />,
  },
];

export default function AppLayout() {
  const { id } = useParams();
  const scrollcontainer = id ? "true" : "";

  return (
    <PageContainer scrollcontainer={scrollcontainer}>
      <MainNav options={mainNavs} />
      <Social options={socials} />
      <Outlet />
    </PageContainer>
  );
}

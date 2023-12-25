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

const mainNavs = [
  { label: "Home", path: "/home", icon: <HiOutlineHome /> },
  { label: "Projects", path: "/projects", icon: <HiOutlineCalendarDays /> },
  { label: "About", path: "/about", icon: <HiOutlineHomeModern /> },
];

const socials = [
  { id: 1, href: "https://github.com/rajib18197", icon: <FaGithub /> },
  {
    id: 2,
    href: "https://www.linkedin.com/in/rajuzest/",
    icon: <FaLinkedin />,
  },
  { id: 3, href: "https://leetcode.com/rajib_zest/", icon: <SiLeetcode /> },
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

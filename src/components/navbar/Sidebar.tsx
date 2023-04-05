import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  SidebarButton,
  SidebarContainer,
  SidebarDivider,
  SidebarLink,
  SidebarLinkContainer,
  SidebarLinkIcon,
  SidebarLinkLabel,
} from "./Sidebar.styles";
import { useLocation } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillBarChartLineFill,
  BsFillHouseDoorFill,
  BsGearFill,
  BsHeart,
} from "react-icons/bs";

// Array of sidebar links
const linksArray = [
  {
    label: "Home",
    icon: <BsFillHouseDoorFill color="#B8C5D3" />,
    to: "/",
  },

  {
    label: "Bestsellers",
    icon: <BsFillBarChartLineFill color="#B8C5D3" />,
    to: "/bestsellers",
  },
  {
    label: "Favourites",
    icon: <BsHeart color="#B8C5D3" />,
    to: "/favourites",
  },
  {
    label: "Settings",
    icon: <BsGearFill color="#B8C5D3" />,
    to: "/settings",
  },
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  // Web app side bar - implemented fucntionality to show a larger sidebar with labels for each of the pages
  return (
    <SidebarContainer isOpen={sidebarOpen}>
      <SidebarButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <BsFillArrowLeftCircleFill color="#B8C5D3" />
      </SidebarButton>

      {linksArray.map(({ icon, label, to }, i) => (
        <SidebarLinkContainer
          key={i}
          isActive={pathname === to}
          isOpen={sidebarOpen}
        >
          <SidebarLink
            to={to}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <SidebarLinkIcon>{icon}</SidebarLinkIcon>
            {sidebarOpen && (
              <>
                <SidebarLinkLabel>{label}</SidebarLinkLabel>
              </>
            )}
          </SidebarLink>{" "}
          <SidebarDivider isActive={pathname === to} isOpen={sidebarOpen} />
        </SidebarLinkContainer>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

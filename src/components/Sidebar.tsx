// components/Sidebar.tsx
import { Box, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Button", path: "/button" },
    { name: "Input", path: "/input" },
    // { name: "Modal", path: "/modal" },
    { name: "TextArea", path: "/textarea" },
    // { name: "Switch", path: "/switch" },
  ];

  return (
    <Box
      w="200px"
      h="100vh"
      bg="gray.100"
      p={5}
      borderRight="1px"
      borderColor="gray.200"
    >
      <VStack align="stretch">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            style={({ isActive }) => ({
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: isActive ? "#3182ce" : "transparent",
              color: isActive ? "white" : "#2D3748",
              textDecoration: "none",
              display: "block",
            })}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              if (location.pathname !== item.path) {
                target.style.backgroundColor = "#E2E8F0";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              if (location.pathname !== item.path) {
                target.style.backgroundColor = "transparent";
              }
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;

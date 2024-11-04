import { Box, Flex } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Button, Input, Modal, TextArea } from "./routes";

function App() {
  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box flex={1}>
          <Routes>
            <Route path="/" element={<Navigate to="/button" replace />} />
            <Route path="/button" element={<Button />} />
            <Route path="/input" element={<Input />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/textarea" element={<TextArea />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;

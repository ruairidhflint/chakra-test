import { Box, DialogRoot, Flex } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Button, Input, Switch, TextArea } from "./routes";

function App() {
  return (
    <Router>
      <DialogRoot placement="center" size={"md"}>
        <Flex>
          <Sidebar />
          <Box flex={1}>
            <Routes>
              <Route path="/" element={<Navigate to="/button" replace />} />
              <Route path="/button" element={<Button />} />
              <Route path="/input" element={<Input />} />
              {/* <Route path="/modal" element={<Modal />} /> */}
              <Route path="/textarea" element={<TextArea />} />
              {/* <Route path="/switch" element={<Switch />} /> */}
            </Routes>
          </Box>
        </Flex>
      </DialogRoot>
    </Router>
  );
}

export default App;

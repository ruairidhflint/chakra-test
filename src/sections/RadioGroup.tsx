import {
  Box,
  Checkbox,
  Radio,
  RadioGroup as RG,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const RadioGroup = () => {
  const [radioState, setRadioState] = useState({
    radio1: "1",
    radio2: "1",
    radio3: "1",
  });
  const [disabled, setDisabled] = useState(false);

  const handleRadioChange = (name: string, value: string) => {
    setRadioState({ ...radioState, [name]: value });
  };

  return (
    <>
      <Text decoration="underline" margin={8}>
        Radio Buttons
      </Text>
      <RG
        ml={8}
        mb={4}
        size="sm"
        onChange={(e) => handleRadioChange("radio1", e)}
        value={radioState.radio1}
        isDisabled={disabled}
      >
        <Stack direction="row">
          <Radio value="1">Label</Radio>
          <Radio value="2">Label</Radio>
        </Stack>
      </RG>
      <RG
        ml={8}
        mb={4}
        size="md"
        onChange={(e) => handleRadioChange("radio2", e)}
        value={radioState.radio2}
        isDisabled={disabled}
      >
        <Stack direction="row">
          <Radio value="1">Label</Radio>
          <Radio value="2">Label</Radio>
        </Stack>
      </RG>
      <RG
        ml={8}
        mb={4}
        size="lg"
        onChange={(e) => handleRadioChange("radio3", e)}
        value={radioState.radio3}
        isDisabled={disabled}
      >
        <Stack direction="row" mb={4}>
          <Radio value="1">Label</Radio>
          <Radio value="2">Label</Radio>
        </Stack>
      </RG>
      <Box marginLeft={8}>
        <Checkbox onChange={(e) => setDisabled(e.target.checked)}>
          Disabled
        </Checkbox>
      </Box>
    </>
  );
};

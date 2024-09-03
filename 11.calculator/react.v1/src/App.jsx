import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

import Numbers from "./components/Numbers";
import CountButton from "./components/CountButton";

import "./App.css";

export default function App() {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("");
  function applyExpression(countedNumber) {
    setCounts(countedNumber);
    setResult(eval(counts));
  }
  return (
    <div className="App">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Box
          display="flex"
          gap="5px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="200px"
        >
          <Box display="flex" w="100%" justifyContent="between">
            <Text
              display="flex"
              justifyContent="start"
              alignItems="center"
              bg="gray.50"
              w="100%"
              h="38px"
              px="4px"
              borderRadius="8px"
            >
              {counts}
            </Text>
            <Text w="fit-content" h="38px" textColor="tomato">
              {result}
            </Text>
          </Box>
          <Numbers data={counts} onClick={setCounts} />
        </Box>
      </Box>
      <Box display="flex">
        <CountButton data={counts} expression={"+"} onClick={applyExpression} />
      </Box>
    </div>
  );
}

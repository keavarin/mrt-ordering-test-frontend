import React, { useState, useEffect, useContext } from "react";
import { StationContext } from "../../contexts/StationContextProvider";
import {
  Box,
  Flex,
  Icon,
  UnorderedList,
  ListItem,
  Button,IconButton ,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { BsCircleFill } from "react-icons/bs";
function AmountInput({ value, setValue }) {
  return (
    <NumberInput
      step={1}
      defaultValue={1}
      min={1}
      max={30}
      onChange={(value) => setValue(value)}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}

function StationCard({ station,Stepper }) {
  const [value, setValue] = useState(1);
  const { addStation, setAddStation } = useContext(StationContext);

  console.log("value", value);
  const onAddStation = (station) => {
    const index = addStation.findIndex((item) => item.id === station.id);
    console.log(index);
    console.log("addStation.length", addStation.length);

    if (index === -1) {
      if (addStation.length <= 0) {
        setAddStation([...addStation, station]);
      } else if (addStation.length > 0) {
        const newStation = [...addStation, station];
        newStation.splice(0, 1);
        setAddStation(newStation);
      }
    } else {
      const newStation = [...addStation];
      newStation[index].amount = station.amount;
      setAddStation(newStation);
    }
  };

  return (
  <>
    <Flex>
    <UnorderedList>
        <ListItem fontSize="xl" fontWeight="extrabold" as="samp">
         {station.name}{" "}
          <Box>
          <IconButton  
          cursor="pointer"
          color="blue.200"
          // _hover={{ color: "blue.700" }}
          // _focus={{color: "blue"}}
          onClick={() => onAddStation({ ...station, amount: value })}
          isRound
          m={2}
          
          
          />
          </Box>
          
      
          {/* <Button
            _hover={{ color: "black" }}
            color="white"
            backgroundColor="teal"
            m={2}
            maxW={120}
            //disabled={value <= 0}
           
          >
            ตกลง
          </Button> */}
          
        </ListItem>
        <AmountInput size="xs"  maxW={16}  value={value} setValue={setValue} />
      </UnorderedList>  
    </Flex>
   
    </>
  );
}
export default StationCard;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Box, Image, SimpleGrid,Flex } from "@chakra-ui/react";
import StationCard from "./StationCard";


function StationList() {
  const [list, setList] = useState([]);

  const fetchStationList = async () => {
    try {
      const url = "http://localhost:8090/station/";
      const res = await axios.get(url);
      setList(res.data.station);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStationList();
  }, []);

  return (

   
   <Flex>
        {list.map((station) => (
          <StationCard key={station.id} station={station} />
        ))}
 </Flex> 
   
  );
}
export default StationList;

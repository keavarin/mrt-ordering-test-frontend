import React from "react";
import Sidebar from "../Sidebar";
import StationList from "../Stations/StationList";
import Header from "../Header";
import { Box, Flex } from "@chakra-ui/react";
function HomePage() {
  return (
    <> 
    <Header/>
        <Flex align="center" height="100vh" justify="center" p={2} bg="#f3dad8">
          
            <StationList /> 
            <Sidebar />
     
         </Flex>
        
       
    </>
  );
}
export default HomePage;

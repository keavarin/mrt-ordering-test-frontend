import React, { useState, useEffect, useContext } from "react";

import { Text,Flex } from "@chakra-ui/react";


function Header() {
 

  return (
      <Flex bg="#f6f6f6" height="10vh" p={4}> 
           <Text fontSize="4xl" fontWeight="extrabold" as="samp" s>Welcome</Text>
       </Flex>
    

  );
}
export default Header;

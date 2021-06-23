import React, { useContext, useState } from "react";
import axios from "axios";
import { Box, Flex, Text, Button, Input, Icon} from "@chakra-ui/react";
import { StationContext } from "../contexts/StationContextProvider";



function Sidebar() {
  const { addStation, setAddStation, setMoney, money } =
    useContext(StationContext);

  const [order_id, setOrder_Id] = useState(null);
  const [showInput, setShowInput] = useState(false);
  
  console.log("showInput", showInput);

  const totalPrice = addStation.reduce((total, station) => {
    return total + +station.price * station.amount;
  }, 0);

  const changeMoney = money - totalPrice;

  function showMoney() {
    if (changeMoney > 0 && changeMoney < 5) {
      const forTwo = changeMoney / 2;
      const modTwo = changeMoney % 2;
      return (<>
         <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
         {Math.floor(forTwo) ===0? null:<Text>เหรียญ 2 บาท: {Math.floor(forTwo)}</Text>}
        {modTwo === 0 ? null: <Text>เหรียญ 1 บาท: {modTwo}</Text>}
        </Box>
        </>
      );
    } else if (changeMoney > 5 && changeMoney < 10) {
      if (changeMoney / 5 >= 0) {
        const changeFive = changeMoney / 5;
        const modFive = changeMoney % 5;
        const forTwo = modFive / 2;
        const modTwo = modFive % 2;
        return (
          <> 
          <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
          {Math.floor(changeFive) ===0? null:<Text>เหรียญ 5 บาท: {Math.floor(changeFive)}</Text> }
          {Math.floor(forTwo) ===0? null:<Text>เหรียญ 2 บาท: {Math.floor(forTwo)}</Text>}
          {modTwo ===0?null: <Text>เหรียญ 1 บาท: {modTwo} </Text>}
          </Box>
          </>
        );
      }
    } else {
      if (changeMoney / 10 >= 0) {
        const changeTen = changeMoney / 10;
        const modTen = changeMoney % 10;
        const forFive = modTen/5;
        const modFive = modTen %5;
        const forTwo = modFive / 2;
        const modTwo = modFive % 2;

        if (modTen % 2 === 0) {
          const divTwo = modTen / 2;
          return (
            <>
             <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
             {Math.floor(changeTen) ===0? null:<Text>เหรียญ 10 บาท: {Math.floor(changeTen)}</Text>}
             {divTwo===0?null:<Text>เหรียญ 2 บาท: {divTwo} </Text>}
            </Box>
             </>
          );
        }

        return (
          <>
          <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
          {Math.floor(changeTen) ===0? null:<Text>เหรียญ 10 บาท: {Math.floor(changeTen)}</Text>}
          {Math.floor(forFive) ===0? null:<Text>เหรียญ 5 บาท: {Math.floor(forFive)}</Text> }
          {Math.floor(forTwo) ===0? null:<Text>เหรียญ 2 บาท: {Math.floor(forTwo)}</Text>}
          {modTwo===0? null:<Text>เหรียญ 1 บาท: {modTwo}</Text>}
          </Box>
          </>
        );
      }
      return (
         <>
        <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px"> ShowMoney </Box>
        </>)
    }
  }
  console.log(typeof totalPrice);

  function moneyGuide() {
    if (totalPrice > 0 && totalPrice <= 20) {
      if (totalPrice / 20 === 0) {
        const forTwenty = totalPrice / 20;
        return  (<Box border="1px solid black" shadow="lg" m={4} p={2} width="300px"><Text>แบงค์ 20: {forTwenty}</Text></Box>)
      } else {
        const forTen = totalPrice / 10;
        const modTen = totalPrice % 10;
        const forFive = modTen/5;
        const modFive = modTen%5;
        const forTwo = modFive / 2;
        const modTwo = modFive % 2;
        return (<>
          <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
          {Math.floor(forTen) ===0? null:<Text>เหรียญ 10 บาท: {Math.floor(forTen)} </Text>}
          {Math.floor(forFive) ===0? null:<Text>เหรียญ 5 บาท: {Math.floor(forFive)}</Text> }
          {Math.floor(forTwo) ===0? null:<Text>เหรียญ 2 บาท: {Math.floor(forTwo)}</Text> }
          {modTwo ===0? null:<Text>เหรียญ 1 บาท: {modTwo}</Text>}
          </Box>
          </>
         
        );
      }
    } else if (totalPrice > 20 && totalPrice < 50) {
      if (totalPrice % 20 === 0) {
        const forTwenty = totalPrice / 20;
        return  <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px"><Text>แบงค์ 20: {forTwenty}</Text></Box>
      } else {
        const forTwenty = totalPrice / 20;
        const modTwenty = totalPrice % 20;
        const forTen = modTwenty / 10;
        const modTen = modTwenty % 10;
        const forFive = modTen/5;
        const modFive = modTen%5;
        const forTwo = modFive / 2;
        const modTwo = modFive % 2;
          return (<>
           <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
           {Math.floor(forTwenty) ===0? null:<Text>เเบงค์ 20: {Math.floor(forTwenty)}</Text>}
           {Math.floor(forTen) ===0? null: <Text>เหรียญ 10 บาท : {Math.floor(forTen)} </Text>}
           {Math.floor(forFive) ===0? null: <Text>เหรียญ 5 บาท : {Math.floor(forFive)} </Text>}
           {Math.floor(forTwo) ===0? null: <Text>เหรียญ 2 บาท : {Math.floor(forTwo)} </Text>}
           {modTwo ===0? null:  <Text>เหรียญ 1 บาท: {modTwo}</Text>}  
             </Box> </>
            
          );
      }
    } else if (totalPrice >= 50 && totalPrice < 100) {
      if (totalPrice % 50 === 0) {
        const forFifty = totalPrice / 50;
        return  <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px"><Text>แบงค์ 50: {forFifty}</Text></Box> 
      } else if (totalPrice % 20 === 0) {
        const forTwenty = totalPrice / 20;
        return  <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px"><Text>แบงค์ 20: {forTwenty}</Text></Box>
      } else {
        const forFifty = totalPrice / 50;
        const modFifty = totalPrice % 50;
        const forTwenty = modFifty / 20;
        const modTwenty = modFifty % 20;
        const forTen = modTwenty / 10;
        const modTen = modTwenty % 10;
        const forFive = modTen/5;
        const modFive = modTen%5;
        const forTwo = modFive / 2;
        const modTwo = modFive % 2;

        
       return (
            <>
          <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
            {Math.floor(forFifty) ===0? null:<Text>เเบงค์ 50: {Math.floor(forFifty)}  </Text>}
            {Math.floor(forTwenty) ===0? null:<Text>เเบงค์ 20: {Math.floor(forTwenty)}</Text>}
            {Math.floor(forTen) ===0? null:<Text>เหรียญ 10 บาท : {Math.floor(forTen)}</Text>}
            {Math.floor(forFive) ===0? null:<Text>เหรียญ 5 บาท : {Math.floor(forFive)}</Text>}
            {Math.floor(forTwo) ===0? null: <Text>เหรียญ 2 บาท : {Math.floor(forTwo)}</Text>}
            {modTwo===0? null:<Text>เหรียญ 1 บาท: {modTwo}</Text>}
          </Box>
          </>
          );
   
      }
      
      // price> 100
    } else {
      if(totalPrice%100 === 0){
      const forHundred = totalPrice / 100;
      return  <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px"><Text>แบงค์ 100: {forHundred}</Text></Box>
      }
      // else {
        // % ไม่ลงตัวซักอย่าง
        const forHundred = totalPrice / 100;
        const modHundred = totalPrice % 100;


        //console.log("modHun",modHundred);
        // if (modHundred != 0) {
          const forFifty = modHundred / 50;
          const modFifty =  modHundred % 50;
          const forTwenty = modFifty / 20;
          const modTwenty = modFifty % 20;
          const forTen = modTwenty / 10;
          const modTen = modTwenty % 10;  
          const forFive = modTen/5;
          const modFive= modTen %5;
          const forTwo = modFive/2;
          const modTwo = modFive % 2;
            return (<>
              <Box border="1px solid black" shadow="lg" m={4} p={2} width="300px">
              {Math.floor(forHundred) ===0? null:<Text>แบงค์ 100: {Math.floor(forHundred)}</Text>}
              {Math.floor(forFifty) ===0? null:<Text>เเบงค์ 50: {Math.floor(forFifty)}</Text>}
              {Math.floor(forTwenty) ===0? null:<Text>เเบงค์ 20: {Math.floor(forTwenty)}</Text>}
              {Math.floor(forTen) ===0? null:<Text>เหรียญ 10 บาท : {Math.floor(forTen)}</Text>}
              {Math.floor(forFive) ===0? null:<Text>เหรียญ 5 บาท: {Math.floor(forFive)}</Text>}
              {Math.floor(forTwo) ===0? null:<Text>เหรียญ 2 บาท: {Math.floor(forTwo)}</Text>}
              {modTwo===0? null:<Text>เหรียญ 1 บาท: {modTwo}</Text>}
              </Box>
              </>
            );
         
        // }
       
      // }
     
    }
 return (<Text>moneyGuide</Text>)
 
  }
 
  const handlerSubmitOrder = async (i) => {
    console.log(i);
    try {
      const res = await axios.post("http://localhost:8090/order/", {
        stationId: i.id,
        amount: i.amount,
      });

      setOrder_Id(res.data.order.id);
      setShowInput(true);
      
    } catch (err) {
      console.log(err);
    }
  };

  const handlerSubmitPayment = async (e) => {
    e.preventDefault();
    try {
      const payment = await axios.post("http://localhost:8090/payment/", {
        moneyInput: money,
        orderId: order_id,
      });
      console.log("payment", payment);
      alert("Success")
      setShowInput(false);
      const newStation = []
      setAddStation(newStation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex
        bg="#dd7596"
        p={4}
        height="100vh"
        width="60vw"
        color="white"
        direction="column"
        align="center"
      >
        <Flex >
          <Text fontSize="2xl" fontWeight="extrabold" as="samp">
            สถานีปลายทาง  

          </Text>
        </Flex>

        <Flex  p={4} justify="center">
          <Text fontSize="2xl" fontWeight="extrabold" as="samp" color="black">
            {addStation.map((i) => (
              <>
                <Flex 
                border="1px solid black"
                justify="center"
                >{i.name}</Flex>

                <Flex
                 p={4}
                 justify="center"> 
                  <Text
                  fontSize="2xl"
                  fontWeight="extrabold"
                  as="samp"
                  color="white"
                >
                  ค่าโดยสาร 
                  </Text>
                  </Flex>

                  <Flex 
                  border="1px solid black"
                  justify="center">
                  <Text
                    fontSize="2xl"
                    fontWeight="extrabold"
                    as="samp"
                    color="black"
                
                  >
                    {i.price} บาท
                  </Text>
                 </Flex>
                 <Flex justify="center">
                  <Text
                  fontSize="2xl"
                  fontWeight="extrabold"
                  as="samp"
                  color="white"
                >
                  จำนวน{" "}
                  <Text
                    fontSize="2xl"
                    fontWeight="extrabold"
                    as="samp"
                    color="black"
                  >
                    {i.amount} คน
                  </Text>
                </Text>
                </Flex>
                <Flex justify="center">
                  <Text
                  fontSize="2xl"
                  fontWeight="extrabold"
                  as="samp"
                  color="white"
                >
                  ราคาทั้งหมด{" "} </Text>
                </Flex>
                <Flex justify="center" border="1px solid black">
                  <Text
                    fontSize="2xl"
                    fontWeight="extrabold"
                    as="samp"
                    color="black"
                  >
                    {totalPrice.toFixed(2)} บาท
                  </Text>
                  </Flex>

                  {showInput === true? 
                  <Flex justify="center">
                  <Text 
                    fontSize="2xl"
                    fontWeight="extrabold"
                    as="samp"
                    color="white"> เงินทอน</Text>
                    </Flex>:
                    <Flex justify="center">
                  <Text 
                    fontSize="2xl"
                    fontWeight="extrabold"
                    as="samp"
                    color="white"> กรุณาใส่เงิน</Text>
                    </Flex>
                  
                  }
                
                  
                   {showInput === true ? showMoney() : moneyGuide()}
               
                <Flex justify="center"> 
                  {showInput === false ? (
                  <Button onClick={() => handlerSubmitOrder(i)}>ตกลง</Button>
                ) : (
                  <Box>
                    <Input
                      variant="filled"
                      type="number"
                      m={2}
                      w={200}
                      placeholder="กรุณากรอกจำนวนเงิน"
                      name="money"
                      value={money}
                      onChange={(e) => setMoney(e.target.value)}
                    />
                    <Button onClick={(e) => handlerSubmitPayment(e)}>
                      ตกลง
                    </Button>
                  </Box>
                )}</Flex>
              </>
            ))}

          </Text>
        </Flex>
      </Flex>
    </>
  );
}
export default Sidebar;

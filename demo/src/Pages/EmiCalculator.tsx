import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChakraSlider } from "../Components/slider";
import { Link } from "react-router-dom";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(5000);
  const [loanTenure, setLoanTenure] = useState<number>(0.25);
  const [loanRate, setLoanRate] = useState<number>(10.25);
  const [emi, setEmi] = useState<number>(0);

  const handleLoanAmount = (e: number) => {
    setLoanAmount(e);
  };

  const handleLoanTenure = (e: number) => {
    setLoanTenure(e);
  };

  const handleLoanRate = (e: number) => {
    setLoanRate(e);
  };

  const calculateEMI = () => {
    const monthlyRate = loanRate / 120;
    const totalMonths = loanTenure * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    setEmi(Number(emi.toFixed(1)));
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, loanRate, loanTenure]);

  return (
    <div>
      <Box
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        height={"100px"}
        color="white"
        backgroundColor={"#191970"}
        marginTop={"50px"}
      >
        <Box fontSize={"40px"}>Personal Loan EMI Calculator</Box>
        <Box fontSize={"20px"}>
          Calculate your EMI and choose the most suitable product for you
        </Box>
      </Box>

      <Box
        height={"400px"}
        width="80%"
        margin="auto"
        marginBottom={"100px"}
        marginTop={"100px"}
      >
        <Box
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          EMI CALCULATOR
        </Box>
        <Box display={"flex"}>
          <Box width={"50%"}>
            <ChakraSlider
              name={"loan amount"}
              amount="5000"
              width="70%"
              min="2000"
              max="50000"
              steps="2000"
              onChange={handleLoanAmount}
            />
            <ChakraSlider
              name={"Tenure"}
              amount="0.25"
              width="70%"
              min="0.25"
              max="3.5"
              steps="0.25"
              onChange={handleLoanTenure}
            />
            <ChakraSlider
              name={"Rate Of Interest"}
              amount="10.25"
              width="70%"
              min="10.25"
              max="30"
              steps="0.25"
              onChange={handleLoanRate}
            />
          </Box>
          <Box marginTop={"5%"} marginLeft={"10%"}>
            <Box>Your Emi Amount</Box>
            <Box fontSize={"30px"}>{emi}</Box>
            <Box fontSize={"24px"}>Total Payment</Box>
            <Box>{(emi * +loanTenure * 12).toFixed(0)}</Box>
            <Box fontSize={"24px"}>Total Interest</Box>
            <Box>{(emi * +loanTenure * 12 - loanAmount).toFixed(0)}</Box>
            <Link to="/loanApplicationPage">
              <Button
                fontSize={"24px"}
                margin={"10px 0px 40px 0px"}
                backgroundColor={"pink.300"}
                color={"white"}
                _hover={{ backgroundColor: "pink.200" }}
              >
                Apply Loan{" "}
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default EmiCalculator;

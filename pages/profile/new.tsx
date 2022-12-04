import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect } from "react";


const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const web3 = createAlchemyWeb3("https://eth-goerli.g.alchemy.com/v2/8wj0XvCGeFrN96hHA7guwOxITF4OJmKd");

const Progress = () => {


  useEffect(()=>{

  },[])

  const MultiSigABI = require("../../multiFactory-abi.json");
  const contractAddress = "0x92457D50d9F8E7B493bd552A57e4f35dF2B28e84" ;



   const MultiSigContract = new web3.eth.Contract(
    MultiSigABI,
    contractAddress
  );






  return (
    <div className="flex flex-col px-4 py-4">
      <h2 className="text-lg bg-slate-300 py-2 px-4 w-max">
        Document: Loan Application
      </h2>
      <h2 className="text-lg py-8 w-max">Parties:</h2>
      <div className="flex flex-col gap-4 mt-4">
        <div className="border-2 border-gray-200 rounded-lg w-max py-4 px-4">
          <p> <UserOutlined /> Party 1</p>
          <Button size="large" className="mt-4" >Approve</Button>
        </div>
        <div className="mt-8 border-2 border-gray-200 rounded-lg w-max py-4 px-4">
          <p> <UserOutlined /> Party 2</p>
          <Button size="large" className="mt-4">Approve</Button>
        </div>
      </div>
    </div>
  );
};

export default Progress;



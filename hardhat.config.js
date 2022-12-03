require("dotenv").config();
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");

const GOERLI_RPC_URL = process.env.REACT_APP_ALCHEMY_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9" ,
  defaultNetwork: "goerli",
     networks: {
        hardhat: {},
        goerli: { 
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId : 5
           },
       },
  };

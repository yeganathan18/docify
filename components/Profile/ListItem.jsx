import Moralis from "moralis";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { useState } from "react";

const ListItem = ({ data }) => {
  var divide = data?.content?.split(":");
  var proofs = divide[0].split(",");
  const router = useRouter();
  const [noSBT, setNoSBT] = useState(false);

  const checkSBT = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];
    provider.on("accountsChanged", function (accounts) {
      account = accounts[0];
      console.log(address); // Print new address
    });

    const signer = provider.getSigner();

    const address = await signer.getAddress();

    await Moralis.start({
      apiKey:
        "clO85Cvlpk1KLysgcm6JUQddgo5192tXJnVR4bwNqNZgxaRJYBi8wDbvGW4kHBAD",
    });

    const nftList = await Moralis.EvmApi.nft.getNFTOwners({
      address: "0x57b2203d27788448f07f56f670850067c1009cfd",
      chain: "0x13881",
    });

    if(address.toLowerCase() === nftList.result[0]["_data"].minterAddress){
        router.push('/verify')
    } else {
        setNoSBT(true)
    }
  };
  // var approvers = divide[1].split(",");
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-gray-50 m-5 px-10 py-5">
      <div className="text-xl font-bold">{data.name}</div>
      <div>{data.description}</div>
      <div className=" font-semibold text-m">Required Proofs</div>
      <ul className=" list-disc">
        {proofs && proofs.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <div className="flex w-full justify-end">
        <div
          onClick={() => checkSBT()}
          className=" px-5 py-2 bg-pink-500 rounded-lg shadow-lg text-white hover:cursor-pointer"
        >
          Apply
        </div>
      </div>
      {noSBT ?<div className=" ">Please get the kyc sbt verified using <a href="https://ur5ncf.csb.app/" rel="noreferrer" target="_blank" className="text-purple-800 underline">polygon id</a>!</div> : <></>}
    </div>
  );
};

export default ListItem;

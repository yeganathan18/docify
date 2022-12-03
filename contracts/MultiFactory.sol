// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./MultiSigWallet.sol";

contract MultiFactory{
    // factory contract onwer
   //address private immutable multiSigFactoryOwner;

      address  mainowner ; 
       

    // struct to store all the data of MultiSigWallet and MultiFactory contract
    struct multiFactoryStruct {
        address[] onwers;
        uint required;

        
    }

    // searching the struct data of MultiSigWallet and MultiSigWallet factory using owner address
    mapping(address => multiFactoryStruct) public allMultiSigWallet;
    // Requestaddress 
    // owner address, onwer address will be used check which address own/create a new multisg wallet
    mapping(address => address) public searchByAddress;

    // number of MultiSigWallet created
    uint256 public numOfMultiSigWallet;

    /**
     * @dev constructor to get the owner address of this contract factory
     */
    // constructor() {
       
    // }


    //allmultisigwallet[msg.sender] -> person interacting with our 
    // contract 


    /**
     * @dev function to create the contract MultiSigWallet
     */
    function createMultiSigWallet(address[] memory _onwers, uint _required) public {
        // Create a new Wallet contract
        MultiSigWallet multiSigWallet =  new MultiSigWallet(
            _onwers,
            _required ,
            mainowner
        );
        // Increment the number of MultiSigWallet
        numOfMultiSigWallet++;

        // Add the new MultiSigWallet to the mapping
        allMultiSigWallet[msg.sender] = (
            multiFactoryStruct(
                _onwers,
                _required
    
            )
        );

        // search the profile by using owner address
        searchByAddress[msg.sender] = address(multiSigWallet);
    }
 

    function setMainOwnerAddress  (address _mainowneraddress) public
    {
        mainowner =  _mainowneraddress ;
    }

    // function to withdraw the fund from contract factory
    function withdrawRequest() public view  {
        require(msg.sender == mainowner   , "ONLY_ONWER_CAN_CALL_FUNCTION");
        // sending money to contract owner
       // (bool success, ) = mainowner.call{value: amount}("");
        //require(success, "TRANSFER_FAILED");
    }

    // get the balance of the contract
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // get the address of this contract
    function getAddressOfContract() public view returns (address) {
        return address(this);
    }

    // get the address of trustFactory contract owner
    // function getAddressOfMainOwner() public view returns (address) {
    //     return mainowner;
    // }

    // receive function is used to receive Ether when msg.data is empty
    receive() external payable {}

    // Fallback function is used to receive Ether when msg.data is NOT empty
    fallback() external payable {}
}
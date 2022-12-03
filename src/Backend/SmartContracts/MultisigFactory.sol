// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./MultiSig.sol";

contract MultiFactory{
    // factory contract onwer
    address private immutable multiSigFactoryOwner;

    // struct to store all the data of MultiSigWallet and MultiFactory contract
    
    
    struct multiFactoryStruct {
        address[] onwers;
        uint required;
        address multiSigFactoryOwner;
    }

    // Post insurance -> lens protocol 



    // searching the struct data of MultiSigWallet and MultiSigWallet factory using owner address
    mapping(address => multiFactoryStruct) public allMultiSigWallet;
    // insurance company : Address 1 , Address 2
    // 


    // owner address, onwer address will be used check which address own/create a new multisg wallet
    mapping(address => address) public searchByAddress;

    // number of MultiSigWallet created
    uint256 public numOfMultiSigWallet;

    /**
     * @dev constructor to get the owner address of this contract factory
     */
    constructor(address _multiSigFactoryOwner) {
        multiSigFactoryOwner = _multiSigFactoryOwner;
    }

    /**
     * @dev function to create the contract MultiSigWallet
     */
    function createMultiSigWallet(address[] memory _onwers, uint _required) public {
        // Create a new Wallet contract
        MultiSigWallet multiSigWallet =  new MultiSigWallet(
            _onwers,
            _required
        );
        // Increment the number of MultiSigWallet
        numOfMultiSigWallet++;

        // Add the new MultiSigWallet to the mapping
        allMultiSigWallet[msg.sender] = (
            multiFactoryStruct(
                _onwers,
                _required,
                address(this)
            )
        );

        // search the profile by using owner address
        searchByAddress[msg.sender] = address(multiSigWallet);
    }

    // function to withdraw the fund from contract factory
    function withdraw(uint256 amount) external payable {
        require(msg.sender == multiSigFactoryOwner, "ONLY_ONWER_CAN_CALL_FUNCTION");
        // sending money to contract owner
        (bool success, ) = multiSigFactoryOwner.call{value: amount}("");
        require(success, "TRANSFER_FAILED");
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
    function getAddressOfMultiSigFactoryOwner() public view returns (address) {
        return multiSigFactoryOwner;
    }

    // receive function is used to receive Ether when msg.data is empty
    receive() external payable {}

    // Fallback function is used to receive Ether when msg.data is NOT empty
    fallback() external payable {}
}
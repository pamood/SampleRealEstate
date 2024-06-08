// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0; 
  
contract SimpleRealEstate { 
    address public owner; 
    string public propertyAddress; 
    uint public propertyValue; 
  
    event PropertyTransferred(address indexed from, address indexed to, string 
propertyAddress, uint value); 
  
    constructor(string memory _propertyAddress, uint _propertyValue) { 
        owner = msg.sender; 
        propertyAddress = _propertyAddress; 
        propertyValue = _propertyValue; 
    } 
  
    modifier onlyOwner() { 
        require(msg.sender == owner, "Only the owner can transfer the property"); 
        _; 
    } 
  
    function transferProperty(address _newOwner) public onlyOwner { 
        address previousOwner = owner; 
        owner = _newOwner; 
        emit PropertyTransferred(previousOwner, _newOwner, propertyAddress, 
propertyValue); 
    } 
  
    function getPropertyDetails() public view returns (address, string memory, 
uint) { 
        return (owner, propertyAddress, propertyValue); 
    } 
} 

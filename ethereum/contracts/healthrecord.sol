pragma solidity ^0.4.17;
contract RecordFactory{
    address[] deployedrecords;

    function createRecord() public{
        address newRecord = new healthrecord(msg.sender);
        deployedrecords.push(newRecord);
    }

    function getDeployedRecords() public view returns(address[]){
        return deployedrecords;
    }
}
contract healthrecord{
    string public healthrecordhash;
    address public manager;

    function healthrecord(address owner) public{
        manager=owner;
    }

    function sethash(string hash) public{
        healthrecordhash=hash;
    }

    function gethash() public view returns(string){
        return healthrecordhash;
    }
}
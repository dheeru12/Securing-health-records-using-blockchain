pragma solidity ^0.4.17;

contract healthrecord{
    string public healthrecordhash;

    function sethash(string hash) public{
        healthrecordhash=hash;
    }

    function gethash() public view returns(string){
        return healthrecordhash;
    }
}
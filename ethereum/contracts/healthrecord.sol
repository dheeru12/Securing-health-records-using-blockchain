pragma solidity ^0.4.17;
contract RecordFactory{
    address[] deployedrecords;
    mapping(address=>bool) records;
    address manager;
    
    struct Doctor{
        address doc;
        string imageHash;
        string speciality;
        string description;
        
    }
    
    function RecordFactory() public{
        manager=msg.sender;
    }
    
    mapping(address=>Doctor) public docs;
    
    address[] public doctors;

    function createRecord(string name,string age,string gender,string height,string weight,address doctorAddress,string prescriptionHash,string mriHash,string xrayHash,string imageHash) public {
        require(!records[msg.sender]);
        healthrecord newRecord = new healthrecord(msg.sender,name,age,gender,height,weight,doctorAddress,imageHash);
        records[msg.sender]=true;
        deployedrecords.push(address(newRecord));
        if(bytes(mriHash).length!=0){
            newRecord.setmriHash(doctorAddress,mriHash);
        }
        if(bytes(xrayHash).length!=0){
            newRecord.setxrayHash(doctorAddress,xrayHash);
        }
        if(bytes(prescriptionHash).length!=0){
            newRecord.setPrescriptionHash(doctorAddress,prescriptionHash);
        }
    }

    function getDeployedRecords() public view returns(address[]){
        return deployedrecords;
    }
    
    function registerDoctor(address sender,string _imageHash,string _speciality,string _description) public{
        require(msg.sender==manager);
        Doctor memory doc = Doctor({
            doc:sender,
            imageHash:_imageHash,
            speciality:_speciality,
            description:_description
        });
        docs[msg.sender]=doc;
        doctors.push(msg.sender);
    }
    
    function getDoctors() public view returns(address[]){
        return doctors;
    }
}

contract healthrecord{
    string[] private prescriptionHash;
    string[] private xrayHash;
    string[] private mriHash;
    string private profileHash;
    address private manager;
    address private doctor;
    string private name;
    string private age;
    string private gender;
    string private height;
    string private weight;
    
    function healthrecord(address owner,string _name,string _age,string _gender,string _height,string _weight,address doctorAddress,string _profileHash) public{
        manager=owner;
        name=_name;
        age=_age;
        gender=_gender;
        height=_height;
        weight=_weight;
        doctor=doctorAddress;
        profileHash=_profileHash;
    }
    
    modifier restricted(){
         require(msg.sender==manager||msg.sender==doctor);
         _;
    }

    function setPrescriptionHash(address sender,string hash) public{
        require(sender==doctor);
        prescriptionHash.push(hash);
    }
    
    function setxrayHash(address sender,string hash) public{
        require(sender==doctor);
        xrayHash.push(hash);
    }
    
    function setmriHash(address sender,string hash) public{
        require(sender==doctor);
        mriHash.push(hash);
    }
    
    function getDetails() restricted public view returns(string,string,string,string,string){
        return (name,age,height,weight,gender);
    }
    
    function getPrescription(uint index) restricted public view returns(string){
        return prescriptionHash[index];
    }
    
    function getPrescriptionLength() restricted public view returns(uint){
        return prescriptionHash.length;
    }
    
    function getMri(uint index) restricted public view returns(string){
        return mriHash[index];
    }
    
    function getMriLength() restricted public view returns(uint){
        return mriHash.length;
    }
    
    function getXray(uint index) restricted public view returns(string){
        return xrayHash[index];
    }
    
    function getXrayLength() restricted public view returns(uint){
        return xrayHash.length;
    }

}
pragma solidity >=0.4.18;

contract YourContract {
    address public owner = 0x3a78B26e56AB0557075eAFbFFE2845a4e403a94A;
    uint256 public number;

    constructor() public {
        number = 0;
    }

    function someFunction(uint256 _newNumber) public {
        number = _newNumber;
    }
}

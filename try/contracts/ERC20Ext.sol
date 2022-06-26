//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Ext is ERC20,Ownable {

    using SafeMath for uint256;

    uint public feeRatio;
    uint public burnRatio;
    address public feeAddress;
    
    constructor() ERC20('THIS IS A EXTEND TOKEN','ADT'){}

    function set(uint _feeRatio, uint _burnRatio, address _feeAddress) public onlyOwner{
        feeRatio = _feeRatio;
        burnRatio = _burnRatio;
        feeAddress = _feeAddress;
    
    }
    function mint(address _account, uint256 _amount) public onlyOwner{
        _mint(_account,_amount);
    }

    function burn (uint256 _amount) public {
     require(balanceOf(msg.sender)>= _amount,"burn amount exceeds balance");
     _burn(msg.sender,_amount);
    }


}
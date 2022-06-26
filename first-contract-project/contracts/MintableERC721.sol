pragma solidity 0.8.15;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract MintablleERC721 is ERC721URIStorage,Ownable {
    uint256 public _CUR_TOKENID_;

constructor(string memory _name,  string memory _symbol) ERC721(_name, _symbol) {}

    function mint(
        address[] calldata receivers,
        string[] calldata uris
          ) external onlyOwner{
              require(receivers.length == uris.length,"PARAMS_NOT_MATCH");
              for (uint256 i = 0; i<receivers.length; i++){
                  _safeMint(receivers[i],_CUR_TOKENID_);
                  _setTokenURI(_CUR_TOKENID_, uris[i]);
                   _CUR_TOKENID_+=1;

              }
          }
}


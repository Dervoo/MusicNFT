// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Nft is Ownable, ERC721URIStorage {
  using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory _name, string memory _symbol, address receiver, string[] memory uris) public ERC721(_name, _symbol) {
    for (uint256 i = 0; i < uris.length; i++) {
      mint(receiver, uris[i]);
    }
    }
    function mint(address receiver, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment(); 
         uint256 newItemId = _tokenIds.current();
    _mint(receiver, newItemId);
    _setTokenURI(newItemId, tokenURI);
    return newItemId;
    }
}
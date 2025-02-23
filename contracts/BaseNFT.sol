// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BaseNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Trait {
        string traitType;
        string value;
    }

    mapping(uint256 => Trait[]) public tokenTraits;
    
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mint(address to, string[] memory traitTypes, string[] memory traitValues) public returns (uint256) {
        require(traitTypes.length == traitValues.length, "Traits mismatch");
        
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(to, newTokenId);

        for(uint i = 0; i < traitTypes.length; i++) {
            tokenTraits[newTokenId].push(Trait(traitTypes[i], traitValues[i]));
        }

        return newTokenId;
    }

    function getTraits(uint256 tokenId) public view returns (Trait[] memory) {
        require(_exists(tokenId), "Token does not exist");
        return tokenTraits[tokenId];
    }
}
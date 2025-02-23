// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MutantNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    enum NFTType { Type1, Type2 }

    struct NFTAttributes {
        NFTType nftType;
        uint256 strength;
        uint256 agility;
        uint256 intelligence;
    }

    mapping(uint256 => NFTAttributes) public nftAttributes;

    constructor() ERC721("MutantNFT", "MNFT") {}

    function mint(address to, NFTType nftType) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _safeMint(to, newTokenId);

        nftAttributes[newTokenId] = NFTAttributes(
            nftType,
            uint256(keccak256(abi.encodePacked(block.timestamp, newTokenId, "strength"))) % 100 + 1,
            uint256(keccak256(abi.encodePacked(block.timestamp, newTokenId, "agility"))) % 100 + 1,
            uint256(keccak256(abi.encodePacked(block.timestamp, newTokenId, "intelligence"))) % 100 + 1
        );

        return newTokenId;
    }

    function getNFTAttributes(uint256 tokenId) public view returns (NFTAttributes memory) {
        require(_exists(tokenId), "Token does not exist");
        return nftAttributes[tokenId];
    }
}


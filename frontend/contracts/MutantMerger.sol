// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MutantNFT.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract MutantMerger is IERC721Receiver {
    MutantNFT public mutantNFT;

    constructor(address _mutantNFTAddress) {
        mutantNFT = MutantNFT(_mutantNFTAddress);
    }

    function mergeNFTs(uint256 tokenId1, uint256 tokenId2) public {
        require(mutantNFT.ownerOf(tokenId1) == msg.sender, "You don't own token 1");
        require(mutantNFT.ownerOf(tokenId2) == msg.sender, "You don't own token 2");

        MutantNFT.NFTAttributes memory attr1 = mutantNFT.getNFTAttributes(tokenId1);
        MutantNFT.NFTAttributes memory attr2 = mutantNFT.getNFTAttributes(tokenId2);

        require(attr1.nftType != attr2.nftType, "NFTs must be of different types");

        // Burn the original NFTs
        mutantNFT.transferFrom(msg.sender, address(this), tokenId1);
        mutantNFT.transferFrom(msg.sender, address(this), tokenId2);

        // Mint a new merged NFT
        uint256 newTokenId = mutantNFT.mint(msg.sender, MutantNFT.NFTType.Type1);

        // Set attributes for the new merged NFT
        MutantNFT.NFTAttributes memory newAttr = MutantNFT.NFTAttributes(
            MutantNFT.NFTType.Type1,
            (attr1.strength + attr2.strength) / 2,
            (attr1.agility + attr2.agility) / 2,
            (attr1.intelligence + attr2.intelligence) / 2
        );

        // Update the attributes of the new NFT (this would require adding a function to the MutantNFT contract)
        // For simplicity, we'll assume this function exists
        // mutantNFT.updateAttributes(newTokenId, newAttr);
    }

    function onERC721Received(address, address, uint256, bytes memory) public virtual override returns (bytes4) {
        return this.onERC721Received.selector;
    }
}


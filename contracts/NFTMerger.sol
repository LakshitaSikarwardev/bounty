// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./MutantNFT.sol";

contract NFTMerger {
    MutantNFT public nft1;
    MutantNFT public nft2;
    MutantNFT public mergedNFT;

    constructor(address _nft1, address _nft2, address _mergedNFT) {
        nft1 = MutantNFT(_nft1);
        nft2 = MutantNFT(_nft2);
        mergedNFT = MutantNFT(_mergedNFT);
    }

    function mergeNFTs(uint256 token1Id, uint256 token2Id) public {
        require(nft1.ownerOf(token1Id) == msg.sender, "Not owner of token1");
        require(nft2.ownerOf(token2Id) == msg.sender, "Not owner of token2");

        // Transfer NFTs to this contract
        nft1.transferFrom(msg.sender, address(this), token1Id);
        nft2.transferFrom(msg.sender, address(this), token2Id);

        // Get traits from both NFTs
        BaseNFT.Trait[] memory traits1 = nft1.getTraits(token1Id);
        BaseNFT.Trait[] memory traits2 = nft2.getTraits(token2Id);

        // Combine traits
        string[] memory newTraitTypes = new string[](traits1.length + traits2.length);
        string[] memory newTraitValues = new string[](traits1.length + traits2.length);

        for(uint i = 0; i < traits1.length; i++) {
            newTraitTypes[i] = traits1[i].traitType;
            newTraitValues[i] = traits1[i].value;
        }

        for(uint i = 0; i < traits2.length; i++) {
            newTraitTypes[traits1.length + i] = traits2[i].traitType;
            newTraitValues[traits1.length + i] = traits2[i].value;
        }

        // Mint new merged NFT
        mergedNFT.mint(msg.sender, newTraitTypes, newTraitValues);
    }
}
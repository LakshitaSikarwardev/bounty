// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./BaseNFT.sol";

contract MutantNFT is BaseNFT {
    constructor() BaseNFT("MutantNFT", "MNFT") {}

    function createMutant(string[] memory traitTypes, string[] memory traitValues) public returns (uint256) {
        return mint(msg.sender, traitTypes, traitValues);
    }
}
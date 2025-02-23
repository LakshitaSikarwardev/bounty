import { ethers } from "hardhat";

async function main() {
  // Deploy first NFT contract
  const NFT1 = await ethers.getContractFactory("MutantNFT");
  const nft1 = await NFT1.deploy();
  await nft1.deployed();
  console.log(`NFT1 deployed to ${nft1.address}`);

  // Deploy second NFT contract
  const NFT2 = await ethers.getContractFactory("MutantNFT");
  const nft2 = await NFT2.deploy();
  await nft2.deployed();
  console.log(`NFT2 deployed to ${nft2.address}`);

  // Deploy merged NFT contract
  const MergedNFT = await ethers.getContractFactory("MutantNFT");
  const mergedNft = await MergedNFT.deploy();
  await mergedNft.deployed();
  console.log(`MergedNFT deployed to ${mergedNft.address}`);

  // Deploy merger contract
  const NFTMerger = await ethers.getContractFactory("NFTMerger");
  const merger = await NFTMerger.deploy(nft1.address, nft2.address, mergedNft.address);
  await merger.deployed();
  console.log(`NFTMerger deployed to ${merger.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
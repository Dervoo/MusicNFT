const hre = require('hardhat');
const fs = require('fs');
/* 
  To deploy the smart contracts use
  npx hardhat run --network localhost scripts/deploy.js
*/
async function main() {

  const Nft = await hre.ethers.getContractFactory('Nft');
    const uris = [
    "https://jsonkeeper.com/b/1G7S", // Thunder Dragon
    "https://jsonkeeper.com/b/1G7S", // Thunder Dragon
    "https://jsonkeeper.com/b/1G7S", // Thunder Dragon
    "https://jsonkeeper.com/b/JIWW", // Thunder Dragon Colossus
    "https://jsonkeeper.com/b/JIWW", // Thunder Dragon Colossus
    "https://jsonkeeper.com/b/JIWW", // Thunder Dragon Colossus
    "https://jsonkeeper.com/b/JCT3", // Thunder Dragon Thunderstormech
    "https://jsonkeeper.com/b/JCT3", // Thunder Dragon Thunderstormech
    "https://jsonkeeper.com/b/JCT3", // Thunder Dragon Thunderstormech
    "https://jsonkeeper.com/b/8UBU", // Thunder Dragon Titan
    "https://jsonkeeper.com/b/8UBU", // Thunder Dragon Titan
    "https://jsonkeeper.com/b/8UBU", // Thunder Dragon Titan
    "https://jsonkeeper.com/b/A84J", // Thunder Dragondark
    "https://jsonkeeper.com/b/A84J", // Thunder Dragondark
    "https://jsonkeeper.com/b/A84J", // Thunder Dragondark
    "https://jsonkeeper.com/b/ULJ7", // Thunder Dragonduo
    "https://jsonkeeper.com/b/ULJ7", // Thunder Dragonduo
    "https://jsonkeeper.com/b/ULJ7", // Thunder Dragonduo
    "https://jsonkeeper.com/b/Z0TY", // Thunder Dragonhawk
    "https://jsonkeeper.com/b/Z0TY", // Thunder Dragonhawk
    "https://jsonkeeper.com/b/Z0TY", // Thunder Dragonhawk
    "https://jsonkeeper.com/b/YRNC", // Twin-Headed Thunder Dragon
    "https://jsonkeeper.com/b/YRNC", // Twin-Headed Thunder Dragon
    "https://jsonkeeper.com/b/YRNC", // Twin-Headed Thunder Dragon
    "https://jsonkeeper.com/b/KI8E", // Thunder Dragonroar
    "https://jsonkeeper.com/b/KI8E", // Thunder Dragonroar
    "https://jsonkeeper.com/b/KI8E", // Thunder Dragonroar
    "https://jsonkeeper.com/b/5GG7", // Thunder Dragonmatrix
    "https://jsonkeeper.com/b/5GG7", // Thunder Dragonmatrix
    "https://jsonkeeper.com/b/5GG7", // Thunder Dragonmatrix
    "https://jsonkeeper.com/b/4576", // Thunder Dragonlord
    "https://jsonkeeper.com/b/4576", // Thunder Dragonlord
    "https://jsonkeeper.com/b/4576", // Thunder Dragonlord
    "https://jsonkeeper.com/b/8DP5", // Thunder Dragon Fusion
    "https://jsonkeeper.com/b/8DP5", // Thunder Dragon Fusion
    "https://jsonkeeper.com/b/8DP5", // Thunder Dragon Fusion
    "https://jsonkeeper.com/b/LBO2", // Thunder Dragons' Hundred Thunders
    "https://jsonkeeper.com/b/LBO2", // Thunder Dragons' Hundred Thunders
    "https://jsonkeeper.com/b/LBO2", // Thunder Dragons' Hundred Thunders
    "https://jsonkeeper.com/b/NU1G", // Thunder Dragon Discharge
    "https://jsonkeeper.com/b/NU1G", // Thunder Dragon Discharge
    "https://jsonkeeper.com/b/NU1G", // Thunder Dragon Discharge
];
  const nft = await Nft.deploy('Thunder Dragons', 'TD', "0xB5B970E3Cdd81D548F48c741573CCBEA8Ae4f2aF", uris);
  await nft.deployed();
  console.log('ERC721 deployed to:', nft.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

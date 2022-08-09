const hre = require('hardhat');
const fs = require('fs');
/* 
  To deploy the smart contracts use
  npx hardhat run --network localhost scripts/<name_of_file>.js
*/
async function main() {

  const Nft = await hre.ethers.getContractFactory('Nft');
    const uris = [
    "https://jsonkeeper.com/b/3CBA", //sabotage
    "https://jsonkeeper.com/b/UCXU", //hero
    "https://jsonkeeper.com/b/ON6K", //one more time
    "https://jsonkeeper.com/b/CVH0", //save yourself
    "https://jsonkeeper.com/b/T7AV", //thats what i want
    "https://jsonkeeper.com/b/4MR3", //abcdefu
];
  const nft = await Nft.deploy('Music Collection', 'MUS', "0xB7e224427A3393f4B02D7098Fc5830895d564740", uris);
  await nft.deployed();
  console.log('ERC721 deployed to:', nft.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

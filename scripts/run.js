

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Tatino", "Mavis", "Sully"], //Names 
      ["https://www.hogarmania.com/archivos/202110/oso-perezoso-portada-1280x720x80xX.jpg", 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Eichh%C3%B6rnchen_D%C3%BCsseldorf_Hofgarten_edit.jpg/1200px-Eichh%C3%B6rnchen_D%C3%BCsseldorf_Hofgarten_edit.jpg",
      "https://t1.ea.ltmcdn.com/es/razas/5/7/4/nutria-europea_475_0_600.jpg"], //Images
      [100, 200, 300], // HP
      [100, 50, 25], //Attack Damage values
      "Lionel Messi", //bossName
      "https://tse2.mm.bing.net/th?id=OIP.FlY4vGYIgIO-DVIsHffvQAHaE7", //boss Image
      10000, // boss hp
      50 // boss attack
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
      
  
  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2); //mintCharacterNFT(2)Hardhat en realidad llamará a esta función con una billetera predeterminada que configura para nosotros localmente.
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");
  // // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1); //cuando llamo gameContract.tokenURI(1), básicamente dice: "Ve a buscar los datos dentro del NFT con tokenId 1"
  // console.log("Token URI:", returnedTokenUri)
};

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
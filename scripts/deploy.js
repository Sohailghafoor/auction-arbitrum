async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Auctions = await ethers.getContractFactory("Auctions"); // name of the artifect when we compile our contract
  const auctions = await Auctions.deploy();
  console.log("Contract address:", auctions.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

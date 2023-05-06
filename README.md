********1- install hardhat 2- copy a contract from openzeppelin wizard with burnable, permit, snapshot and roles 3- npm install @openzeppelin/contracts - this will install all the nessacssary contract that are require to run our token 4- compile your contract with npx hardhat compile 5- now we deploy our contract to the live network to do that we need some information to add in our hardhat confrigration file: we will need to create

alchemy api key. it will make connection

ethersacn api key. - for veridying the contract not use to deploy

private ropsten metamask key (our vallet private key).

6- create a file and write the acutal deploy function in it. (scripts/deploy.js)

7- npx hardhat run scripts/deploy.js --network ropsten - use this command to run/deploy the contract

8- now install etherscan pakage: npm install --save-dev @nomiclabs/hardhat-etherscan - to veriy things like we can directly verify that our contract is deployed on etherscan.

9- after updating hardhat.config (add ethersacn api key) run the command npx hardhat verify --network ropsten tokenAddress********

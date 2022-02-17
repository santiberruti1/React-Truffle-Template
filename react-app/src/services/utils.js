import contractDefinition from "../contracts/YourContract.json";

export const getAccounts = async (web3) => {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((error, accounts) =>
      error ? reject(error) : resolve(accounts)
    );
  });
};

export const getContractInstance = async (web3) => {
  const networkId = await web3.eth.net.getId();
  const networkData = contractDefinition.networks[networkId];

  const contract = web3.eth.Contract(
    contractDefinition.abi,
    networkData.address
  );
  // contract.setProvider(web3.currentProvider);

  // // Dirty hack for web3@1.0.0 support for localhost testrpc
  // // see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
  // if (typeof contract.currentProvider.sendAsync !== "function") {
  //   contract.currentProvider.sendAsync = function() {
  //     return contract.currentProvider.send.apply(
  //       contract.currentProvider,
  //       arguments
  //     );
  //   };
  // }

  // const instance = await contract.deployed();
  return contract;
};

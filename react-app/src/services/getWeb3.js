import Web3 from "web3";

const getLocalWeb3Provider = () => {
  console.log("getlocalprovider")
  const localProvider =
    process.env.REACT_APP_WEB3_PROVIDER_URL || "http://localhost:9545";
  const provider = new Web3.providers.HttpProvider(localProvider);
  return new Web3(provider);
};

const resolveWeb3 = async (resolve) => {
  let { web3, ethereum } = window;

  console.log("widnow: ", window);
  console.log("web3: ", web3);
  console.log("ethereum: ", ethereum);

  if (ethereum) {
    console.log("Injected web3 detected.");
    web3 = new Web3(window.ethereum);
    await ethereum.enable();
  } else if (web3) {
    console.log("Injected web3 detected.");
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log("No web3 instance injected, using Local web3.");
    web3 = getLocalWeb3Provider();
  }

  resolve(web3);
};

const getWeb3 = () =>
  new Promise((resolve) => {
    if (process.env.REACT_APP_USE_INJECTED_WEB3 === "YES") {
      console.log("will try to use injected web3 if possible");
      if (document.readyState === "complete") {
        resolveWeb3(resolve);
      } else {
        window.addEventListener(`load`, () => {
          resolveWeb3(resolve);
        });
      }
    } else {
      console.log("will not use injected web3 even if it is there");
      resolve(getLocalWeb3Provider());
    }
  });

export { getWeb3 };

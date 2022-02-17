import React from "react";

import { useGetWeb3 } from "../../services";

const Home = () => {
  const { web3, accounts, contract } = useGetWeb3();

  const getInfo = async () => {
    console.log("Owner: ", await contract.methods.owner().call());
  };

  const callSomeFunctionExample = (newNumber) => {
    contract.methods.someFunction(newNumber).send({ from: accounts[0] });
  };

  return (
    <div>
      <h1>Your Contract App</h1>
      {contract === undefined && <h2>Check Metamask</h2>}
      {accounts != undefined && accounts.length > 0 && (
        <h3>Account: {accounts[0]}</h3>
      )}
      <button onClick={() => getInfo()}> Get Info </button>
      <button onClick={() => callSomeFunctionExample(10)}> Execute </button>
    </div>
  );
};

export default Home;

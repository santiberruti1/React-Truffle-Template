import { useEffect, useState } from "react";
import { getWeb3, getAccounts, getContractInstance } from "./index";

const useGetWeb3 = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const web3 = await getWeb3();
      console.log("web3: ", web3)
      const accounts = await getAccounts(web3);
      const contract = await getContractInstance(web3);
      setWeb3(web3);
      setAccounts(accounts);
      setContract(contract);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, and contract. Check console or wallet for details.`
      );
      console.log(error);
    }
  };

  return {
    web3,
    accounts,
    contract,
  };
};

export { useGetWeb3 };

import { providers } from 'ethers';

const connect = (): providers.Provider => {
  // get network from args
  const network = 'kovan';

  // set provider from infura & network
  const provider = new providers.InfuraProvider(network, process.env.INFURA_PROJECT_ID);
  return provider;
};

export { connect };

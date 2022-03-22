import {
  // ethers,
  providers,
  // utils,
  // Wallet,
} from 'ethers';
// import { getContract } from './util';

const connect = (): providers.Provider /*, Wallet, any*/ => {
  // get network from args
  const network = 'kovan';

  // set provider from infura & network
  const provider = new providers.InfuraProvider(network, '8beac34ac24d4288b8d5f75b340e3853');

  // // use private key for wallet
  // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  // const contractAt = getContract(wallet);

  return provider; //, wallet, contractAt];
};

export { connect };

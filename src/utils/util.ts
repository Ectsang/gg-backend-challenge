// /**
//  * @method isEmpty
//  * @param {String | Number | Object} value
//  * @returns {Boolean} true & false
//  * @description this value is Empty Check
//  */
// export const isEmpty = (value: string | number | object): boolean => {
//   if (value === null) {
//     return true;
//   } else if (typeof value !== 'number' && value === '') {
//     return true;
//   } else if (typeof value === 'undefined' || value === undefined) {
//     return true;
//   } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
//     return true;
//   } else {
//     return false;
//   }
// };

import { Wallet, ethers, utils, Contract } from 'ethers';

export const parseEther = utils.parseEther;
export const fromEther = utils.formatEther;

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const getContractJSON = (contractName: string): any => require(`../abi/${contractName}.json`);

export const getContract =
  (wallet: ethers.Wallet) =>
  (contractName: string, contractAddress: string): ethers.Contract => {
    const contractJson = getContractJSON(contractName);
    return new ethers.Contract(contractAddress, contractJson.abi, wallet);
  };

export const wait = async <T>(tx: Promise<{ wait: () => Promise<T> }>): Promise<T> => (await tx).wait();

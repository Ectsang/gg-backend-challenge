import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';

import { contracts, wallets } from '@/utils/constants';
import abi from '@/abi/ABI-GoodGhostingWhitelisted';

import { Contract } from 'ethers';
import { connect } from '../utils/provider';
const provider = connect();

const GoodGhostingDemo = new Contract(contracts.goodghosting, abi, provider);

// player address: 0xc480abab3b49b5905ba6325412cb752fbec8b06d
// non player address: 0x5360Be190f26daD6302207B805f15720A1bC804d
class UserService {
  public users = userModel;

  public async findUserByAddress(address: string): Promise<User> {
    console.log('finding player with address:', address);
    try {
      const players = await GoodGhostingDemo.players(address);

      const findUser: User = {
        addr: players.addr,
        withdrawn: players.withdrawn,
        canRejoin: players.canRejoin,
        mostRecentSegmentPaid: players.mostRecentSegmentPaid,
        amountPaid: players.amountPaid,
        info: '',
      };

      if (findUser.addr === wallets.zero) throw new HttpException(404, 'Player Not Found');

      return findUser;
    } catch (error) {
      throw new HttpException(error.status, error.message);
    }
  }
}

export default UserService;

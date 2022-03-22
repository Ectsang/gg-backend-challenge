// import { hash } from 'bcrypt';
// import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
// import { isEmpty } from '@utils/util';

import { ethers } from 'ethers';

class UserService {
  public users = userModel;

  public async findUserByAddress(address: string): Promise<User> {
    console.log('address', address);
    const findUser: User = {
      id: 1,
      address: address,
    };
    // const findUser: User = this.users.find(user => user.address === address);
    // if (!findUser) throw new HttpException(404, 'Not Found');

    return findUser;
  }
}

export default UserService;

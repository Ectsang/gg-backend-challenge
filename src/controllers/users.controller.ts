import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';
class UsersController {
  public userService = new userService();

  public findUserByAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userAddress = String(req.params.address);
      const findOneUserData: User = await this.userService.findUserByAddress(userAddress);

      res.status(200).json({ data: findOneUserData, message: 'success' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;

import { NextFunction, Request, Response } from 'express';
import gameService from '@services/game.service';
import { BigNumber } from 'ethers';

class GameController {
  public gameService = new gameService();

  public getCurrentSegment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const currentSegment: BigNumber = await this.gameService.getCurrentSegment();

      res.status(200).json({ data: currentSegment, message: 'success' });
    } catch (error) {
      next(error);
    }
  };
}

export default GameController;

import { Router } from 'express';
import GameController from '@controllers/game.controller';
import { Routes } from '@interfaces/routes.interface';

class GameRoute implements Routes {
  public path = '/game';
  public router = Router();
  public gameController = new GameController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/currentSegment`, this.gameController.getCurrentSegment);
  }
}

export default GameRoute;

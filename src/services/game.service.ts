import { HttpException } from '@exceptions/HttpException';

import { contracts } from '@/utils/constants';
const abi = require('@/abi/ABI-GoodGhostingWhitelisted.json');

import { BigNumber, Contract } from 'ethers';
import { connect } from '@/utils/provider';
const provider = connect();

const GoodGhostingDemo = new Contract(contracts.goodghosting, abi, provider);
/**
  /// @notice Calculates the current segment of the game.
  /// @return current game segment
  function getCurrentSegment() public view returns (uint256) {
      return block.timestamp.sub(firstSegmentStart).div(segmentLength);
  }
 */
class GameService {
  public async getCurrentSegment(): Promise<BigNumber> {
    try {
      const blockNumber = await provider.getBlockNumber();
      const blockTimestamp = (await provider.getBlock(blockNumber)).timestamp;
      const firstSegmentStart = await GoodGhostingDemo.firstSegmentStart();
      const segmentLength = await GoodGhostingDemo.segmentLength();
      // console.log({
      //   blockTimestamp,
      //   firstSegmentStart,
      //   segmentLength,
      // });

      return BigNumber.from(blockTimestamp).sub(BigNumber.from(firstSegmentStart)).div(BigNumber.from(segmentLength));
    } catch (error) {
      throw new HttpException(error.status, error.message);
    }
  }
}

export default GameService;

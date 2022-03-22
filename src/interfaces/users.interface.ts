export interface User {
  addr: string;
  withdrawn: boolean;
  canRejoin: boolean;
  mostRecentSegmentPaid: number;
  amountPaid: number;
}

import { User } from '@interfaces/users.interface';

// password: password
const userModel: User[] = [
  { addr: '0x1', withdrawn: false, canRejoin: false, mostRecentSegmentPaid: 0, amountPaid: 1000000000000000000 },
  { addr: '0x2', withdrawn: false, canRejoin: false, mostRecentSegmentPaid: 0, amountPaid: 1000000000 },
];

export default userModel;

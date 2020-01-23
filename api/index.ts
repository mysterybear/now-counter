import { NowRequest, NowResponse } from '@now/node';

let count = 9000;

export default(req: NowRequest, res: NowResponse) => {
  res.json({ count: count++ });
}

import { NowRequest, NowResponse } from '@now/node';

let count = 0;

export default(req: NowRequest, res: NowResponse) => {
  res.json({ count: count++ });
}

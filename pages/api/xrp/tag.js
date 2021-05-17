// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { hot } from '../../../assets/const';

export default (req, res) => {
  res.statusCode = 200
  res.json({ data: '110' })
}

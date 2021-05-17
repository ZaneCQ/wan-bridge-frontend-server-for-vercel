// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tokens } from '../../assets/const';

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.statusCode = 200
  res.json(Object.keys(tokens))
}

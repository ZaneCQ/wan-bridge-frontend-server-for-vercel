// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.statusCode = 200
  res.json({ data: '0x00000000000000000000000000011' })
}

module.exports.create = (req, res) => {
  const { files } = req;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ files }));
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.travelerBoard = (req, res) => {
  res.status(200).send("Traveler Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.agentBoard = (req, res) => {
  res.status(200).send("Agent Content.");
};

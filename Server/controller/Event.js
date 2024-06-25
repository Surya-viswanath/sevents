const Event = require("./EventSchema");


const Createvent = async (req, res) => {
  const {
    Email,
    Time,
    Type,
    Place,
    Date,
  } = req.body;
  const listingevent= await Event.create({
    Email,
    Time,
    Type,
    Place,
    Date,
  });
  res.json(listingevent);
};

const getevent = async (req, res) => {
  const eventList = await Event.find();
  res.json(eventList);
};



module.exports = {Createvent,getevent}


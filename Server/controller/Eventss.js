
const Eventt = require("./EventssSchema");


const Createvents = async (req, res) => {
  const {
    Email,
    Time,
    Type,
    Place,
    Date,
  } = req.body;
  const listingevents= await Eventt.create({
    Email,
    Time,
    Type,
    Place,
    Date,
  });
  res.json(listingevents);
};

const getevents = async (req, res) => {
  const eventList = await Eventt.find();
  res.json(eventList);
};

const deleteevent = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedevent = await Eventt.findByIdAndDelete(id);
      if (!deletedevent) {
        return res.status(404).json({ message: "List not found" });
      }
      res.json({ message: "List deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {Createvents,getevents,deleteevent}
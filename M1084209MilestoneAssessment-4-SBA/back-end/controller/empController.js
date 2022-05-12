const emp = require("../model/emp");

exports.addEmp = async (req, res) => {
  const errors = [];
  const { name, userName, password, reEnterPassword, mail, phone } = req.body;
  console.log(req.body);

  if (!name || !userName || !password || !reEnterPassword || !mail || !phone) {
    res.status(422).send("Please enter all fields");
  } else {
    emp
      .create({
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        reEnterPassword: req.body.reEnterPassword,
        mail: req.body.mail,
        phone: req.body.phone,
      })
      .then((doc) => {
        if (doc) {
          console.log("doc" + doc);
          res.send(doc);
        }
      });
  }
};

exports.dispAllEmp = async (req, res) => {
  const Getemp = await emp.find({});
  try {
    if (Getemp) {
      res.json(Getemp);
      console.log(Getemp);
    } else {
      res.json("There is no active emps");
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteEmp = async function (req, res) {
  id = req.params._id;
  const found = [];
  if (!id) {
    found.push({
      code: "validation_error",
      message: "enter a UserId",
    });
  } else {
    emp
      .findByIdAndRemove(id)
      .exec()
      .then((doc) => {
        if (doc) {
          res.send("Deleted Successfully");
        }
      });
  }
};

exports.editEmp = function (req, res) {
  var condition = { _id: req.params._id };
  emp
    .findOneAndUpdate(condition, req.body)
    .then((doc) => {
      if (!doc) {
        res.status(404).send("No active employee");
      } else {
        res.status(200).send("Updated Successfully");
      }
    })
    .catch((err) => res.json("Id not found"));
};

exports.GetEmpById = (req, res) => {
  emp.findById(req.params._id).then((userfound) => {
    if (!userfound) {
      res.json("employee not found").end();
    } else {
      console.log(userfound);
      return res.json(userfound);
    }
  });
};

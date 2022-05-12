const express = require("express");
const empController = require("../../controller/empController");
function addRoutes(app) {
  app.all("*", (req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
  });

  app.get("/test-url", (req, res, next) => {
    res.send({
      success: true,
    });
  });
  app.post("/api/register", empController.addEmp);
  app.route("/api/get-emp").get(empController.dispAllEmp);
  app.route("/api/delete-emp/:_id").delete(empController.deleteEmp);
  app.route("/api/edit-emp/:_id").put(empController.editEmp);
  app.route("/api/get-emp-by-id/:_id").get(empController.GetEmpById);
}
const routes = {
  addRoutes,
};
module.exports = routes;

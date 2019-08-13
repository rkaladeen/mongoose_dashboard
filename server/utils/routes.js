const Mongooses = require('../controllers/mongooses');

module.exports = app => {
  app.get("/", Mongooses.getAll);
  app.get("/mongooses/view/:_id", Mongooses.getOne);
  app.get("/mongooses/form", Mongooses.getForm);
  app.post("/mongooses/create", Mongooses.create);
  app.get("/mongooses/edit/:_id", Mongooses.getEditForm);
  app.post("/mongooses/update/:_id", Mongooses.update);
  app.get("/mongooses/delete/:_id", Mongooses.remove);
}
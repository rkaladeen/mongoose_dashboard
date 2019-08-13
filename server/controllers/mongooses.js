const Mongoose = require('mongoose').model('Mongoose');

class MongooseController {
  getAll(req, res){
  Mongoose.find({})
    .then(mongooses => res.render('index', {mongooses: mongooses}))
    .catch(err => res.json(err));
  }
  getOne(req, res){
    Mongoose.findOne({_id: req.params._id})
      .then(mongoose =>  res.render('mongoose', {mongoose: mongoose}))
      .catch(err => res.json(err));
  }
  getForm(req, res){
    res.render('mongoose_form');
  }
  create(req, res){
    let m = new Mongoose(req.body);
    var hobbyArr = req.body.hobbies.split(',');
    for (var i in hobbyArr) {hobbyArr[i] = hobbyArr[i].trim()};
    m.hobbies = hobbyArr;
    m.save()
      .then(data => res.redirect(`/mongooses/view/${data._id}`))
      .catch(err => res.json(err));
  }
  getEditForm(req, res){
    Mongoose.findOne({_id: req.params._id})
      .then(mongoose =>  res.render('mongoose_edit', {mongoose: mongoose}))
      .catch(err => res.json(err));
  }
  update(req, res){
    var u_hobbyArr = req.body.u_hobbies.split(',');
    for (var i in u_hobbyArr) {
      u_hobbyArr[i] = u_hobbyArr[i].trim()
    };
    Mongoose.findOneAndUpdate(
      {_id: req.params._id}, 
      {$set: {'name': req.body.u_name, 
              'age': req.body.u_age,
              'hobbies': u_hobbyArr}}, 
      {runValidators: true})
      .then(() => res.redirect(`/mongooses/view/${req.params._id}`))
      .catch(err => res.json(err));
  }
  remove(req, res){
    Mongoose.findOneAndDelete({_id: req.params._id})
      .then(() => res.redirect('/'))
      .catch(err => res.json(err));
  }
}

module.exports = new MongooseController();
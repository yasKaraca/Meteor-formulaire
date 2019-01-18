import { Meteor } from 'meteor/meteor';
import People from '../imports/api/people';
import Login from '../imports/api/login';

callnsertPeople = (firstName, lastName) => {
  return Meteor.call.insertPeople(firstName, lastName)
}

Meteor.methods({
  insertPeople(firstName, lastName)  {
    if (firstName !== "" && lastName !== "") {
        People.insert({ firstName, lastName, createdAt: new Date() });
      }
    },
    deletePeople(id) {
      People.remove({_id: id});
    },
    updatePeople(id, firstName, lastName) {
      People.update(
          {"_id": id},
          {$set: {"firstName": firstName, "lastName": lastName}}
        )
    },
    findPeople(id) {
        return People.findOne({_id: id});
    },
    insertLogin(firstName, lastName, password, role) {
      console.log(firstName, lastName, password,  role)
      if (firstName !== "" && lastName !== "" && password !== "" && (role == 1 || role ==2)) {
          Login.insert({"firstname": firstName, "lastName": lastName,"password": password , "role": role})
      }
    },
    findLogin(name, passowrd) {
      console.log(Login.findOne({"lastName": name, "passowrd": passowrd}));
      return Login.findOne({"lastName": name, "passowrd": passowrd});
    }
});

Meteor.startup(() => {
  if (People.find().count() <= 0) {
      callnsertPeople("Clément", "Haller");
      callnsertPeople("Ed", "Ouard");
  }
  if (Login.find().count() <= 0) {
    Login.insert({firstName: "admin", lastName: "admin", passowrd: "admin", role: 1});
    //Login.DeleteMany();
  }
});

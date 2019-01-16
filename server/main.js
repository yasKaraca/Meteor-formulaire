import { Meteor } from 'meteor/meteor';
import People from '../imports/api/people';

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
    }
})

Meteor.startup(() => {
  if (People.find().count() <= 0) {
      callnsertPeople("Clément", "Haller");
      callnsertPeople("Ed", "Ouard");
  }
});

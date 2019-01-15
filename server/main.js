import { Meteor } from 'meteor/meteor';
import People from '../imports/api/people';

callnsertPeople = (firstName, lastName) => {
  return Meteor.call.insertPeople(firstName, lastName)
}

Meteor.methods({
  insertPeople(firstName, lastName)  {
      People.insert({ firstName, lastName, createdAt: new Date() });
    },
    deletePeople(id) {
      People.remove({_id: id});
    }
})

Meteor.startup(() => {
  if (People.find().count() <= 0) {
      callnsertPeople("Clément", "Haller");
      callnsertPeople("Ed", "Ouard");
  }
});

import { Template } from 'meteor/templating';
import people from "../imports/db/people";

Template.display.helpers
(
    { people()
        {
            return people.find();
        }
    }    
)
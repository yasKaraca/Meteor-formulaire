import { Template } from "meteor/templating";
import people from "../imports/db/people";

Template.form.events
(
    {
        "click #addMe" : function( event, template)
        {
            console.log(template.find("#firstname").value);
            people.insert
            (
                {
                  name : template.find( "#firstname" ).value,
                  lastname : template.find( "#lastname" ).value
                }
            )
        }
    }
)
Template.addnote.events({
    'click input.add-note' : function(event){
        event.preventDefault();
        var noteText = document.getElementById("noteInput").value;
        Meteor.call("addNote",noteText,function(error , noteId){
          console.log('added note with Id .. '+noteId);
        });
        document.getElementById("noteInput").value = "";
 
    }
});
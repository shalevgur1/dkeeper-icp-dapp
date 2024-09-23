import List "mo:base/List";
import Debug "mo:base/Debug";

actor {

  public type Note = {
    title: Text;
    content: Text;
  };
  
  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText: Text, contentText: Text) {
    let newNote: Note = {
      title = titleText;
      content = contentText;
    };
    notes := List.push(newNote, notes);
  };

  // Returnning an array instead of list.
  // The reason is because it is more easy to work with arrays in JS
  // but more effecient to work with lists on the blockchain using Motoko
  public query func readNotes(): async [Note] {
    return List.toArray(notes);
  };

  public func removeNote(index: Nat) {
    var firstPart = List.take(notes, index);
    notes := List.drop(notes, index+1);
    notes := List.append(firstPart, notes);
    Debug.print(debug_show(notes));
  }
};
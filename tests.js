'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        note = new Note("Hello world", "Chidiebere")
        assert(note.author == "Chidiebere")
    });
});

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        note = new Note("Hello world", "Chidiebere");
        noteapp = new NotesApplication("Chidiebere");
        assert(noteapp.notelist.length == 0)
        noteapp.addNote(note)
        assert(noteapp.notelist.length == 1)
    });
});

describe("Adds notes to the note application: ", function() {

    describe("Case for an add note", function() {

      it("should add note and increment the index", function() {
        assert(create(note);
      });

    });
describe("Gets the ID of a book using the Id supplied by the user", function() {

      it("should return the texts in the note", function() {
        expect(note.text);
      });

      it("should ensure that a valid ", function() {
        expect(get(1,2,3,4,5,6,7,8,9,0));
      });

      it("should ensure that a valid", function() {
        expect(get(11,12,13,14,15,16,17,18,19,10));
      });
      describe("Case for an arithmetic sequence", function() {

      it("should ensure that a valid", function() {
        expect(get(21,22,23,24,25,26,27,28,29,20));

describe("Case for searching for a particular text in the database", function() {

      it("should return the note been searched for", function() {
        expect(note.text);
      });

      it("should ensure that something is actually entered", function() {
        expect(search_text != "");
      });

      it("should ensure that all the texts are exhausted", function() {
        expect(note.length === index);
      });
describe("Deletes note that occurs at a particular position", function() {

      it("should ensure that note actually exists]", function() {
        expect(note_id === index);
      });
describe("Replaces the content of a note with a new content", function() {

      it("should ensure that note actually exists]", function() {
        expect(note_id === index);
      });

      it("should ensure that the note is replaced", function() {
        expect(note[text] = new_content);
      });

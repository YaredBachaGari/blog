import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NotesDirectory = path.join(process.cwd(), "NoteContent");

function getAllDataOfSpecificNote(fileName) {
  const filePath = path.join(NotesDirectory, fileName);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData); // this matter package separates markdown from metadata variables
  const noteSlug = fileName.replace(/\.md/, ""); //this removes the file extension .md from each file names
  const noteData = {
    slug: noteSlug,
    ...data,
    content: content,
  };
  return noteData;
}
function getAllNotes() {
  const allnotesNameArray = fs.readdirSync(NotesDirectory); //this reads the file name with extention
  const allNotesObjArray = allnotesNameArray.map((singleFile) =>
   { return getAllDataOfSpecificNote(singleFile)}
  );
  const sortedNote = allNotesObjArray.sort((a, b) =>
    a.date > b.date ? -1 : 1
  );
  return sortedNote;
}

export function getFeaturedNotes() {
  const allNote = getAllNotes();
  console.log(allNote)
  const FeaturedNote = allNote.filter((note) => note.isFeatured)

  return FeaturedNote;
}

export default getAllNotes;

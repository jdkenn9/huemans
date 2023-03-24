import logo from "./huemans-logo.PNG";
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Card,
  TextField,
  SearchField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes , listUsers} from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  const [users, setUsers] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  

/*  useEffect(() => {
    fetchUsers();
  }, []);*/

  async function fetchUsers() {

    const variables = {
      filter: {
        FirstName: {
        contains: searchTerm
        }
      }
    }

    const variables1 = {
      filter: {
        LastName: {
        contains: searchTerm
        }
      }
    };
  console.log(searchTerm)
  const apiData = await API.graphql({ query: listUsers, variables: variables, variables: variables1});
  const usersFromAPI = apiData.data.listUsers.items;
  await Promise.all (
    usersFromAPI.map(async (user) => {
      return user;
    })
  );
  setUsers(usersFromAPI);
  console.log(usersFromAPI)
  }


  async function fetchNotes() {
  const apiData = await API.graphql({ query: listNotes });
  const notesFromAPI = apiData.data.listNotes.items;
  await Promise.all(
    notesFromAPI.map(async (note) => {
      if (note.image) {
        const url = await Storage.get(note.name);
        note.image = url;
      }
      return note;
    })
  );
  setNotes(notesFromAPI);
}

  async function createNote(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const image = form.get("image");
  const data = {
    name: form.get("name"),
    description: form.get("description"),
    image: image.name,
  };
  if (!!data.image) await Storage.put(data.name, image);
  await API.graphql({
    query: createNoteMutation,
    variables: { input: data },
  });
  fetchNotes();
  event.target.reset();
}

  async function deleteNote({ id, name }) {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
  await Storage.remove(name);
  await API.graphql({
    query: deleteNoteMutation,
    variables: { input: { id } },
  });
}

return (
  <View className="App">
    <Card>
      <Image src={logo} className="App-logo" alt="logo" />
      <Heading level={1}>Welcome to HUEMANS!</Heading>
      <SearchField
        label="Search"
        placeholder="Search here..."
        value = {searchTerm} 
        onChange = {handleSearchTermChange}
      />
      <Button onClick={fetchUsers}>Search</Button>
    </Card>
    <Button onClick={signOut}>Sign Out</Button>
  </View>
);
}


export default withAuthenticator(App);
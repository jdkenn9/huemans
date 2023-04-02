<<<<<<< HEAD
import logo from "./huemans-logo.PNG";
import * as React from "react";
import "./App.css";
=======
import logo from "./logo.svg";
>>>>>>> parent of b8fe6d4... added graphql and storage
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
<<<<<<< HEAD
  Card,
  SearchField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import * as queries from "./graphql/queries";

const App = ({ signOut }) => {
  
  const [users, setUsers] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };
  

  async function fetchUsers() {

    const variables = {
      filter: {
        or:[
        {FirstName: {contains: searchTerm}},
        {LastName: {contains: searchTerm}}
      ]}
    }

    
  console.log(searchTerm)
  const apiData = await API.graphql({ query: queries.listUsers, variables: variables});
  const usersFromAPI = apiData.data.listUsers.items;
  await Promise.all (
    usersFromAPI.map(async (user) => {
      return user;
    })
  );
  setUsers(usersFromAPI);
  console.log(usersFromAPI)
  }

return (
  <View className="App">
    <Card>
      <Image src="https://huemanstagingimagesbucket230557-dev.s3.amazonaws.com/public/huemans-logo.PNG"className="App-logo" alt="logo" />
      <Heading level={1}>Welcome to HUEMANS API Test!</Heading>
      <SearchField
        label="Search"
        placeholder="Search here..."
        value = {searchTerm} 
        onChange = {handleSearchTermChange}
        onSubmit = {fetchUsers}
        onClear = {handleClear}
      />
    </Card>
    <Button onClick={signOut}>Sign Out</Button>
  </View>
);
}

=======
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}
>>>>>>> parent of b8fe6d4... added graphql and storage

export default withAuthenticator(App);
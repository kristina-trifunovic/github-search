// This is a Search page

import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  theme,
  Input,
  Button,
  SimpleGrid
} from '@chakra-ui/react';
import {useGithubUser} from './hooks/useGithubUser';
import { Profile } from './components/Profile';
import { Repo } from './components/Repo';

function App() {
  const [valid, setValid] = useState(true);
  const [username, setUsername] = useState();
  const { user, repos, getUser} = useGithubUser();
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minHeight="100vh">
        <Box as="header">
          <Flex 
            as="form" 
            paddingY={4} 
            maxWidth={768} 
            marginX="auto" 
            gridGap={4} 
            onSubmit={handleSubmit}>

            <Input 
              placeholder="Enter a username" 
              onChange={(event) => setUsername(event.target.value)} 
              isInvalid={!valid}
              />
            <Button type="submit">Search</Button>
          </Flex>
        </Box>
        <Flex 
          as= "main" 
          align="center" 
          justify="center" 
          direction="column"
          flex={1} 
          background="MediumSeaGreen">

          {user && (
            <Profile name={user.name} image={user.avatar_url} bio={user.bio} />
          )}

          {repos && (
            <SimpleGrid columns={3} spacing={6} marginTop={6} >
              {repos.map(repo => {
                return <Repo key={repo.id} {...repo} />
              })}
              </SimpleGrid>
          )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if(!username) {
      setValid(false);
      alert('Please enter a username');
    }
    getUser(username);
  }
}

export default App;

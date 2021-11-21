import { useState } from 'react';

export function useGithubUser(username) {
    const [user, setUser] = useState();
    const [repos, setRepos] = useState();

    const getUser = async (username) => {
        await fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => setUser(data));

        await fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(data => setRepos(data));
    };
    return {
        user, 
        repos,
        getUser
    };
}
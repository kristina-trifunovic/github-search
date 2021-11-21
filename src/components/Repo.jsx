import React from 'react'
import { Box, Heading, Link } from '@chakra-ui/react';

export function Repo({ name, description, html_url}) {
    return (
        <Box padding={3} border={'1px solid'} boxShadow={'0 5px 0 0 rgba(0, 0, 0, 0.3)'} borderRadius={3}>
        <Heading as="h3">{name}</Heading>
        <Box>{description}</Box>
        <Link isExternal href={html_url}>View Repo</Link>
    </Box>
    );
}
import { Box, Avatar, Heading } from '@chakra-ui/react';
import React from 'react';

export function Profile({ name, image, bio }) {
    return (
        <Box textAlign="center">
            <Box>
                <Avatar name={name} src={image} size="2xl" />
            </Box>
            <Heading>{name}</Heading>
            <Box>{bio}</Box>
        </Box>
    );
} 
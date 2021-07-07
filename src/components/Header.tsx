import { useCallback, FormEvent } from 'react';
import { useRouter } from 'next/router';

import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiFootballFill,
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
  RiLogoutCircleLine,
} from "react-icons/ri";

import { IHeader } from "../models/IHeaderModel";

export function Header({ enableSecretComponents }: IHeader) {
  const router = useRouter();

  const handleSingnOut = useCallback((event?: FormEvent) => {
    console.log('signOut');

    event?.preventDefault();

    router.push('/');
  }, []);

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        FutStats
        <Icon
          as={RiFootballFill}
          ml="1"
          mt="3"
          fontSize="18"
          color="blue.500"
        />
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
        hidden={!enableSecretComponents}
      >
        <Input
          color="blue.200"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "blue.300" }}
        />
        <Icon
          as={RiSearchLine}
          fontSize="20"
          color="blue.500"
          cursor="pointer"
        />
      </Flex>

      <Flex align="center" ml="auto" hidden={!enableSecretComponents}>
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="blue.500"
          borderRightWidth={1}
          borderColor="blue.500"
        >
          <Icon
            as={RiNotificationLine}
            fontSize="20"
            color="blue.500"
            cursor="pointer"
          />
          <Icon
            as={RiUserAddLine}
            fontSize="20"
            color="blue.500"
            cursor="pointer"
          />
          <Icon
            as={RiLogoutCircleLine}
            fontSize="20"
            color="blue.500"
            cursor="pointer"
            onClick={() => handleSingnOut()}
          />
        </HStack>

        <Flex align="center">
          <Avatar
            size="md"
            name="Lucas Bercê de Jesus"
            color="white"
            bgColor="blue.600"
          />
          <Box mr="4" ml="4" textAlign="right">
            <Text>Lucas Bercê de Jesus</Text>
            <Text color="blue.300" fontSize="small">
              lucasberce71@gmail.com
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { useCallback, FormEvent } from 'react';
import { useRouter } from 'next/router';

import { Flex, Stack, Button, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Input } from "../components/Form/Input";

export default function Home() {
  const router = useRouter();

  const handleSignIn = useCallback((event?: FormEvent) => {
    event?.preventDefault();
    router.push('/classification')
  }, []);

  return (
    <>
      <Header enableSecretComponents={false} />
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        overflowX="hidden"
      >
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="blue.500"
          p="8"
          flexDir="column"
          borderRadius={8}
        >
          <Stack spacing="4">
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              textDecor="underline"
            >
              Entre com seu login e senha
            </Text>
            <Input type="email" name="email" label="E-mail" />
            <Input type="password" name="password" label="Senha" />
          </Stack>

          <Button
            type="button"
            mt="6"
            bgColor="blue.700"
            size="lg"
            _hover={{ bgColor: "blue.900" }}
            onClick={() => handleSignIn()}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

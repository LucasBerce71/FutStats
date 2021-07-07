import { Flex, Text } from '@chakra-ui/react';

import { Header } from "../../components/Header";

export default function Classification() {
  return (
    <>
      <Header enableSecretComponents />
      <Flex w="100%" h="100vh" align="center" justify="center">
        <Text>Classificação Campeonato Brasileiro 2021</Text>
      </Flex>
    </>
  );
}

import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import { IInput } from "../../models/IInputModel";

export function Input({ name, label, ...rest }: IInput) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput 
        name={name}
        id={name}
        _focus={{ bgColor: 'blue.900' }}
        bg="blue.900"
        variant="filled"
        _hover={{
          bgColor: 'blue.700'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}

import { Button } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button bg="baseColors.yellow" color="white" w="110px" h="44px">
      {children}
    </Button>
  );
});

import { HStack } from "native-base";
import CountryFlag from "react-native-country-flag";

import { Input } from "../Input";

interface Props {
  code: string;
  position: "left" | "right";
  onChangeText: (value: string) => void;
  value?: string;
}

export function Team({ code, position, onChangeText, value }: Props) {
  return (
    <HStack alignItems="center">
      {position === "left" && (
        <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />
      )}

      <Input
        w={16}
        h={9}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={value !== "NaN" ? value : null}
        isDisabled={value !== "NaN" ? true : false}
        _disabled={{
          borderColor: "green.800",
        }}
      />

      {position === "right" && (
        <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />
      )}
    </HStack>
  );
}

import { FlatList, HStack, useToast, VStack } from "native-base";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { PoolCardProps } from "../../components/PoolCard";
import { PoolHeader } from "../../components/PoolHeader";
import { EmptyMyPoolList } from "../../components/EmptyMyPoolList";
import { Option } from "../../components/Option";
import { Share } from "react-native";
import { Guesses } from "../../components/Guesses";

interface RouteParams {
  id: string;
}

export function Details() {
  const [optionSelected, setOptionSelected] = useState<"guesses" | "ranking">(
    "guesses"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [poolDetails, setPoolDetails] = useState<PoolCardProps>(
    {} as PoolCardProps
  );

  const route = useRoute();
  const toast = useToast();

  const { id } = route.params as RouteParams;

  async function fetchPoolDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${id}`);
      console.log(response.data.pool);
      setPoolDetails(response.data.pool);
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Não foi possivel carregar os dtalhes do bolão",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCodeShare() {
    await Share.share({
      message: poolDetails.code,
    });
  }

  useEffect(() => {
    fetchPoolDetails();
  }, [id]);

  if (isLoading) {
    return (
      <VStack flex={1} bgColor="gray.900">
        <Loading />
      </VStack>
    );
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header
        title="Título do Bolão"
        onShare={handleCodeShare}
        showBackButton
        showShareButton
      />

      {poolDetails._count?.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />

          <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
            <Option
              title="Seus palpites"
              isSelected={optionSelected === "guesses"}
              onPress={() => setOptionSelected("guesses")}
            />
            <Option
              title="Ranking do grupo"
              isSelected={optionSelected === "ranking"}
              onPress={() => setOptionSelected("ranking")}
            />
          </HStack>

          <Guesses poolId={poolDetails.id} code={poolDetails.code} />
        </VStack>
      ) : (
        <EmptyMyPoolList code={poolDetails.code} />
      )}
    </VStack>
  );
}

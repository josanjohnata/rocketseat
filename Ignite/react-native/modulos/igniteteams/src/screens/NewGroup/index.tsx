import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState<string>('');

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', { group });
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 25 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
};
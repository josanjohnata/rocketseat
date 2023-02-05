import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ['Josan', 'Eide', 'Ester', 'Milk', 'Nicolly', 'Tauanne', 'Maria', 'João', 'Victor']

  const handleParticipantAdd = () => {
    if(participants.includes('Josan')) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome!')
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Hey there! I'm John!
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 26 de Janeiro de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity
          style={styles.buttonOpacity}
          onPress={handleParticipantAdd}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
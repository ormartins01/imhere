import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './styles'

import { Participant } from '../../components/Participant'

export interface IParticipant {
    name: string
}

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipant, setNewParticipant] = useState('');

    function handleParticipantAdd() {

        if (participants.includes(newParticipant)) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
        }

        setParticipants(prevState => [...prevState, newParticipant] );
        setNewParticipant('');
    };

    function handleParticipantRemove(participantDeleted: string) {

        

        if (participants.includes(participantDeleted)) {
            return Alert.alert("Remover participante", `Tem certeza que deseja remover ${participantDeleted} do evento??`, [
                {
                    text: 'Sim',
                    onPress: () => (
                        setParticipants(prevState => prevState.filter(participant => participant !== participantDeleted)),
                        Alert.alert("Removido", "Participante removido com sucesso.")
                        )
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]);
        }
    }


    return (
        <View style={styles.container}>
            <Text key="1" style={styles.eventName}>Nome do evento</Text>
            <Text key="2" style={styles.dataDate}>Sexta-Feira, 5 de dezembro de 2005.</Text>


            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={text => setNewParticipant(text)}
                    value={newParticipant}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}  // pode ser usado item.id para objetos.
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyText}>Não há participantes cadastrados.</Text>
                )}
            />

        </View >
    )
}



// Exemplos de Componentes

{/* <Text key="1" style={styles.eventName}>Nome do evento</Text>
<Text key="2" style={styles.dataDate}>Sexta-Feira, 5 de dezembro de 2005.</Text> */}

// <TextInput
//     style={styles.input}
//     placeholder="Nome"
//     placeholderTextColor="#6B6B6B"
// />

// <TextInput
//     style={styles.input}
//     placeholder="Email"
//     placeholderTextColor="#6B6B6B"
//     keyboardType='email-address'
// />

// <TextInput
//     style={styles.input}
//     placeholder="Telefone"
//     placeholderTextColor="#6B6B6B"
//     keyboardType='numeric'
// />

{/* <ScrollView showsVerticalScrollIndicator={false}>
{
    list.map((participant) => (
        <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
        />
    ))
}
</ScrollView> */}

// FlatList é melhor que ScrolView 
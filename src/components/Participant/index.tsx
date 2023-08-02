import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { IParticipant } from '../../screens/Home'

interface Props {
    name: string
    onRemove: () => void;
}

export function Participant({name, onRemove}: Props ) {

    

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity
                key={name}
                style={styles.button}
                onPress={onRemove}
            >
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}

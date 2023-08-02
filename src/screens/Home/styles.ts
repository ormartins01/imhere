import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 24

  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  dataDate: {
    color: '#a0a0a0',
    fontSize: 16,

  },

  input: {
    flex: 1,
    marginRight: 12,
    marginTop: 14,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    fontSize: 20,
    padding: 16,
    marginBottom: 36,
  },

  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
  },

  emptyText: {
    fontSize: 14,
    color: '#FDFCFE',
    textAlign: 'center',




  }



  
});

import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { Linking } from 'react-native';
export default function App() {
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [website, setWebsite] = useState('');
const [notes, setNotes] = useState('');
const [Started, SetStarted] = useState(false);
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/icon.png')} />
        <Text style={[styles.title]}>LRM Desenvolvimento de Software</Text>
        <Text style={[styles.text,{display: Started ? 'none' : 'flex'}]}>soluções de software desenvolvidas para você e sua empresa</Text>
        <Text style={[styles.text,{display: Started ? 'flex' : 'none'}]}>preencha os campos abaixo para que possamos entrar em contato com você</Text>
      <View style={[styles.form,{display: Started ? 'flex' : 'none'}]}>
        <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} placeholderTextColor="#fff" />
        <TextInput placeholder="Telefone" value={phone} onChangeText={setPhone} style={styles.input} placeholderTextColor="#fff" />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} placeholderTextColor="#fff" />
        <TextInput placeholder="Website" value={website} onChangeText={setWebsite} style={styles.input} placeholderTextColor="#fff" />
        <TextInput placeholder="Notas" value={notes} onChangeText={setNotes} style={styles.input} placeholderTextColor="#fff" />
        <TouchableOpacity onPress={() => contactWhatsapp()} style={[styles.button,{display: Started ? 'flex' : 'none'}]}>
          <Text style={styles.buttonText}>Contato</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => SetStarted(true)} style={[styles.button,{display: Started ? 'none' : 'flex'}]}>
        <Text style={styles.buttonText}>Entrar em contato</Text>
      </TouchableOpacity>
    </View>
  );
  function contactWhatsapp(){
    Linking.openURL(`https://wa.me/5598981891399?text=Bom dia, vi seu contato pelo app de contatos. esses sao meus dados nome:${name} telefone:${phone} email:${email} website:${website} notas:${notes}`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    marginTop:"15%",
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: "50%",
    maxWidth: "90%",
    resizeMode: 'contain',
    overflow: 'hidden',
    shadowColor: '#1b18c6',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title:{
    fontSize: 20,
    maxWidth:'90%',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: "10%",
  },
  text:{
    fontSize: 15,
    
    maxWidth:'90%',
    fontWeight: 'normal',
    color: '#fff',
    marginTop: "5%",
  },
  form:{
    flex:2,
    marginTop: "15%",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input:{
    width: '85%',
    height: 40,
    borderColor: '#3c0983',
    borderWidth:5,
    color: '#fff',
    //backgroundColor: '#f1efef',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button:{
    backgroundColor: '#3c0983',
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    justifySelf: 'flex-end',
    padding: 15,
    borderRadius: 5,
    marginTop: "auto",
    marginBottom: 15,
    shadowColor: '#1b18c6',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText:{
    color: '#fff',
    fontSize: 15,
  }
});

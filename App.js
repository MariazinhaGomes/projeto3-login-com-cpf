import{ useState} from 'react'
import{ Text, SafeAreaView, StyleSheet, Image, TextInput, Button  } from 'react-native';

export default function App(){
  const [cpf, setCpf] = useState('')
  const [cpfField, setCpfField] = useState('')

  const handleSendName = () => {
    setCpf(cpfField)
  }

  const handleClear = () => {
    setCpf('')
    setCpfField('')
  }
  
  return(
    <SafeAreaView style={styles.container}>
     {cpf == '' &&
        <>
      <Image source={require('./assets/avatar.png')} style={{width: 100, height: 100, alignItems:'center',marginTop:200,}}/>
      <TextInput
       style={styles.input}
       placeholder='CPF'
       placeholderTextColor='#999'
       value={cpfField}
       onChangeText={text => setCpfField(text)}
      />
      <Button color={'#000'} title='LOGAR' onPress={handleSendName}/> 
      </>
     }
      {cpf == '000.000.000.00' &&
       <>
       <Image source={require('./assets/perfil.png')} style={{width: 100, height: 100, alignItems:'center',marginTop:200,}}/>
       <Text style={styles.login}>Você está logado com CPF: {cpf}</Text>
       <Button color={'#000'} title={`CPF NÃO É ${cpf}`} onPress={handleClear}/>
       </> 
      }
    </SafeAreaView>
  );
    
}
const styles = StyleSheet.create({
  input:{
    backgroundColor:'#eee',
    padding:10,
    margin:10,
    border:'solid',
    width:350,
  },
  container:{
    display:'flex',
    alignItems:'center',
  },
  login:{
    margin:10,
  },
  
})

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [inputMessage,setInputMessage] = usteState("")
  const [outputMessage,setOutputMessage] = usteState("results to be shown here")
    const handleButtonClick=()=>{
    console.log(inputMessage)
    fetch("https://api.openai.com/v1/chat/completion", {
      method:"POST",
      headers:{
          "Content-Type": "application/json",
          "Authoriztaion": "Bearer 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"
      },
      body:JSON.stringify({
        "messages": [{"role": "user", "content": inputMessage}] ,
        "model": "gpt-3.5-turbo",
      })
    }).then((response)=>response.json).then((data)=>{
      console.logo(data.choices[0].message.content)
      setOutputMessage(data.choices[0].message.content.trim())
    })
  }

  const generateImages=()=>{
    console.log(inputMessage)
    fetch("https://api.openai.com/v1/images/generations", {
      method:"POST",
      headers:{
          "Content-Type": "application/json",
          "Authoriztaion": "Bearer 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"
      },
      body:JSON.stringify({
        "prompt": inputMessage ,
        "n": 2,
        "size": "1024x1980"
      
      })
    }).then((response)=>response.json).then((data)=>{
      console.logo(data.data[0].url)
      setOutputMessage(data.data[0].url)
    })
  }



  const handleTextInput=(text)=>{
    swtInputMessage(text)
    console.log(text)
  }
 
//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
  
  return (
    <View style={styles.container}>
      <view style={{ flex:1, justifyContent: "center" }}>
      <Text>{outputMessage}</Text>
      </view>
      
      <view style={{ flexDirection: "row" }}>
        <view style={{ flex:1, marginLeft: 10 }}>
        <TextInput placeholder= 'Enter your question ' onChangeText={handleTextInput}></TextInput>
        </view>
      
      
      <TouchableOpacity onPress={generateImages}>
        <view> style={{ backgroundColor: "red", padding: 5, marignRight: 10, marginBottom:20 }}
        <Text>Sends</Text>
        </view>
      
      </TouchableOpacity>
      </view>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

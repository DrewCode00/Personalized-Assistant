import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import { TouchableOpacity } from 'react-native-web';
export default function App() {

  const[messages, setMessages]= useState([])
  const [inputMessage,setInputMessage] = usteState("")
  const [outputMessage,setOutputMessage] = usteState("results to be shown here")
    const handleButtonClick=()=>{
    console.log(inputMessage)
    const meessage = {
      _id:Math.random().toString(36).substring(7),
      text:inputMessage,
      createdAt: new Date(),
      user:{_id:1}
    }
    setMessages((previousMessages)=>
      GiftedChat.append(previousMessages,[message])
    )
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
      console.log(data.choices[0].message.content)
      setOutputMessage(data.choices[0].message.content.trim())
      const meessage = {
        _id:Math.random().toString(36).substring(7),
        text:data.choices[0].message.content.trim(),
        createdAt: new Date(),
        user:{_id:2, name: "Open AI"}
      }
      setMessages((previousMessages)=>
        GiftedChat.append(previousMessages,[message])
      )
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
    <View style={{ flex: 1 }}>
      <view style={{ flex:1, justifyContent: "center" }}>
     <Text>{outputMessage}</Text>
     <GiftedChat messages={messages} renderInputToolbar={() => {}}/>
      <GiftedChat messages={messages} renderInputToolbar={()=> {}} user={{_id:1}} minInputToolbarHeight={0}/>
      </view>
      
      <view style={{ flexDirection: "row" }}>
        <view style={{ flex:1, marginLeft: 10, marginBottom: 20, backgroundColor:"white", borderRadius:10, borderColor:"grey", borderWidth:1,  height:60, margingLeft:10, margingRight:10,justifyContent: "center", paddingLeft: 10, paddingRight:10}}>
        <TextInput placeholder= 'Enter your question ' onChangeText={handleTextInput}></TextInput>
        </view>
      
      
      <TouchableOpacity onPress={handleButtonClick}>
        <view> style={{ backgroundColor: "green", padding: 5, marignRight: 10, marginBottom:20,borderRadius: 9999, width:60, height:60, justifyContent: "center", }}
       < MaterialIcons name="send"  size={30} color="white" style={{ marginLeft: 10 }} />
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

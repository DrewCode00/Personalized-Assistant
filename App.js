import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={{ flex:1, justifyContent: "center" }}>
      <Text>Results Will Be showed here!</Text>
      </view>
      
      <view style={{ flexDirection: "row" }}>
        <view style={{ flex:1, marginLeft: 10 }}>
        <TextInput placeholder= 'Enter your question '></TextInput>
        </view>
      
      
      <TouchableOpacity>
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

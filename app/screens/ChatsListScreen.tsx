import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {useChatsStore} from '../chat/chatStore';

type ChatsScreenProps = {
  navigation: any;
};

export const ChatListScreen = ({navigation}: ChatsScreenProps) => {
  const {chats, pollMessages} = useChatsStore();
  const [loading, setLoading] = useState(false);

  const pollMessagesFromServer = async () => {
    console.log('Polling');
    setLoading(true);
    await pollMessages();
    setLoading(false);
    console.log('Finished');
  };

  useEffect(() => {
    pollMessagesFromServer()
    const interval = setInterval(pollMessagesFromServer, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <FlatList
      data={chats}
      renderItem={({item}) => (
        <Card 
        onPress = {() => navigation.navigate('ChatDetail', {message: item})}
        style={styles.card}>
          <Card.Title
            title={'id: ' + item.roomId + ' from: ' + item.fromName}
          />
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
  },
});

import React, {useEffect, useState} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {Message, useChatsStore} from '../chat/chatStore';

export const ChatScreen = ({route, navigation}: any) => {
  const {message} = route.params;
  const {getChat} = useChatsStore();
  const [chat, setChat] = useState<Message[]>([]);

  useEffect(() => {
    const data = getChat(message.roomId);
    setChat(getChat(message.roomId));

    navigation.setOptions({title: message.fromName});
  }, []);

  return (
    <FlatList
      data={chat}
      renderItem={({item}) => (
        <Card
          style={styles.card}>
          <Card.Title
            title={'body: ' + item.body.body }
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

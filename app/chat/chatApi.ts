import { Message } from "./chatStore";

const url = "http://192.168.1.21:3000"
export const getMessageFromServer = async () => {
    try {
        const response = await fetch(url + "/api/message");
        const json = await response.json();
        return json as Message;
      } catch (error) {
        console.error(error);
        return null
      }
};


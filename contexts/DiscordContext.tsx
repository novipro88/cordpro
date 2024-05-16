'use client';

import { DiscordServer } from '@/app/page';
<<<<<<< HEAD
import { MemberRequest, StreamVideoClient } from '@stream-io/video-client';
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
import { createContext, useCallback, useContext, useState } from 'react';
import { Channel, ChannelFilters, StreamChat } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-react';
import { v4 as uuid } from 'uuid';

type DiscordState = {
  server?: DiscordServer;
<<<<<<< HEAD
  callId: string | undefined;
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
  channelsByCategories: Map<string, Array<Channel<DefaultStreamChatGenerics>>>;
  changeServer: (server: DiscordServer | undefined, client: StreamChat) => void;
  createServer: (
    client: StreamChat,
<<<<<<< HEAD
    videoClient: StreamVideoClient,
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
    name: string,
    imageUrl: string,
    userIds: string[]
  ) => void;
  createChannel: (
    client: StreamChat,
    name: string,
    category: string,
    userIds: string[]
  ) => void;
<<<<<<< HEAD
  createCall: (
    client: StreamVideoClient,
    serverName: string,
    channelName: string,
    userIds: string[]
  ) => Promise<void>;
  setCall: (callId: string | undefined) => void;
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
};

const initialValue: DiscordState = {
  server: undefined,
<<<<<<< HEAD
  callId: undefined,
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
  channelsByCategories: new Map(),
  changeServer: () => {},
  createServer: () => {},
  createChannel: () => {},
<<<<<<< HEAD
  createCall: async () => {},
  setCall: () => {},
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
};

const DiscordContext = createContext<DiscordState>(initialValue);

export const DiscordContextProvider: any = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [myState, setMyState] = useState<DiscordState>(initialValue);

  const changeServer = useCallback(
    async (server: DiscordServer | undefined, client: StreamChat) => {
<<<<<<< HEAD
=======
      console.log('[changeServer] server: ', server);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
      let filters: ChannelFilters = {
        type: 'messaging',
        members: { $in: [client.userID as string] },
      };
      if (!server) {
        filters.member_count = 2;
      }

<<<<<<< HEAD
      console.log(
        '[DiscordContext - loadServerList] Querying channels for ',
        client.userID
      );
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
      const channels = await client.queryChannels(filters);
      const channelsByCategories = new Map<
        string,
        Array<Channel<DefaultStreamChatGenerics>>
      >();
      if (server) {
        const categories = new Set(
          channels
            .filter((channel) => {
              return channel.data?.data?.server === server.name;
            })
            .map((channel) => {
              return channel.data?.data?.category;
            })
        );

        for (const category of Array.from(categories)) {
          channelsByCategories.set(
            category,
            channels.filter((channel) => {
              return (
                channel.data?.data?.server === server.name &&
                channel.data?.data?.category === category
              );
            })
          );
        }
      } else {
        channelsByCategories.set('Direct Messages', channels);
      }
      setMyState((myState) => {
        return { ...myState, server, channelsByCategories };
      });
    },
    [setMyState]
  );

  const createServer = useCallback(
    async (
      client: StreamChat,
<<<<<<< HEAD
      videoClient: StreamVideoClient,
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
      name: string,
      imageUrl: string,
      userIds: string[]
    ) => {
<<<<<<< HEAD
      const messagingChannel = client.channel('messaging', uuid(), {
=======
      const channel = client.channel('messaging', uuid(), {
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
        name: 'Welcome',
        members: userIds,
        data: {
          image: imageUrl,
          server: name,
          category: 'Text Channels',
        },
      });
<<<<<<< HEAD
      const callId = uuid();
      const audioCall = videoClient.call('default', callId);
      const audioChannelMembers: MemberRequest[] = userIds.map((userId) => {
        return {
          user_id: userId,
        };
      });

      try {
        const response = await messagingChannel.create();
        console.log('[DiscordContext - createServer] Response: ', response);
        const createdAudioCall = await audioCall.create({
          data: {
            custom: {
              serverName: name,
              channelName: 'General Voice Channel',
            },
            members: audioChannelMembers,
          },
        });
        changeServer({ name, image: imageUrl }, client);
      } catch (err) {
        console.error(err);
=======
      try {
        const response = await channel.create();
        console.log('[createServer] Response: ', response);
        changeServer({ name, image: imageUrl }, client);
      } catch (err) {
        console.log(err);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
      }
    },
    [changeServer]
  );

  const createChannel = useCallback(
    async (
      client: StreamChat,
      name: string,
      category: string,
      userIds: string[]
    ) => {
      if (client.userID) {
        const channel = client.channel('team', {
          name: name,
          members: userIds,
          data: {
            server: myState.server?.name,
            category: category,
          },
        });
        try {
          const response = await channel.create();
<<<<<<< HEAD
=======
          console.log('[createChannel] Response: ', response);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
        } catch (err) {
          console.log(err);
        }
      }
    },
    [myState.server?.name]
  );

<<<<<<< HEAD
  const createCall = useCallback(
    async (
      client: StreamVideoClient,
      serverName: string,
      channelName: string,
      userIds: string[]
    ) => {
      const callId = uuid();
      const audioCall = client.call('default', callId);
      const audioChannelMembers: MemberRequest[] = userIds.map((userId) => {
        return {
          user_id: userId,
        };
      });
      try {
        const createdAudioCall = await audioCall.create({
          data: {
            custom: {
              serverName: serverName,
              callName: channelName,
            },
            members: audioChannelMembers,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  const setCall = useCallback(
    (callId: string | undefined) => {
      setMyState((myState) => {
        return { ...myState, callId };
      });
    },
    [setMyState]
  );

  const store: DiscordState = {
    server: myState.server,
    callId: myState.callId,
=======
  const store: DiscordState = {
    server: myState.server,
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
    channelsByCategories: myState.channelsByCategories,
    changeServer: changeServer,
    createServer: createServer,
    createChannel: createChannel,
<<<<<<< HEAD
    createCall: createCall,
    setCall: setCall,
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
  };

  return (
    <DiscordContext.Provider value={store}>{children}</DiscordContext.Provider>
  );
};

export const useDiscordContext = () => useContext(DiscordContext);

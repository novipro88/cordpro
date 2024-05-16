'use client';

<<<<<<< HEAD
=======
import { PropsWithChildren } from 'react';
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
import { ChannelListMessengerProps } from 'stream-chat-react';

import { useDiscordContext } from '@/contexts/DiscordContext';
import CreateChannelForm from './CreateChannelForm/CreateChannelForm';
import UserBar from './BottomBar/ChannelListBottomBar';
<<<<<<< HEAD
import ChannelListTopBar from './TopBar/ChannelListTopBar';
import CategoryItem from './CategoryItem/CategoryItem';
import CallList from './CallList/CallList';

const CustomChannelList: React.FC<ChannelListMessengerProps> = () => {
  const { server, channelsByCategories } = useDiscordContext();
=======
import { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from 'stream-chat-react/dist/types/types';
import { DiscordServer } from '@/app/page';
import ChannelListTopBar from './TopBar/ChannelListTopBar';
import CategoryItem from './CategoryItem/CategoryItem';

const CustomChannelList: React.FC<ChannelListMessengerProps> = (
  props: PropsWithChildren<ChannelListMessengerProps>
) => {
  console.log('[CustomChannelList]');
  const { server } = useDiscordContext();
  const channelsByCategories = splitChannelsIntoCategories(
    props.loadedChannels || [],
    server
  );
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2

  return (
    <div className='w-72 bg-medium-gray h-full flex flex-col items-start'>
      <ChannelListTopBar serverName={server?.name || 'Direct Messages'} />

      <div className='w-full'>
        {Array.from(channelsByCategories.keys()).map((category, index) => (
          <CategoryItem
            key={`${category}-${index}`}
            category={category}
            serverName={server?.name || 'Direct Messages'}
            channels={channelsByCategories.get(category) || []}
          />
        ))}
      </div>
<<<<<<< HEAD
      <CallList />
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
      <CreateChannelForm />
      <UserBar />
    </div>
  );
};

<<<<<<< HEAD
=======
function splitChannelsIntoCategories(
  channels: Channel<DefaultStreamChatGenerics>[],
  server: DiscordServer | undefined
): Map<string, Array<Channel<DefaultStreamChatGenerics>>> {
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
  return channelsByCategories;
}

>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
export default CustomChannelList;

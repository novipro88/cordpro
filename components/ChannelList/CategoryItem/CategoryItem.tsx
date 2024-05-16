import Link from 'next/link';
import { Channel } from 'stream-chat';
<<<<<<< HEAD
=======
import { DefaultStreamChatGenerics } from 'stream-chat-react/dist/types/types';
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
import CustomChannelPreview from '../CustomChannelPreview';
import { useState } from 'react';
import { ChevronRight, PlusIcon } from '../Icons';

import './CategoryItem.css';
<<<<<<< HEAD
import { DefaultStreamChatGenerics } from 'stream-chat-react';
=======
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2

type CategoryItemProps = {
  category: string;
  channels: Channel<DefaultStreamChatGenerics>[];
  serverName: string;
};

export default function CategoryItem({
  category,
  serverName,
  channels,
}: CategoryItemProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='mb-5'>
      <div className='flex items-center text-gray-500 p-2'>
        <button
          className='flex w-full items-center justify-start'
          onClick={() => setIsOpen((currentValue) => !currentValue)}
        >
          <div
            className={`${
              isOpen ? 'rotate-90' : ''
            } transition-all ease-in-out duration-200`}
          >
            <ChevronRight />
          </div>
<<<<<<< HEAD
          <span className='inline-block uppercase text-sm font-bold px-2'>
=======
          <span className='inline-block uppercase text-sm font-bold  px-2'>
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
            {category}
          </span>
        </button>
        <Link
          className='inline-block create-button'
          href={`/?createChannel=true&serverName=${serverName}&category=${category}`}
        >
          <PlusIcon />
        </Link>
      </div>
      {isOpen && (
        <div>
          {channels.map((channel) => {
            return (
              <CustomChannelPreview
                key={channel.id}
                channel={channel}
                className='w-full'
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

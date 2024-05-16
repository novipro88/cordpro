import {
  DefaultStreamChatGenerics,
  ReactionSelector,
  ReactionSelectorProps,
  useChannelStateContext,
  useMessageContext,
} from 'stream-chat-react';
import React, { forwardRef, useCallback } from 'react';

export const customReactionOptions = [
  {
    type: 'runner',
    Component: () => <>🏃🏼</>,
    name: 'Runner',
  },
  {
    type: 'sun',
    Component: () => <>🌞</>,
    name: 'Sun',
  },
  {
    type: 'star',
    Component: () => <>🤩</>,
    name: 'Star',
  },
  {
    type: 'confetti',
    Component: () => <>🎉</>,
    name: 'Confetti',
  },
  {
    type: 'howdy',
    Component: () => <>🤠</>,
    name: 'Howdy',
  },
];

export const CustomReactionSelector = forwardRef<
  ReactionSelectorProps<DefaultStreamChatGenerics>
>(function CustomReactionSelector(props, ref) {
  const {
    message: { own_reactions: ownReactions = [], id: messageId },
  } = useMessageContext('CustomReactionSelector');
  const { channel } = useChannelStateContext('CustomReactionSelector');

  const handleReaction = useCallback(
    async (reactionType: any, event: any) => {
<<<<<<< HEAD
=======
      // your custom logic with default behavior (minus optimistic updates)

      console.log({ event });

>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
      const hasReactedWithType =
        (ownReactions ?? []).some(
          (reaction) => reaction.type === reactionType
        ) ?? false;

      if (hasReactedWithType) {
        await channel.deleteReaction(messageId, reactionType);
        return;
      }

      await channel.sendReaction(messageId, { type: reactionType });
    },
    [channel, ownReactions, messageId]
  );

  return (
    <ReactionSelector {...props} handleReaction={handleReaction} ref={ref} />
  );
});

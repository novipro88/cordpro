import { clerkClient } from '@clerk/nextjs';
import { StreamChat } from 'stream-chat';

export async function POST(request: Request) {
<<<<<<< HEAD
  const serverClient = StreamChat.getInstance(
    'uemvyegzwzur',
    process.env.STREAM_CHAT_SECRET
  );
  const body = await request.json();
  console.log('[/api/register-user] Body:', body);
=======
  const apiKey = 'uemvyegzwzur';

  const serverClient = StreamChat.getInstance(
    apiKey,
    process.env.STREAM_CHAT_SECRET
  );
  const body = await request.json();
  console.log('Body:', body);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2

  const userId = body?.userId;
  const mail = body?.email;

  if (!userId || !mail) {
    return Response.error();
  }

  const user = await serverClient.upsertUser({
    id: userId,
    role: 'user',
    name: mail,
    imageUrl: `https://getstream.io/random_png/?id=${userId}&name=${mail}`,
  });

  const params = {
    publicMetadata: {
      streamRegistered: true,
    },
  };
  const updatedUser = await clerkClient.users.updateUser(userId, params);

<<<<<<< HEAD
  console.log('[/api/register-user] User:', updatedUser);
=======
  console.log('User:', updatedUser);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
  const response = {
    userId: userId,
    userName: mail,
  };

  return Response.json(response);
}

import { UserObject } from '@/model/UserObject';
import { StreamChat } from 'stream-chat';

export async function GET() {
<<<<<<< HEAD
  const serverClient = StreamChat.getInstance(
    'uemvyegzwzur',
=======
  const apiKey = 'uemvyegzwzur';

  const serverClient = StreamChat.getInstance(
    apiKey,
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
    process.env.STREAM_CHAT_SECRET
  );
  const response = await serverClient.queryUsers({});
  const data: UserObject[] = response.users
    .filter((user) => user.role !== 'admin')
    .map((user) => {
      return {
        id: user.id,
        name: user.name ?? user.id,
        image: user.image as string,
        online: user.online,
        lastOnline: user.last_active,
      };
    });

  return Response.json({ data });
}

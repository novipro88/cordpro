import { StreamChat } from 'stream-chat';

export async function POST(request: Request) {
<<<<<<< HEAD
  const serverClient = StreamChat.getInstance(
    'uemvyegzwzur',
    process.env.STREAM_CHAT_SECRET
  );
  const body = await request.json();
  console.log('[/api/token] Body:', body);
=======
  const apiKey = "uemvyegzwzur";

  const serverClient = StreamChat.getInstance(
    apiKey,
    process.env.STREAM_CHAT_SECRET
  );
  const body = await request.json();
  console.log('Body:', body);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2

  const userId = body?.userId;

  if (!userId) {
    return Response.error();
  }

  const token = serverClient.createToken(userId);

  const response = {
    userId: userId,
    token: token,
  };

  return Response.json(response);
}

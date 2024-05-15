import { StreamChat } from 'stream-chat';

export async function POST(request: Request) {
  const apiKey = "uemvyegzwzur";

  const serverClient = StreamChat.getInstance(
    apiKey,
    process.env.STREAM_CHAT_SECRET
  );
  const body = await request.json();
  console.log('Body:', body);

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

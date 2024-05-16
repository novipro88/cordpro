"use client";

import { User } from "stream-chat";
import { LoadingIndicator } from "stream-chat-react";

import { useClerk } from "@clerk/nextjs";
import { useCallback, useEffect, useState } from "react";
import MyChat from "@/components/MyChat";

<<<<<<< HEAD
const apiKey = "uemvyegzwzur";
=======
const apiKey = 'uemvyegzwzur';
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2

export type DiscordServer = {
  name: string;
  image: string | undefined;
};

export type Homestate = {
  apiKey: string;
  user: User;
  token: string;
};

export default function Home() {
<<<<<<< HEAD
=======
  console.log("[Create]");
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
  const [myState, setMyState] = useState<Homestate | undefined>(undefined);

  const { user: myUser } = useClerk();

  const registerUser = useCallback(
    async function registerUser() {
      // register user on Stream backend
<<<<<<< HEAD
      console.log("[registerUser] myUser:", myUser);
=======
      console.log("[RU] myUser:", myUser);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
      const userId = myUser?.id;
      const mail = myUser?.primaryEmailAddress?.emailAddress;
      if (userId && mail) {
        const streamResponse = await fetch("/api/register-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            email: mail,
          }),
        });
        const responseBody = await streamResponse.json();
<<<<<<< HEAD
        console.log("[registerUser] Stream response:", responseBody);
=======
        console.log("Stream response:", responseBody);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
        return responseBody;
      }
    },
    [myUser]
  );

  useEffect(() => {
    if (
      myUser?.id &&
      myUser?.primaryEmailAddress?.emailAddress &&
      !myUser?.publicMetadata.streamRegistered
    ) {
<<<<<<< HEAD
      console.log("[Page - useEffect] Registering user on Stream backend");
      registerUser().then((result) => {
        console.log("[Page - useEffect] Result: ", result);
=======
      console.log("Registering user on Stream backend");
      registerUser().then((result) => {
        console.log("Result: ", result);
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
        getUserToken(
          myUser.id,
          myUser?.primaryEmailAddress?.emailAddress || "Unknown"
        );
      });
    } else {
      // take user and get token
<<<<<<< HEAD
      if (myUser?.id) {
        console.log(
          "[Page - useEffect] User already registered on Stream backend: ",
          myUser?.id
        );
        getUserToken(
          myUser?.id || "Unknown",
          myUser?.primaryEmailAddress?.emailAddress || "Unknown"
        );
      }
=======
      console.log("User already registered on Stream backend");
      getUserToken(
        myUser?.id || "Unknown",
        myUser?.primaryEmailAddress?.emailAddress || "Unknown"
      );
>>>>>>> b342500b1a191689c766d72f7ee4e83c123f18c2
    }
  }, [registerUser, myUser]);

  if (!myState) {
    return <LoadingIndicator />;
  }

  return <MyChat {...myState} />;

  async function getUserToken(userId: string, userName: string) {
    const response = await fetch("/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    });
    const responseBody = await response.json();
    const token = responseBody.token;

    if (!token) {
      console.error("Couldn't retrieve token.");
      return;
    }

    const user: User = {
      id: userId,
      name: userName,
      image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
    };
    setMyState({
      apiKey: apiKey,
      user: user,
      token: token,
    });
  }
}

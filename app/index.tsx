import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import { useQuery, gql } from "@apollo/client";

interface User {
  __typename: string;
  id: number;
  name: string;
}

interface Post {
  __typename: string;
  id: number;
  userId: number;
  title: string;
  body: string;
  userName: string;
}

interface PostWithUserName extends Post {
  userName: string;
}

const GET_POSTS = gql`
  query {
    posts {
      totalCount
      nodes {
        id
        userId
        title
        body
      }
    }
  }
`;
const GET_USERS = gql`
  query {
    users {
      totalCount
      nodes {
        id
        name
      }
    }
  }
`;

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
  } = useQuery(GET_POSTS);
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useQuery(GET_USERS);

  if (postsError) {
    console.log(postsError);
  }

  if (usersError) {
    console.log(usersError);
  }

  useEffect(() => {
    if (usersData && postsData) {
      const users: User[] = usersData["users"]["nodes"];
      const posts: Post[] = postsData["posts"]["nodes"];
      // Step 1: Create a dictionary from the users array
      const userDictionary: Record<number, string> = users.reduce(
        (acc: any, user) => {
          acc[user.id] = user.name;
          return acc;
        },
        {}
      );
      // Step 2: Map posts to include user names
      const postsWithUserNames: PostWithUserName[] = posts.map((post) => ({
        ...post,
        userName: userDictionary[post.userId] || "Unknown",
      }));
      setPosts(postsWithUserNames);
    }
  }, [usersData, postsData]);

  return usersLoading ? (
    <ActivityIndicator
      color="black"
      size={60}
      className="flex-1 justify-center items-center"
      style={{ height: "100%", backgroundColor: "#edffef" }}
    />
  ) : (
    <SafeAreaView className="bg-[#edffef] h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full mt-4 mb-12">
          {posts.map((value, index, arr) => {
            return (
              <Card
                key={posts[index]["id"]}
                userName={posts[index]["userName"]}
                userId={posts[index]["userId"]}
                title={posts[index]["title"]}
                content={posts[index]["body"]}
              />
            );
          })}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

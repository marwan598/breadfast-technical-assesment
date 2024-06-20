import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  TouchableNativeFeedback,
  View
} from 'react-native';
import Card from '../components/Card';
import { useQuery } from '@apollo/client';
import { GET_POSTS, GET_USERS } from '../constants/client';
import { router } from 'expo-router';
import { Post, PostWithUserName, User } from '../constants/constants';

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
    refetch: postsRefetch
  } = useQuery(GET_POSTS);
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError
  } = useQuery(GET_USERS);

  if (postsError) {
    console.log(postsError);
  }

  if (usersError) {
    console.log(usersError);
  }

  useEffect(() => {
    if (usersData && postsData) {
      const users: User[] = usersData.users.nodes;
      const postsArr: Post[] = postsData.posts.nodes;
      // Create a dictionary from the users array
      const userDictionary: Record<number, string> = users.reduce(
        (acc: any, user) => {
          acc[user.id] = user.name;
          return acc;
        },
        {}
      );
      //  Map posts to include user names
      const postsWithUserNames: PostWithUserName[] = postsArr.map((post) => ({
        ...post,
        userName: userDictionary[post.userId] || 'Unknown'
      }));
      setPosts(postsWithUserNames);
    }
  }, [usersData, postsData, postsRefetch]);

  return usersLoading || postsLoading ? (
    <ActivityIndicator
      color="#aa0082"
      size="large"
      className="flex-1 justify-center items-center h-full bg-gray-50"
    />
  ) : (
    <View className="bg-gray-50 h-full">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={postsLoading} onRefresh={postsRefetch} />
        }
      >
        <View className="w-full justify-center items-center h-full mb-12">
          {posts.map((value, index) => {
            return (
              <TouchableNativeFeedback
                key={posts[index].id}
                onPress={() =>
                  router.push({
                    pathname: '/post_details',
                    params: { ...posts[index] }
                  })
                }
              >
                <Card
                  onPress={() =>
                    router.push({
                      pathname: '/post_details',
                      params: { ...posts[index] }
                    })
                  }
                  userName={posts[index].userName}
                  userId={posts[index].userId}
                  title={posts[index].title}
                  content={posts[index].body}
                  contentNumberOfLines={2}
                />
              </TouchableNativeFeedback>
            );
          })}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

export default Index;

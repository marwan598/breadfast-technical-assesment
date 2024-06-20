import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Card from '../components/Card';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import Comment from '../components/Comment';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../constants/client';
import { IComment } from '../constants/constants';
import Divider from '../components/Divider';

const PostDetails = () => {
  const params = useLocalSearchParams();
  const [comments, setComments] = useState<IComment[]>([]);
  const {
    body: postBody,
    id: postId,
    title: postTitle,
    userId,
    userName
  } = params;

  const {
    data: commentsData,
    loading: commentsLoading,
    error: commentsError
  } = useQuery(GET_COMMENTS);

  if (commentsError) {
    console.log(commentsError);
  }

  useEffect(() => {
    if (commentsData) {
      const postComments = commentsData.comments.nodes
        .filter(
          (comment: IComment) =>
            comment.postId === parseInt(postId?.toString() ?? '0', 10)
        )
        .map((comment: IComment) => {
          return comment;
        });
      setComments(postComments);
    }
  }, [commentsData, postId]);

  return commentsLoading ? (
    <ActivityIndicator
      color="#aa0082"
      size="large"
      className="flex-1 justify-center items-center h-full bg-gray-50"
    />
  ) : (
    <View className="bg-gray-50 h-full ">
      <View className="w-full justify-center items-center shadow-sm shadow-slate-300  ">
        <Card
          userName={userName?.toString() ?? ''}
          userId={parseInt(userId?.toString() ?? '0', 10)}
          title={postTitle?.toString() ?? ''}
          content={postBody?.toString() ?? ''}
        />
        <ScrollView
          className="bg-white w-[43vh] rounded-b-2xl pb-5"
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          <View className="items-start w-full pt-4 px-4 ">
            <Text className="text-black font-fmedium text-md ">
              Comments{' '}
              <Text className="text-black opacity-70">({comments.length})</Text>
            </Text>
          </View>
          {comments.map((comment) => (
            <View key={comment.id}>
              <Comment
                body={comment.body}
                userId={comment.id.toString()}
                userName={comment.name}
              />
              {comments.indexOf(comment) === comments.length - 1 ? null : (
                <View className="w-full items-center">
                  <Divider />
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PostDetails;

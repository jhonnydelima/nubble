import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {useGetUserById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isError, user, refetch, isFetching} =
    useGetUserById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center">
            <ProfileAvatar
              imageUrl={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}

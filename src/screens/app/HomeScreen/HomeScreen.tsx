import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, usePostList} from '@domain';

import {PostItem, Screen} from '@components';
import {AppBottomTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export function HomeScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppBottomTabScreenProps<'HomeScreen'>) {
  const {error, loading, postList, refetch, fetchNextPage} = usePostList();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={refetch} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};

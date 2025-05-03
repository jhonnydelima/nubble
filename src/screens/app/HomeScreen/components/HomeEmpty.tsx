import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch?: () => void;
}

export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      Não há publicações no seu feed 😢
    </Text>
  );
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium">
          Não foi possível carregar o feed 😢
        </Text>
        {refetch && (
          <Button
            title="recarregar"
            preset="outline"
            mt="s16"
            onPress={refetch}
          />
        )}
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}

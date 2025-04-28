import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box {...$container} style={{paddingTop: top}}>
      <Box bg="carrotSecondary" height={16} width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bellOn" />
        <Icon name="chatOn" />
      </Box>
    </Box>
  );
}

const $container: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  px: 's24',
  pb: 's24',
};

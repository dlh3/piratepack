import { CardHeader, CardHeaderProps, styled } from '@mui/material';
import StreamButton from '@/common/StreamButton';

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(1),
  '.MuiCardHeader-title': {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

type BaseCardHeaderProps = { uid?: number } & CardHeaderProps;

function BaseCardHeader(props: BaseCardHeaderProps) {
  return (
    <StyledCardHeader
      {...props}
      title={<>
        <StreamButton
          uid={props.uid}
          title={props.title}
        />
        {props.title}
      </>}
      titleTypographyProps={{
        variant: 'subtitle2',
      }}
      subheaderTypographyProps={{ variant: 'subtitle2' }}
    />
  );
}

export default BaseCardHeader;

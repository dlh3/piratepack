import { colors, styled } from '@mui/material';
import PlayIcon from '@mui/icons-material/PlayCircleOutline';
import { ReactNode } from 'react';

const StyledStreamButton = styled('div')(({ theme }) => ({
  color: colors.red[500],
  display: 'inline',
  marginRight: '0.25em',
  verticalAlign: 'top',
}));

type StreamButtonProps = {
  uid?: number,
  title: ReactNode,
};

function StreamButton({ title, uid }: StreamButtonProps) {
  return uid && (
    <StyledStreamButton
      title={`Watch ${title}`}
      onClick={(e) => {
        e.preventDefault();
        window.open(`https://vidsrc.to/embed/movie/${uid}`, '_blank');
      }}
    >
      <PlayIcon fontSize="medium" />
    </StyledStreamButton>
  ) || (
      <></>
    );
}

export default StreamButton;

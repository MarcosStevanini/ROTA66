import React from 'react';

import * as S from './playlist.styles';
import * as T from './playlist.types';

const Playlist: React.FC<T.PlaylistProps> = () => {
  return (
    <S.Container>
      <S.Text>Playlist</S.Text>
    </S.Container>
  );
};

export default Playlist;

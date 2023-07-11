import * as S from './Avatar.styles';

interface AvatarProps {
  src: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <S.AvatarWrapper role="img" aria-label="user">
      <S.Avatar src={src} alt="avatar" />
    </S.AvatarWrapper>
  );
}

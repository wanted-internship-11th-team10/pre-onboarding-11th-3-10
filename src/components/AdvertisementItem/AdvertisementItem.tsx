import { advertisementData } from '@/const';
import * as S from './AdvertisementItem.styles';

interface AdvertisementItemProps {
  index: number;
  isView?: boolean;
}

export function AdvertisementItem({ index, isView = false }: AdvertisementItemProps) {
  if (!isView) {
    return null;
  }

  const advertisement = getAdvertisement(index);
  return (
    <S.AdvertisementItemWrapper>
      <S.Advertisement href={advertisement.link} target="_blank">
        <img src={advertisement.imgSrc} alt="ad" />
      </S.Advertisement>
    </S.AdvertisementItemWrapper>
  );
}

function getAdvertisement(index: number) {
  return advertisementData[index % advertisementData.length];
}

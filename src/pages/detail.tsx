import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getDetail } from '@/api/detail';
import { Error, LoadingView } from '@/components';
import DetailBox from '@/components/DetailBox';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState<DetailDTO>();
  const [Loading, setLoading] = useState(true);

  const fetchIssue = async (id: string) => {
    try {
      const res = await getDetail(id);
      setData(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchIssue(id as string);
    }
  }, [id]);

  return Loading ? <LoadingView /> : data ? <DetailBox data={data} /> : <Error />;
};

export default Detail;

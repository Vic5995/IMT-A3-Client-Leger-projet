import { useEffect, useState } from 'react';
import { Student } from '../types';

const useFetchStudent = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Student[]>([]);

  const fetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((students) => {
        setData(students);
      })
      .catch((error) => {
        console.error('ERROR! LOADING STUDENTS APP', error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data };
};

export default useFetchStudent;

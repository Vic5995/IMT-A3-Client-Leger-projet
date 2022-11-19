import { useEffect, useState } from "react";
import { Gender, Status, Student } from "../types";

const useFetchStudent = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Student[]>([]);

  const fetchApi = () => {
    fetch(url).then((response) => response.json())
    .then((students) => {
      const tmp = students.map((student: any) => {
        let newStatus =
          student.status === 'PRESENT'
            ? Status.PRESENT
            : student.status === 'REMOTE'
            ? Status.REMOTE
            : Status.ABSENT;
        let newGender =
          student.gender === 'MAN'
            ? Gender.MAN
            : student.gender === 'WOMAN'
            ? Gender.WOMAN
            : Gender.NB;
        return { ...student, status: newStatus, gender: newGender };
      });
      setData(tmp);
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
}

export default useFetchStudent;
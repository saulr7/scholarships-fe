import { useEffect, useState } from "react";
import ScholarshipModel from "../../models/scholarshipModel";
import { getAll } from "../../services/scholarshipsService";
import ScholarshipsCard from "./ScholarshipsCard";

const Scholarships = () => {
  const [scholarships, setScholarships] = useState<ScholarshipModel[]>([]);

  const fetchScholarships = () => {
    getAll().then((resp) => {
      const scholarshipsList = resp.data;
      setScholarships(scholarshipsList);
    });
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  return (
    <div className='mx-8 pb-10'>
      {scholarships.map((scholarship) => {
        return (
          <ScholarshipsCard
            key={scholarship.id}
            scholarship={scholarship}
            onRemove={fetchScholarships}
          />
        );
      })}
    </div>
  );
};

export default Scholarships;

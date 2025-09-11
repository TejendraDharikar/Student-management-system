import { useQuery } from '@tanstack/react-query';
import { fetchStudent } from '../../ApiStore/Api_student/ApiData_stud';

const StudentHome = () => {
  const email = localStorage.getItem("studentEmail"); // or from context

  const {
    data: student,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["student", email],
    queryFn: () => fetchStudent(email),
    enabled: !!email, // only run if email exists
  });

  if (isLoading) return <p>Loading student data...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!student) return <p>No student found.</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
      <p><strong>Roll No:</strong> {student.rollno}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Class:</strong> {student.class}</p>
    </div>
  );
};



export default StudentHome

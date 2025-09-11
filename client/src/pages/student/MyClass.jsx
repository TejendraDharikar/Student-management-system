import { useQuery } from '@tanstack/react-query';
import { fetchClasses } from '../../ApiStore/Api_student/ApiData_stud';


const MyClass = () => {
const { data, isLoading, isError, error } = useQuery({
    queryKey: ['classes'],
    queryFn: fetchClasses,
  });

  if (isLoading) return <p className="text-center text-gray-500">Loading classes...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Classes</h2>
      <div className="space-y-4">
        {data.map((cls) => (
          <div
            key={cls.id}
            className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition duration-200"
          >
            <h3 className="text-lg font-bold text-gray-900">{cls.subject}</h3>
            <p className="text-sm text-gray-700">Teacher: {cls.teacher}</p>
            <p className="text-sm text-gray-600">Schedule: {cls.schedule}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                cls.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {cls.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

};

export default MyClass;

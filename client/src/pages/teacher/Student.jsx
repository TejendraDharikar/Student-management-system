import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createStudent,
  deleteStudent,
  fetchStudents,
  updateStudent,
} from "../../ApiStore/API_teacher/Api_student";
import { useState } from "react";

const Student = () => {
  const Client = useQueryClient();
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    rollno: "",
    name: "",
    class: "",
    email: "",
  });

  const {
    data: students,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });

  const createMutation = useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      Client.invalidateQueries(["students"]);
      setShowForm(false);
      setFormData({ name: "", rollno: "", email: "", class: "" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      Client.invalidateQueries(["students"]);
      setShowForm(false);
      setEditingId(null);
      setFormData({ name: "", rollno: "", email: "", class: "" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => Client.invalidateQueries(["students"]),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      updateMutation.mutate({ id: editingId, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <p>Loading students data</p>;
  if (isError) return <p>Error:{error.message}</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Students Detail</h2>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showForm ? "Cancel" : "Add Student"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Roll No"
            value={formData.rollno}
            onChange={(e) =>
              setFormData({ ...formData, rollno: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Class"
            value={formData.class}
            onChange={(e) =>
              setFormData({ ...formData, class: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      )}
      <ul className="space-y-3">
        {students.map((student) => (
          <li
            key={student.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{student.name}</p>
              <p>Rollno: {student.rollno}</p>
              <p className="text-sm text-gray-600">Email: {student.email}</p>
              <p className="text-sm text-gray-600">Class: {student.class}</p>
            </div>
            <div className="flex gap-3">
 <button
              onClick={() => {
                setFormData({
                  name: student.name,
                  rollno: student.rollno,
                  email: student.email,
                  class: student.class,
                });
                setEditingId(student.id);
                setShowForm(true);
              }}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(student.id)}
              className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;

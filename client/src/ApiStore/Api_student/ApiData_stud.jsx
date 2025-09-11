
// for fetching myclasses detail in student section
  export const fetchClasses = async () => {
  const res = await fetch("http://localhost/student-management-system/server/student/get_classes.php");
  const data = await res.json();
  if (!data.success) throw new Error("Failed to fetch classes");
  return data.data;
};

export const fetchStudent = async (email) => {
  const res = await fetch(`http://localhost/Student-Management-System/server/student/get_studentDetail.php?email=${email}`);
  const data = await res.json();
  if (!data.success) throw new Error(data.error || "Failed to fetch student data");
  return data.data;
};

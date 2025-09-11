 const  MAIN_URL="http://localhost/Student-Management-System/server/teacher";




//  for data fetching 

export const fetchStudents=async()=>{
  const res =await fetch (`${MAIN_URL}/get_students.php`);
  const data=await res.json();
  if (!data.success) throw new Error("failed to fetch students data");
  return data.data;
};


// for adding students

export const createStudent= async (newStudent)=>{
  const res = await fetch(`${MAIN_URL}/create_students.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStudent),
  });
  const data = await res.json();
  if (!data.success) throw new Error("Failed to create student");
  return data.data;

};



// For updating student data

export const updateStudent = async (student) => {
  const res = await fetch(`${MAIN_URL}/update_student.php`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  const data = await res.json();
  if (!data.success) throw new Error("Failed to update student");
  return data.data;
};







// for deleting student data 

export const deleteStudent= async(id)=>{
  const res=await fetch(`${MAIN_URL}/delete_student.php?id=${id}`,{
    method:"DELETE"
  });
  const data=await res.json();
  if (!data.success)throw new Error("failed to delete student");
};



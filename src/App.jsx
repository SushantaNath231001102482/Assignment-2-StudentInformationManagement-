import { useState } from "react";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const students = [
    {
      name: "Sushanta Nath",
      rollNumber: "231001102482",
      department: "BCA",
      semester: "6th Semester",
      cgpa: 8.7,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Rahul Sharma",
      rollNumber: "231001102483",
      department: "BCA",
      semester: "6th Semester",
      cgpa: 9.1,
      photo: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Priya Das",
      rollNumber: "231001102484",
      department: "BCA",
      semester: "6th Semester",
      cgpa: 8.4,
      photo: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Arjun Roy",
      rollNumber: "231001102485",
      department: "BCA",
      semester: "6th Semester",
      cgpa: 9.3,
      photo: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Ananya Sen",
      rollNumber: "231001102486",
      department: "BCA",
      semester: "6th Semester",
      cgpa: 8.9,
      photo: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "Rohan Gupta",
      rollNumber: "231001102487",
      department: "BCA",
      semester: "6th Semester",
      cgpa: 7.9,
      photo: "https://i.pravatar.cc/150?img=14"
    }
  ];

  const [sortOrder, setSortOrder] = useState("desc");

  const sortedStudents = [...students].sort((a, b) => {
    return sortOrder === "desc"
      ? b.cgpa - a.cgpa
      : a.cgpa - b.cgpa;
  });

  return (
    <div className="app">
      <Header title="Student Information Portal" />

      <main>
        <StudentList
          students={sortedStudents}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
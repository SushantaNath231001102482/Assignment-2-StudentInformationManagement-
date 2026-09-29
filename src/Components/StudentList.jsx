import StudentCard from "./StudentCard";

function StudentList({
  students,
  sortOrder,
  setSortOrder
}) {
  return (
    <section className="student-section">
      <div className="section-header">
        <div>
          <h2>Student Directory</h2>
          <p>{students.length} students registered</p>
        </div>

        <button
          className="sort-button"
          onClick={() =>
            setSortOrder(sortOrder === "desc" ? "asc" : "desc")
          }
        >
          {sortOrder === "desc"
            ? "CGPA: High → Low"
            : "CGPA: Low → High"}
        </button>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.rollNumber}
            student={student}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;
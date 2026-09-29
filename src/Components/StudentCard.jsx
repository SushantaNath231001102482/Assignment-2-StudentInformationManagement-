function StudentCard({ student }) {
  return (
    <article className="student-card">
      <div className="card-top">
        <img
          src={student.photo}
          alt={student.name}
          className="student-photo"
        />

        <div>
          <h3>{student.name}</h3>
          <span className="department">
            {student.department}
          </span>
        </div>
      </div>

      <div className="student-details">
        <div className="detail">
          <span>Roll Number</span>
          <strong>{student.rollNumber}</strong>
        </div>

        <div className="detail">
          <span>Department</span>
          <strong>{student.department}</strong>
        </div>

        <div className="detail">
          <span>Semester</span>
          <strong>{student.semester}</strong>
        </div>

        <div className="detail cgpa">
          <span>CGPA</span>
          <strong>{student.cgpa.toFixed(2)}</strong>
        </div>
      </div>
    </article>
  );
}

export default StudentCard;
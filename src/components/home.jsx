import React from 'react';
import '../assets/css/Main.css';

const semesters = [
  "CHE110", "CSE111", "CSE326", "ECE249", "ECE279", "INT108", "MTH174", "PES318",
  "CSE101", "CSE121", "CSE320", "INT306", "MEC135", "PHY110", "MTH401", "PEL130",
  "CSE202", "CSE205", "CSE211", "CSE306", "CSE307", "PEL134", "MTH302",
  "CSE310", "CSE316", "CSE325", "CSE408", "INT330", "INT362", "INT426", "PEA305"
];

function Main() {
  return (
    <main>
      <section className="semesters">
        {semesters.map((semester, index) => (
          <div className="semester" key={index}>{semester}</div>
        ))}
      </section>
    </main>
  );
}

export default Main;

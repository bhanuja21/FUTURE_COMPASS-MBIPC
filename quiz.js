const questions = [
  { question: "Which subject do you enjoy the most?", options: ["Biology", "Mathematics", "Physics", "Computer Science"] },
  { question: "What kind of career excites you?", options: ["Doctor", "Engineer", "Veterinarian", "AI Developer"] },
  { question: "Which lab session do you enjoy?", options: ["Biology Lab", "Physics Lab", "Chemistry Lab", "Computer Lab"] },
  { question: "Which entrance exam are you targeting?", options: ["NEET", "JEE", "EAMCET", "ICAR"] },
  { question: "What higher education are you aiming for?", options: ["MBBS/BDS", "B.Tech", "B.Sc Agriculture", "B.Sc Biotechnology"] },
  { question: "Which profession do you admire?", options: ["Dentist", "Software Engineer", "Pharmacist", "Agricultural Officer"] },
  { question: "What real-world problems interest you?", options: ["Health issues", "Building tech", "AI innovations", "Food production"] },
  { question: "What elective would you prefer?", options: ["Zoology", "Engineering Drawing", "Soil Science", "Machine Learning"] },
  { question: "What motivates you the most?", options: ["Saving lives", "Inventing things", "Feeding the nation", "Creating cures"] },
  { question: "Where do you see yourself working?", options: ["Hospital", "Tech Company", "Research Lab", "Farm Field"] },
  { question: "Which skill suits you best?", options: ["Empathy", "Problem Solving", "Observation", "Logical Thinking"] },
  { question: "How do you like to study?", options: ["Diagrams & biology", "Equations & logic", "Science experiments", "Computer coding"] },
  { question: "Which extracurricular interests you?", options: ["Health awareness", "Coding hackathons", "Science fairs", "Green farming"] },
  { question: "Which research field do you like?", options: ["Genetics", "Artificial Intelligence", "Pharmacology", "Crop Science"] },
  { question: "Your dream career is?", options: ["Doctor", "AI Developer", "Geneticist", "Data Scientist"] }
];

// 🎯 Career Tags
const careerTags = {
  "Doctor": ["Biology", "NEET", "MBBS", "Doctor", "Saving lives", "Hospital", "Zoology", "Empathy", "Health"],
  "Dentist": ["BDS", "Dentist", "Health", "NEET", "Biology", "Saving lives"],
  "Engineer": ["Mathematics", "Physics", "JEE", "B.Tech", "Engineer", "Inventing", "Problem Solving", "Engineering Drawing"],
  "AI Developer": ["AI", "Machine Learning", "Computer", "Coding", "Logical", "Tech Company", "Artificial Intelligence"],
  "Pharmacist": ["Pharmacist", "Pharmacology", "Chemistry", "Creating cures", "Research Lab"],
  "Data Scientist": ["Data", "Statistics", "Math", "AI", "Logical Thinking", "Problem Solving"],
  "Agricultural Expert": ["Agriculture", "ICAR", "Crop", "Food", "Field", "Farm", "Feeding the nation", "Soil Science"],
  "Biotechnologist": ["Biotech", "Genetics", "DNA", "Research Lab", "B.Sc Biotechnology", "Science fairs"],
  "Geneticist": ["Genetics", "DNA", "Biology", "Research", "Human Genome"],
  "Veterinarian": ["Veterinarian", "Animals", "Biology", "Zoology", "Health"]
};

// 🧠 Render Questions
const questionContainer = document.getElementById("question-container");

document.addEventListener("DOMContentLoaded", () => {
  questions.forEach((q, index) => {
    let html = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
    q.options.forEach(option => {
      html += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
    });
    questionContainer.innerHTML += html + "<br>";
  });
});

// ✅ Form Submission with Validation
document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const selectedAnswers = [];
  let allAnswered = true;

  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      selectedAnswers.push(selected.value);
    } else {
      allAnswered = false;
      alert(`⚠️ Please answer Question ${i + 1}: "${questions[i].question}"`);
      break;
    }
  }

  if (!allAnswered) return;

  // ✅ Scoring
  const scores = {};
  Object.keys(careerTags).forEach(career => scores[career] = 0);

  selectedAnswers.forEach(answer => {
    for (const [career, tags] of Object.entries(careerTags)) {
      if (tags.some(tag => answer.toLowerCase().includes(tag.toLowerCase()))) {
        scores[career]++;
      }
    }
  });

  // 🎯 Top 3 Careers
  const topCareers = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0])
    .slice(0, 3);

  // 💾 Store for result page
  localStorage.setItem("careerAnswers", JSON.stringify(selectedAnswers));
  localStorage.setItem("careerTopMatches", JSON.stringify(topCareers));

  // ✅ Redirect
  window.location.href = "results.html";
});

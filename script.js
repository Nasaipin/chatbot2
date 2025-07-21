const dataset = {
  "intents": [
    // 
  {
    "tag": "greeting",
    "patterns": ["hello", "hi", "good morning", "hey", "good afternoon"],
    "responses": ["Hello!", "Hi there!", "Hey! How can I help you?"]
  },
  {
    "tag": "goodbye",
    "patterns": ["bye", "see you later", "goodbye", "catch you later"],
    "responses": ["Goodbye!", "See you later!", "Take care!"]
  },
  {
    "tag": "thanks",
    "patterns": ["thanks", "thank you", "thx", "I appreciate it"],
    "responses": ["You're welcome!", "No problem!", "Anytime!"]
  },
  {
    "tag": "name",
    "patterns": ["what is your name", "who are you", "identify yourself"],
    "responses": ["I'm your chatbot assistant.", "You can call me ChatBot.", "I'm here to help you."]
  },
  {
    "tag": "hours",
    "patterns": ["what are your hours", "when are you open", "working hours", "opening time"],
    "responses": ["We’re open every day from 9am to 6pm.", "Our hours are 9 to 6 daily."]
  },
  {
    "tag": "location",
    "patterns": ["where are you located", "your address", "location", "where can I find you"],
    "responses": ["We are located at 123 Main Street.", "Our office is in Accra Central."]
  },
  {
    "tag": "help",
    "patterns": ["help", "I need help about how to find my causes on UENR portal", "can you help me", "assist me"],
    "responses": ["Sure, I'm here to help. What do you need?", "How can I assist you today?"]
  },
  {
    "tag": "weather",
    "patterns": ["what's the weather", "tell me the weather", "is it raining", "weather forecast"],
    "responses": ["I'm not connected to live weather, but you can check weather.com!", "Try using a weather app for accurate updates."]
  },
  {
    "tag": "home",
    "patterns": ["go home", "tell me the weather", "is it raining", "weather forecast"],
    "responses": ["I'm not connected to live weather, but you can check weather.com!", "Try using a weather app for accurate updates."]
  },


    {
      "tag": "the welcome text",
      "patterns": ["hi", "hello", "hey"],
      "responses": ["Hello! 😊", "Hi there!", "Hello 😊 welcome to UENR", "Hey! How can i help you today"]
    },
    {
      "tag": "goodbye",
      "patterns": ["bye", "goodbye", "see you"],
      "responses": ["Goodbye!", "See you soon!", "Take care! as i can't wait to see you soon. I must confess i love the way you've been chatting me. keep the chats intact forever. I am always here for you"]
    },
      {
    "tag": "weather",
    "patterns": ["what's the weather", "tell me the weather", "is it raining", "weather forecast"],
    "responses": ["I'm not connected to live weather, but you can check weather.com!", "Try using a weather app for accurate updates."]
  },

    // 
    
  {
    "tag": "uenr_intro",
    "patterns": ["what is uenr", "tell me about uenr", "what does uenr stand for"],
    "responses": ["UENR stands for the University of Energy and Natural Resources. It's a public university located in Sunyani, Ghana."]
  },
  {
    "tag": "uenr_location",
    "patterns": ["where is uenr located", "uenr address", "location of uenr"],
    "responses": ["UENR is located in Sunyani, the capital of the Bono Region of Ghana."]
  },
  {
    "tag": "uenr_programs",
    "patterns": ["what courses does uenr offer", "uenr programs", "what can I study at uenr"],
    "responses": ["UENR offers programs in Engineering, Natural Resources, Sciences, Energy, Agriculture, Management Sciences, and more."]
  },
  {
    "tag": "uenr_admission",
    "patterns": ["how do I apply to uenr", "uenr admission process", "admission requirements"],
    "responses": ["You can apply online through the UENR admissions portal. Requirements vary by program, so be sure to check the official website."]
  },
  {
    "tag": "uenr_fees",
    "patterns": ["uenr fees", "how much is the tuition at uenr", "uenr school fees"],
    "responses": ["Tuition fees vary by program and level. Please visit the UENR website or contact the finance office for accurate details."]
  },
  {
    "tag": "uenr_contacts",
    "patterns": ["uenr contact", "how can I reach uenr", "uenr phone number"],
    "responses": ["You can contact UENR via +233 3520 27052 or visit the official website for more contact details."]
  },
  {
    "tag": "uenr_hostel",
    "patterns": ["uenr hostels", "is there accommodation at uenr", "uenr halls of residence"],
    "responses": ["Yes, UENR provides hostel facilities for students. There are both on-campus and off-campus options."]
  },
  {
    "tag": "uenr_website",
    "patterns": ["uenr website", "official uenr site", "uenr portal link"],
    "responses": ["You can visit the official website at https://uenr.edu.gh for news, admissions, and more."]
  },
  {
    "tag": "uenr_vc",
    "patterns": ["who is the vc of uenr", "uenr vice chancellor", "current vc of uenr"],
    "responses": ["As of the latest update, the Vice-Chancellor of UENR is Prof. Elvis Asare-Bediako."]
  },
  {
    "tag": "uenr_motto",
    "patterns": ["uenr motto", "what is uenr's motto", "motto of uenr"],
    "responses": ["The motto of UENR is 'Knowledge – Integrity – Impact'."]
  },


    // now admission
  
  {
    "tag": "admission_deadline",
    "patterns": ["when is the uenr admission deadline", "uenr application closing date", "last day to apply to uenr"],
    "responses": ["UENR's admission deadline varies by year. Please check the admissions section on the UENR website for the current deadline."]
  },
  {
    "tag": "admission_portal",
    "patterns": ["uenr admission portal", "where can I apply to uenr", "uenr application link"],
    "responses": ["You can apply through the UENR admission portal: https://admissions.uenr.edu.gh"]
  },
  {
    "tag": "admission_requirements",
    "patterns": ["what are the requirements for uenr", "uenr admission requirements", "who can apply to uenr"],
    "responses": ["UENR requires WASSCE/SSSCE applicants to meet specific grade cut-offs in core and elective subjects. Requirements vary by program."]
  },
  {
    "tag": "admission_programs",
    "patterns": ["what courses are available at uenr", "uenr undergraduate programs", "uenr masters and phd courses"],
    "responses": ["UENR offers undergraduate, postgraduate, and doctoral programs in areas such as engineering, sciences, agriculture, and energy."]
  },
  {
    "tag": "how_to_apply",
    "patterns": ["how do I apply to uenr", "uenr application process", "steps to apply to uenr"],
    "responses": ["To apply, visit the UENR admissions portal, create an account, fill out the form, upload your documents, and submit."]
  },
  {
    "tag": "admission_forms",
    "patterns": ["where can I buy uenr forms", "uenr forms", "uenr e-voucher", "uenr application form price"],
    "responses": ["UENR forms are available online and at selected banks. You’ll need to purchase an e-voucher to start the application."]
  },
  {
    "tag": "admission_status",
    "patterns": ["check uenr admission status", "has uenr released admission", "uenr admission list"],
    "responses": ["You can check your admission status by logging into the UENR admission portal with your credentials."]
  },
  {
    "tag": "admission_fee_payment",
    "patterns": ["how to pay admission fees", "uenr school fees payment", "admission fee payment method"],
    "responses": ["You can pay admission fees via the UENR bank accounts listed on their website or through mobile money using specific codes."]
  },
  {
    "tag": "admission_support",
    "patterns": ["I have a problem with my admission", "I can't log in to the portal", "uenr admission help", "need help with my application"],
    "responses": ["If you're facing issues, contact the UENR admission office via admissions@uenr.edu.gh or call +233 3520 27052."]
  },
  {
    "tag": "transfer_admission",
    "patterns": ["can I transfer to uenr", "uenr transfer students", "does uenr accept transfer students"],
    "responses": ["Yes, UENR accepts transfer students based on specific criteria. Contact the Academic Affairs Office for transfer guidelines."]
  },


    // studies and lectures
    
  {
    "tag": "lecture_schedule",
    "patterns": ["when are my lectures", "uenr class timetable", "my lecture schedule", "class time"],
    "responses": ["Lecture schedules are usually posted on the departmental notice boards or uploaded to the student portal."]
  },
  {
    "tag": "lecture_venue",
    "patterns": ["where is my next lecture", "lecture venue", "where is my class", "classroom location"],
    "responses": ["Lecture venues are indicated in your timetable. You can also ask your course rep or check the portal."]
  },
  {
    "tag": "missed_lecture",
    "patterns": ["what if I miss a lecture", "I missed my class", "can I get notes for missed lectures"],
    "responses": ["If you miss a lecture, try to get notes from a classmate or contact the lecturer for guidance."]
  },
  {
    "tag": "course_registration",
    "patterns": ["how do I register my courses", "uenr course registration", "register for class"],
    "responses": ["You can register your courses through the UENR student portal. Be sure to do so before the deadline."]
  },
  {
    "tag": "study_tips",
    "patterns": ["how can I study better", "any study tips", "how to pass my exams", "help me study"],
    "responses": ["Create a study timetable, attend all lectures, revise regularly, and don’t hesitate to ask questions in class."]
  },
  {
    "tag": "academic_calendar",
    "patterns": ["uenr academic calendar", "when does the semester start", "semester timetable", "uenr resumption date"],
    "responses": ["You can download the academic calendar from the UENR website. It includes semester start dates, breaks, and exams."]
  },
  {
    "tag": "library_access",
    "patterns": ["can I use the library", "uenr library opening hours", "library rules", "library resources"],
    "responses": ["Yes, all students have access to the UENR library. It’s open from 8am to 8pm on weekdays. You’ll need your student ID to borrow books."]
  },
  {
    "tag": "exam_schedule",
    "patterns": ["when is my exam", "uenr exam timetable", "exam date", "final exams schedule"],
    "responses": ["Exam timetables are usually posted on the notice boards and the student portal a few weeks before exams begin."]
  },
  {
    "tag": "lecturer_contact",
    "patterns": ["how can I reach my lecturer", "contact my lecturer", "email my lecturer"],
    "responses": ["You can contact your lecturer through their university email or during office hours. Check your course outline for details."]
  },
  {
    "tag": "class_cancellation",
    "patterns": ["is the class cancelled", "has the lecture been postponed", "class today?"],
    "responses": ["Class cancellations are usually announced by the lecturer or course rep. Check WhatsApp or student portals for updates."]
  },

    {
      "tag": "thanks",
      "patterns": ["thanks", "thank you"],
      "responses": ["You're welcome!", "No problem!", "Anytime!"]
    },
    {
      "tag": "default",
      "patterns": [],
      "responses": ["Sorry, I don't understand that.", "Can you rephrase it?"]
    },

    {
    "tag": "thanks",
    "patterns": ["UENR"],
    "responses": [ "sustainable."],
    },
  {
    "tag": "name",
    "patterns": ["What is the University of Energy and Natural Resources?"],
    "responses": [ "The University of Energy and Natural Resources (UENR) is a public university in Ghana dedicated to providing higher education and research in energy, natural resources, and sustainable development."],
  },
  {
    "prompt": "When was UENR established?",
    "response": "The University of Energy and Natural Resources was established in 2011 by an Act of Parliament, Act 830."
  },
  {
    "prompt": "Briefly tell me the history and background of UENR.",
    "response": "UENR was founded to meet the growing need for expertise in energy and natural resource management in Ghana. The university officially began academic activities in November 2012 with a mandate to be a leading institution in energy, environment, and sustainable development education and research. It started with three schools and a small student population but has grown into a significant institution for applied sciences and environmental studies."
  },
  {
    "prompt": "Who were the key founders or visionaries of UENR?",
    "response": "UENR was established by the Government of Ghana, with contributions from the Ministry of Education and Parliament. Though not credited to a single individual, the university’s creation was championed by national leaders seeking to build capacity in energy and natural resources to drive sustainable development."
  },
  {
    "prompt": "What are the vision, mission, and core values of UENR?",
    "response": "Vision: To be a centre of excellence in energy, natural resources, and sustainable development. Mission: To provide quality education, research, and consultancy services in energy and natural resources for sustainable development. Core Values: Integrity, Excellence, Innovation, Environmental Stewardship, and Service."
  },
  {
    "prompt": "What is the motto of UENR, and what does it mean?",
    "response": "The motto of UENR is ‘Knowledge, Integrity, Impact’. It signifies the university’s commitment to creating knowledgeable graduates who uphold ethical values and contribute positively to society."
  },
  {
    "prompt": "How many colleges, schools, or faculties does UENR have?",
    "response": "UENR currently has 7 academic schools: School of Engineering, School of Sciences, School of Natural Resources, School of Energy, School of Agriculture and Technology, School of Geosciences, and the School of Graduate Studies."
  },
  {
    "prompt": "What are the departments and major courses offered by each faculty at UENR?",
    "response": "Each school has several departments. For example: School of Engineering: Electrical Engineering, Mechanical and Manufacturing Engineering, Civil Engineering. School of Natural Resources: Forest Science, Environmental Management, Fisheries and Aquatic Resources Management. School of Sciences: Computer Science, Mathematics and Statistics, Chemistry. School of Energy: Renewable Energy Engineering, Petroleum Engineering, Energy Economics. School of Geosciences: Geological Engineering, Environmental Geosciences. School of Agriculture and Technology: Crop Science, Animal Science, Agricultural Mechanization. Courses range from BSc Computer Science, BSc Environmental Management, BSc Renewable Energy Engineering, BSc Forest Resource Management, to MSc and PhD programs in similar fields."
  },
  {
    "prompt": "Does UENR offer both undergraduate and postgraduate programs?",
    "response": "Yes, UENR offers undergraduate, postgraduate diploma, master's, and doctoral programs."
  },
  {
    "prompt": "Are there professional, certificate, or short courses at UENR?",
    "response": "Yes, UENR offers short courses, professional certificate programs, and training workshops in areas like Geographic Information Systems (GIS), Renewable Energy Technologies, and Environmental Management."
  },
  {
    "prompt": "What steps has UENR taken to ensure academic excellence and quality education?",
    "response": "UENR has implemented quality assurance policies, built modern laboratories, recruited highly qualified lecturers, developed industry partnerships, and adopted digital learning tools to promote academic excellence."
  },
  {
    "prompt": "What can you tell me about UENR?",
    "response": "UENR is a fast-growing Ghanaian public university focused on training experts in energy, natural resources, and environmental sustainability. It promotes innovation, practical learning, and community engagement to support national and global development."
  },
  {
    "prompt": "What are the admission requirements for Ghanaian and international students at UENR?",
    "response": "Ghanaian students generally need WASSCE/SSSCE results with passes in core and elective subjects relevant to the program. International applicants must present equivalent qualifications. All students must meet minimum cut-off points specified each academic year."
  },
  {
    "prompt": "What is the full admission process for undergraduate, diploma, and postgraduate programs at UENR?",
    "response": "Applicants purchase an admission voucher, apply online through the UENR admission portal, upload supporting documents, and submit the form before the deadline. Postgraduate applicants also submit transcripts and letters of recommendation."
  },
  {
    "prompt": "Are there any special entrance exams or interviews for some programs at UENR?",
    "response": "Some specialized programs may require entrance exams or interviews, especially at the postgraduate level, depending on the department."
  },
  {
    "prompt": "What are the key admission deadlines and important dates at UENR?",
    "response": "Admission deadlines are usually announced on the university’s website but typically fall between April and August for undergraduate admissions. Postgraduate admissions may close later."
  },
  {
    "prompt": "How can students track their admission application status at UENR?",
    "response": "Students track their application status through the UENR admissions portal using their application voucher PIN and serial number."
  },
  {
    "prompt": "What are the tuition fees for various programs and levels at UENR?",
    "response": "Tuition fees vary by program and level. Undergraduate programs may range from GHS 2,000 to GHS 4,500 per year, while postgraduate programs can range from GHS 4,000 to GHS 9,000. International students pay higher fees."
  },
  {
    "prompt": "Does UENR offer scholarships, bursaries, or financial aid?",
    "response": "Yes, UENR offers scholarships, bursaries, and financial aid through the Students Financial Aid Office and collaborations with government and private donors."
  },
  {
    "prompt": "What is the process for applying for scholarships or financial aid at UENR?",
    "response": "Students complete a financial aid application form, attach required supporting documents (proof of need, academic performance, etc.), and submit it to the Financial Aid Office."
  },
    


  ]
};

// end of json
function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (message === '') return;

  appendMessage('user', message);
  const response = getBotResponse(message);
  appendMessage('bot', response);

  input.value = '';
}

function appendMessage(sender, text) {
  const chat = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message ' + sender;
  messageDiv.innerText = text;
  chat.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(userInput) {
  const input = userInput.toLowerCase();
  for (let intent of dataset.intents) {
    for (let pattern of intent.patterns) {
      if (input.includes(pattern)) {
        const responses = intent.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
  }
  const defaultIntent = dataset.intents.find(i => i.tag === 'default');
  return defaultIntent.responses[Math.floor(Math.random() * defaultIntent.responses.length)];
}

// Toggle visibility of chatbot
const toggleBtn = document.getElementById('toggleBtn');
const chatContainer = document.querySelector('.chat-container');
const closeBtn = document.getElementById('closeBtn');

toggleBtn.addEventListener('click', () => {
  chatContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  chatContainer.style.display = 'none';
});

// Start hidden
chatContainer.style.display = 'none';


// my code

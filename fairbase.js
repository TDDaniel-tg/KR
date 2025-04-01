// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChzRhpyVSU5j1thyTxKt5zIpbbQPiwxz8",
  authDomain: "alina-969a7.firebaseapp.com",
  databaseURL: "https://alina-969a7-default-rtdb.firebaseio.com",
  projectId: "alina-969a7",
  storageBucket: "alina-969a7.firebasestorage.app",
  messagingSenderId: "564445707933",
  appId: "1:564445707933:web:58277544b751f2fe799e74",
  measurementId: "G-CESSNTHX7H"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Функция для добавления участника
function addParticipant(name, number, city, weight, age) {
  const participantsRef = database.ref('participants');
  participantsRef.push({
    name: name,
    number: number,
    city: city,
    weight: weight,
    age: age
  });
}

// Функция для получения списка участников
function getParticipants(callback) {
  const participantsRef = database.ref('participants');
  participantsRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const participants = data ? Object.values(data) : [];
    callback(participants);
  });
}

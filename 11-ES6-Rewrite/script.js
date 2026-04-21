const hospitalName = "General Health Center"; 
let patientCount = 10; 
patientCount = 11;


const greetPatient = (name) => {
    return "Welcome, " + name;
};


const getPatientInfo = (name, age) => {
    return `Patient Name: ${name}, Age: ${age}`;
};


const calculateBill = (amount, tax = 0.12) => {
    return amount + (amount * tax);
};


const patient = {
    id: 101,
    fullName: "Naruto Uzumaki",
    condition: "Stable"
};

const { fullName, condition } = patient; 

const diagnosis = ["Fever", "Cough", "Cold"];
const [primary, secondary] = diagnosis; 


const basicVitals = { temp: 37, bp: "120/80" };
const fullMedicalRecord = { ...basicVitals, heartRate: 75 };

const meds = ["Paracetamol", "Vitamin C"];
const updatedMeds = [...meds, "Antibiotics"]; 


console.log(getPatientInfo(fullName, 30));
console.log(`Status: ${condition}`);
console.log(`Primary Symptom: ${primary}`);
console.log("Updated Meds:", updatedMeds);
console.log(`Total Bill (with default tax): ${calculateBill(1000)}`);
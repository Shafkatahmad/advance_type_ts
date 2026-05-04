type Person = {
  name: string;
  age: number
}

type JobDetails = {
  role: string;
  salary: number
}

type Employee = Person & JobDetails;

const employee1: Employee = {
  name: 'Shafkat',
  age: 25,
  role: 'Fullstack Dev',
  salary: 30
}

const getProfile = ({name, role}: Employee) => {
  return `Name: [${name}], Role: [${role}]`;
}

const profile = getProfile(employee1);
console.log(profile);
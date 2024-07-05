const readline = require('readline');

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Simplified Tax Calculation (example rates)
  let tax;
  if (grossSalary <= 24000) {
    tax = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    tax = grossSalary * 0.25;
  } else {
    tax = grossSalary * 0.3;
  }

  // Simplified NHIF Calculation
  let nhif;
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else {
    nhif = 400; // Example values
  }

  // Simplified NSSF Calculation
  const nssf = Math.min(grossSalary * 0.06, 1800);

  const netSalary = grossSalary - tax - nhif - nssf;

  return {
    grossSalary,
    tax,
    nhif,
    nssf,
    netSalary
  };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  const basicSalaryInput = await promptUser("Enter basic salary: ");
  const benefitsInput = await promptUser("Enter benefits: ");
  
  const basicSalary = parseFloat(basicSalaryInput);
  const benefits = parseFloat(benefitsInput);
  
  const result = calculateNetSalary(basicSalary, benefits);

  console.log(`Gross Salary: ${result.grossSalary}`);
  console.log(`Tax: ${result.tax}`);
  console.log(`NHIF: ${result.nhif}`);
  console.log(`NSSF: ${result.nssf}`);
  console.log(`Net Salary: ${result.netSalary}`);

  rl.close();
}

main();

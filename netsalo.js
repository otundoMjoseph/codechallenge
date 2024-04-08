const TAX_BRACKETS = [
  { limit: 12298, rate: 0.10 },
  { limit: 23885, rate: 0.15 },
  { limit: 35472, rate: 0.20 },
  { limit: 47059, rate: 0.25 },
];

const PERSONAL_RELIEF = 12298;
const NSSF_RATE = 0.05;

const NHIF_RATES = {
  5999: 150,
  7999: 300,
  11999: 400,
  // ... (Add remaining NHIF rates)
};

function calculatePaye(basicSalary) {
  const taxableIncome = basicSalary - PERSONAL_RELIEF;
  if (taxableIncome <= 0) {
      return 0;
  }

  for (const bracket of TAX_BRACKETS) {
      if (taxableIncome <= bracket.limit) {
          return bracket.rate * taxableIncome;
      }
  }

  // Highest tax bracket
  return 0.3 * taxableIncome;
}

function calculateNhif(basicSalary) {
  for (const salaryLimit in NHIF_RATES) {
      if (basicSalary <= salaryLimit) {
          return NHIF_RATES[salaryLimit];
      }
  }
  return 1000; // Default deduction
}

function calculateNssf(basicSalary) {
  return NSSF_RATE * basicSalary;
}

function main() {
  // ... (Input and output handling would require DOM manipulation or Node.js environment)
}

// Call main function if needed
// main(); 
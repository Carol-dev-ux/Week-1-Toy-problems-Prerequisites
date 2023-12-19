let netSalary,NSSF,NHIF,payeeDeductions;

function netSalaryCalculator(grossSalary) {
 NSSF = grossSalary * 0.06;


// Check if grossSalary is less than 0 or is NaN
if(grossSalary < 0|| isNaN(grossSalary)){
    return " enter a valid amount "
}else {
// Function to calculate NHIF contribution based on grossSalary 
  function nhifCalculator(grossSalary){
        if (grossSalary >= 0 && grossSalary <= 10000) {
            return 150;
          } else if(grossSalary >= 6000 && grossSalary <= 7999)  {
            return 300;
          } else if (grossSalary >= 8000 && grossSalary <= 11999) {
            return 400;
          } else if (grossSalary >= 12000 && grossSalary <= 14999) {
            return 500;
          } else if (grossSalary >= 15000 && grossSalary <= 19999) {
            return 600;
          } else if (grossSalary >= 20000 && grossSalary <= 24999) {
            return 750;
          } else if (grossSalary >= 25000 && grossSalary <= 29999) {
            return 850;
          } else if (grossSalary >= 30000 && grossSalary <= 34999) {
            return 900;
          } else if (grossSalary >= 35000 && grossSalary <= 39999) {
            return 950;
          } else if (grossSalary >= 40000 && grossSalary <= 44999) {
            return 1000;
          } else if (grossSalary >= 50000 && grossSalary <= 59999) {
            return 1200;
          } else if (grossSalary >= 60000 && grossSalary <= 69999) {
            return 1300;
        } else if (grossSalary >= 70000 && grossSalary <= 79999) {
          return 1400;
        } else if (grossSalary >= 80000 && grossSalary <= 89999) {
          return 1500;
        } else if (grossSalary >= 90000 && grossSalary <= 99999) {
          return 1600;
        } else if (grossSalary >= 100000) {
          return 1700;
        }
  }
  // Calculate NHIF contribution
  NHIF = nhifCalculator(grossSalary)
  
  // Function to calculate PAYE (payee) based on grossSalary
  function payeeCalculator(grossSalary){
      let payee
  if (grossSalary > 0 && grossSalary <= 24000) {
      return payee = (grossSalary * 0.1);
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      return payee = (grossSalary * 0.25);
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
      return payee = (grossSalary * 0.3);
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
      return payee = (grossSalary * 0.325);
    } else if (grossSalary > 800000) {
      return payee = (grossSalary * 0.35);
    }
  }
   // Calculate PAYE deductions
  payeeDeductions = payeeCalculator(grossSalary)
  // Calculate netSalary after deducting NHIF, NSSF, and PAYE
   netSalary = grossSalary -NHIF - NSSF- payeeDeductions
  return{
payee: payeeDeductions,
NSSF: NSSF,
NHIF: NHIF,
netSalary :netSalary
};
}

// Example 

salary = netSalaryCalculator(120000)
console.log(salary)
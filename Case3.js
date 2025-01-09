function calculateOvertimeWages(yearsOfService, overtimeHours, hourlyRate) {
    
    let seniorityMultiplier;
    // Seniority Multiplier
    if (yearsOfService <= 1) {                                  // 0-1 year
        seniorityMultiplier = 1.0;
    } else if (yearsOfService >= 2 && yearsOfService <= 3) {    // 2-3 year
        seniorityMultiplier = 1.1;
    } else if (yearsOfService >= 4 && yearsOfService <= 5) {    // 4-5 year 
        seniorityMultiplier = 1.2;
    } else {                                                    // > 6 year
        seniorityMultiplier = 1.7;
    }

    let totalOvertimePay = 0;
    // For full hours not including the fractional first
    for (let hour = 1; hour <= Math.floor(overtimeHours); hour++) {
        let hourlyRateMultiplier;
        if (hour <= 1) {                                        // 0-1 hour
            hourlyRateMultiplier = 2.0;
        } else if (hour >= 2 && hour <= 3) {                    // 2-3 hour
            hourlyRateMultiplier = 2.1;
        } else {                                                // > 4 hour
            hourlyRateMultiplier = 3.0;
        }

        // Calculate the full hours first 
        const fullHourPay = 1 * seniorityMultiplier * hourlyRateMultiplier * hourlyRate;
        totalOvertimePay += fullHourPay;

        // Log calculation for each full hour
        console.log(`Full Hour ${hour}: RM ${fullHourPay.toFixed(2)} (Seniority Multiplier: ${seniorityMultiplier}, Hourly Rate Multiplier: ${hourlyRateMultiplier})`);
    }

    // For fractional hours 
    // Checking if it got fractional hours by subtracting with rounded integer
    const fractionalHour = overtimeHours - Math.floor(overtimeHours);
    if (fractionalHour > 0) {
        let hourlyRateMultiplier;
        if (overtimeHours <= 1) {                                 // 0-1 hour
            hourlyRateMultiplier = 2.0;
        } else if (overtimeHours >= 2 && overtimeHours <= 3) {    // 2-3 hour
            hourlyRateMultiplier = 2.1;
        } else {                                                  // > 4 hour
            hourlyRateMultiplier = 3.0;
        }
        // Calculate the fractional hours 
        const fractionalHourPay = fractionalHour * seniorityMultiplier * hourlyRateMultiplier * hourlyRate;
        totalOvertimePay += fractionalHourPay;

        // Log calculation for the fractional hour
        console.log(`Fractional Hour: RM ${fractionalHourPay.toFixed(2)} (Seniority Multiplier: ${seniorityMultiplier}, Hourly Rate Multiplier: ${hourlyRateMultiplier})`);
    }
    
    return totalOvertimePay.toFixed(2); 
}

const yearsOfService = 2; 
const overtimeHours = 2.5; 
const hourlyRate = 20; 

const totalPay = calculateOvertimeWages(yearsOfService, overtimeHours, hourlyRate);
console.log(`Total Overtime Pay: RM ${totalPay}`); 
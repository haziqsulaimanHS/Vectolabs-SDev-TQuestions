function encodeData(voltage, energy, current, maxVoltage, maxEnergy, maxCurrent) {  
    
    // Scale Voltage, Energy and Current based on the given 3 bytes range 
    // 8 bits for each one 
    // Scale everything to 255 == 8bits/1byte
    let scaledVoltage = Math.round((voltage / maxVoltage) * 255);     // Scale voltage
    let scaledEnergy = Math.round((energy / maxEnergy) * 255);        // Scale energy
    let scaledCurrent = Math.round((current / maxCurrent) * 255);     // Scale current

    // Pack the scaled values into 3 bytes (1 byte each)
    // create new binary array
    // using Uint8Array to store data in binary format (one of array type to store binary data)
    // minimize memory usage n transmit data
    return new Uint8Array([scaledVoltage, scaledEnergy, scaledCurrent]);
}

// Function to decode data back to original values
function decodeData(byteArray, maxVoltage, maxEnergy, maxCurrent) {
    // Retrieve and scale back each value to its original range
    let voltage = Math.round((byteArray[0] / 255) * maxVoltage);    // Decode voltage
    let energy = Math.round((byteArray[1] / 255) * maxEnergy);      // Decode energy
    let current = Math.round((byteArray[2] / 255) * maxCurrent);    // Decode current

    // Return decoded values in JSON format
    return {
        Voltage: voltage,
        Energy: energy,
        Current: current,
    };
}

// I just assume the max level 
let maxVoltage = 255;    // 8 bits
let maxEnergy = 2047;    // 11 bits
let maxCurrent = 2047;   // 11 bits

let encoded = encodeData(254, 1450, 1580, maxVoltage, maxEnergy, maxCurrent);
console.log("Encoded:", encoded); 

let decoded = decodeData(encoded, maxVoltage, maxEnergy, maxCurrent); 
console.log("Decoded:", decoded); 
Question 2 (calculation with pseudo SQL) :

(1)	Calculate Daily Average Temperature and Moisture:

SELECT 
    date, 
    AVG(temperature) AS average_temperature, 
    AVG(moisture) AS average_moisture
FROM 
    Measurements
GROUP BY 
    date;

(2)	Calculate Daily Average Temperature and Moisture:

SELECT 
    m.date, 
    AVG(m.temperature) AS average_temperature, 
    AVG(m.moisture) AS average_moisture, 
    w.weather_score
FROM 
    Measurements m
JOIN 
    Weather w 
ON 
    m.date = w.date
GROUP BY 
    m.date, w.weather_score;


(3)	Calculate Daily Average Temperature and Moisture:

SELECT 
    m.date, 
    (w.weather_score * AVG(m.temperature)) / AVG(m.moisture) AS farm_nutrition
FROM 
    Measurements m
JOIN 
    Weather w 
ON 
    m.date = w.date
GROUP BY 
    m.date, w.weather_score;

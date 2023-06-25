console.log( " Test");

let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }]

    var sumSal = 0; 
    for( i = 0 ; i < employees.length ; i++){
        sumSal = sumSal + employees[i].salary;
    }
    console.log( sumSal);

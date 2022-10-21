function sum(numbers){
    //let s =0;
    //for(let i = 0; i < numbers.length; i++) s += numbers[i];
    return numbers.reduce((prev, curr) => prev  + curr, 0);  // 0 => init val
}

function avg(numbers){
    return sum(numbers) / numbers.length;
}

function max(numbers){
    return numbers.reduce((max, curr) => max > curr ?  max : curr, numbers[0]);
}

function med(numbers){
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2); 
    if(numbers.length % 2 === 0){
        return (numbers[mid-1] + numbers[mid]) / 2;
    }
    else{
        return numbers[mid];
    }
}
function makeTwoSubarray(numbers){
    numbers.sort((a, b) => a - b);

    const mid = Math.floor(numbers.length / 2); 
    let s1, s2;
    if(numbers.length % 2 === 0){
        s1 = numbers.slice(0, mid);
        s2 = numbers.slice(mid);
    }
    else{
        s1 = numbers.slice(0, mid);
        s2 = numbers.slice(mid+1);
    }
    return [s1, s2];
}

function iqr(numbers){
    const subarrayList = makeTwoSubarray(numbers);
    const s1 = subarrayList[0];
    const s2 = subarrayList[1];
    
    const q1 = med(s1);
    const q3 = med(s2);

    return Math.abs(q3 - q1);
}

function outlier(numbers){
    const original = [...numbers];
    const result = [];
    
    const subarrayList = makeTwoSubarray(numbers);
    
    const s1 = subarrayList[0];
    const s2 = subarrayList[1];

    const q1 = med(s1);
    const q3 = med(s2);
    
    const iqrValue = iqr(numbers);
    
    const lowerBound = q1 - 1.5 * iqrValue;
    const upperBound = q3 + 1.5 * iqrValue;

    original.forEach((e)=> {
        if(e < lowerBound || e > upperBound) 
            result.push(e);
        }
    );
    return result;
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier
}


function woodcalulator(chair, table, bed){
    const perchairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chair * perchairWood;
    const totalTableWood = table * perTableWood;
    const totalBedWood = bed * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}

const wood = woodcalulator(1, 1, 1);
console.log('wood needed', wood);
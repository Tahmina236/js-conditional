const salary = 25000;
const isBCS = true;
const weight = 66;
const hasCar = false;

if(salary > 20000 && weight > 67){
    console.log('shupatro');
}
else{
    console.log('onno patro')
}
// [&&(and) thaka gulay 2 ta shorto e fill korte hobe if er consol output pawar jonno na hoy else er ta output pabe]
if(salary > 25000 && weight > 77){
    console.log('asho baba kobul');
}
else{
    console.log('vaag tui mokbul')
}
// [||(or) thaka gulay jekono 1 ta shorto e fill korlei if er console output hobe na hoy else er ta output pabe]

if(salary > 24000 || weight > 77){
    console.log('asho baba kobul');
}
else{
    console.log('vaag tui mokbul')
}

// more more condition
if(salary > 25000 && weight > 77 && isBCS == true){
    console.log('asho baba kobul');
}
else{
    console.log('vaag tui mokbul')
}

if(salary > 25000 || weight > 77 || isBCS == true){
    console.log('asho baba kobul');
}
else{
    console.log('vaag tui mokbul')
}

// COMPLEX CONDITION
if((salary > 25000 && hasCar == true) || isBCS == true){
    console.log('asho baba kobul');
}
else{
    console.log('vaag tui mokbul')
}

if((salary > 25000 || hasCar == true) && isBCS == true){
    console.log('asho baba kobul');
}
else{
    console.log('vaag tui mokbul')
}
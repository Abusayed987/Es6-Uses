// P:01
const user = [
    { id: 1, name: 'abul', job: 'doctor' }
]

const userJob = user[1]?.hudai;  // undefined for => ? 
console.log(userJob);


// P:02
const data = {
    count: 5000,
    data: [
        { id: 01, job: 'work', userName: 'bablu' },
        { id: 02, job: 'abolTablo', userName: 'sokomarRay' }
    ]
}
const user2Job = data?.data[1]?.job;   //  abolTablo 
console.log(user2Job);

// P:03
const users = {
    id: 2323,
    name: `abolTabol Sokomar ray `,
    address: {
        street: `35/A dhaka Bangladesh`,
        PostOffice: `harinathpur`,
        side: 'rightSide'
    }
}
const userPostOffice = users?.address?.PostOffice?.phoneNumber; // undefined for => ? , if you dont use ? QuestionMarkChainOptional but element don't present in an arry or object >>> you Can get a Error Error Error must be!
console.log(userPostOffice);


let arr =[1, 2, 3];
let [first] = arr;
console.log(first);
////////////////////////////////-
let user={name: "Piter",age: 10}
let admin = {admin: "Igor", ...user};
console.log(`${admin.admin}, ${admin.name}, ${admin.age}`);

let store ={
    state: {
        profilePage:{
            posts:[
                {id: 1, massage: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages:[
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar:[],
    },
}

let {state:{profilePage: {posts}, dialogsPage:{dialogs, messages} } } = store;
console.log("likesCount:");
posts.forEach(eleme => {
    console.log(eleme.likesCount);
});


console.log(dialogs.filter((dialog) => dialog.id % 2 == 0));

let newMessages = messages.map(function(m){
    return m = {id: m.id, message: "Hello user"};
})

console.log(newMessages);
console.log("////////////////////////////////////");
let tasks = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: false},
    {id: 5, title: "GraphQL", isDone: false},
];

tasks = [...tasks, {id: 6, title: "C#", isDone: true},]
console.log(tasks);

function sumValues(x, y, z){
    return x + y + z;
}

console.log(sumValues(...[1, 2, 3]));
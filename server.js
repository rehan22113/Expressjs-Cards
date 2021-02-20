const express=require("express")
const app=express();
const exphbs =require("express-handlebars")
const path =require("path");

//middleware

app.use(express.static(path.join(__dirname,"public")));
app.engine('hbs', exphbs({defaultLayout: 'main' ,extname: 'hbs',}));
app.set("view engine","hbs");
app.get("/",(req,res)=>{

    const data=[
        {
            userName:"Mark ZuckBerg",
            mainImgLink:"/img/reactjs.png",
            userImg:"/img/user1.jpg",
            text:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug",
        },
        {
            userName:"TJ Holowaychuk",
            mainImgLink:"/img/express.png",
            userImg:"/img/user3.jpg",
            text:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug",
        },
        {
            userName:"Ryan Dahl",
            mainImgLink:"/img/node.png",
            userImg:"/img/user2.jpg",
            text:"he introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web. The initial release supported only Linux and Mac OS X. Its development and maintenance was led by Dahl and later sponsored by Joyent.",
        }

    ]
    res.render("index",{title:"Home",allData:data});
})
app.get("/*",(req,res)=>{

    res.send("404 no any page found");
})
app.listen(8080,()=>{
    console.log("server started")
})
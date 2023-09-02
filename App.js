/*     const heading = React.createElement(
        "h1",
        {id:"h1-heading" , xyz:"abc"},
        "Hello world by react");
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading); */



const heading = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"i am h1 tag.")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const heading = React.createElement("div", {id: "parent"}, [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1", {}, "Hello world")
        ])
    ]);

  
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);
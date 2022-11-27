let pizza = window.location.href;

function oldRedirect() {
    if (pizza.includes("https://www.reddit.com/")) {
        let oldReddit = ("https://old.reddit.com/" + pizza.slice(23, -1));
        window.open(oldReddit, "_self");
    };
}

oldRedirect();
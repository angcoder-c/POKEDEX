document.addEventListener('DOMContentLoaded', function () {
    function card(numType, url) {
        // consume the api based on the specific pokemon, assign the name and url of the pokemon image and put it in its corresponding type
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (poke) {
            var name = poke['name'];
            var img = poke['sprites']['other']['home']['front_default'];
            var pokecard = "<div class=\"card\">\n                    <img src=\"".concat(img, "\" alt=\"").concat(name, "\">\n                    <h5>").concat(name.charAt(0).toUpperCase() + name.slice(2), "</h5>\n                </div>");
            document.getElementsByClassName('content-cards')[numType].innerHTML += pokecard;
        });
    }
    function types(numType) {
        // choose a random type of pokemon (1-18), place the data on the interface, and insert 6 pokemon in each type
        var type = Math.round(Math.random() * (18 - 1) + 1);
        fetch("https://pokeapi.co/api/v2/type/".concat(type))
            .then(function (res) { return res.json(); })
            .then(function (poketype) {
            var len = poketype['pokemon'].length - 1;
            for (var poke = 0; poke < 6; poke++) {
                var randomPoke = Math.round(Math.random() * (len - 0) + 0);
                var url = new String(poketype['pokemon'][randomPoke]['pokemon']['url']);
                card(numType, url);
            }
            var typeName = poketype['name'];
            document.getElementsByClassName('title')[numType].textContent = typeName.charAt(0).toUpperCase() + typeName.slice(2);
        });
    }
    for (var i = 0; i < 6; i++) {
        types(i);
    }
});

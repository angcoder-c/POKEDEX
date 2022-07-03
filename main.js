document.addEventListener('DOMContentLoaded', function () {
    function card(numType, url) {
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (poke) {
            var name = poke['name'];
            var img = poke['sprites']['other']['home']['front_default'];
            var pokecard = "<div class=\"card\">\n                    <img src=\"".concat(img, "\" alt=\"").concat(name, "\">\n                    <h5>").concat(name.charAt(0).toUpperCase() + name.slice(), "</h5>\n                </div>");
            document.getElementsByClassName('content-cards')[numType].innerHTML += pokecard;
        });
    }
    function types(numType) {
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
            document.getElementsByClassName('title')[numType].textContent = typeName.charAt(0).toUpperCase() + typeName.slice();
        });
    }
    for (var i = 0; i < 6; i++) {
        types(i);
    }
});

var footer = {
    "text": "V3.0.1. Copyright Ⓒ 2018 Ryan Bartruff. All rights reserved."
};

footer.display = function() {

    var formattedFooter = HTMLfooter.replace("%data%", footer.text);
    $("#copyright").append(formattedFooter);
    
};

footer.display();

var nav = {
    "links": [
        {
            "name": "home",
            "url": "index.html"
        },
        {
            "name": "projects",
            "url": "work.html"

        },
        {
            "name": "about",
            "url": "about.html"
        },
        {
            "name": "contact",
            "url": "contact.html"
        },
        {           
            "name": "resume",
            "url": "resume.html"

        }
    ]
};

nav.display = function() {
    for(i = 0; i < nav.links.length; i++) {
        
        var formattedNavName = HTMLnavLink.replace("%data%", nav.links[i].url);
        var formattedNavLink = HTMLnavName.replace("%data%", nav.links[i].name);
        
        var formattedNav = formattedNavName + formattedNavLink;
        
        $("nav").append(formattedNav);
        
    }
};

nav.display();
var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!',
    price: 10
}),
new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/99/MarioSMBW.png',
    title: 'Mario',
    description: 'Its an awesome Game!!!',
    price: 10
}),
new Product({
    imagePath: 'http://i.huffpost.com/gen/3210206/images/o-FIFA-16-ALEX-MORGAN-facebook.jpg',
    title: 'FIFA',
    description: 'Simply awesome!!!',
    price: 20
}),
new Product({
    imagePath: 'http://www.rgmechanics.com/wp-content/uploads/2016/05/NFS-16-Free-Download-Need-For-Speed-2016-Full-PC-Game.jpg',
    title: 'NFS',
    description: 'NFS is super Game!!!',
    price: 15
}),
new Product({
    imagePath: 'http://livedoor.blogimg.jp/jin115/imgs/4/d/4d1fcc7b-s.jpg',
    title: 'Call of Duty',
    description: 'Best Game!!!',
    price: 25
}),
new Product({
    imagePath: 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-gb/global/search-thumbnail/acm_ubi_thumb_leap_mobile_275895.jpg',
    title: 'Assassins Creed',
    description: 'Another awesome Game!!!',
    price: 12
})];

var done =0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

'use strict';

var items = [
    {id: 'ace', name: 'Ace', image: 'images/ace.png', shortcode: 'aa', species: 'Bird', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'admiral', name: 'Admiral', image: 'images/admiral.png', shortcode: 'ab', species: 'Bird', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'agent-s', name: 'Agent S', image: 'images/agent-s.png', shortcode: 'ac', species: 'Squirrel', gender: 'Female', personality: 'Peppy', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'agnes', name: 'Agnes', image: 'images/agnes.png', shortcode: 'ad', species: 'Pig', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'aisle', name: 'Aisle', image: 'images/aisle.png', shortcode: 'ae', species: 'Cub', gender: 'Male', personality: 'Lazy', games: ['ac'], special: false, jpn: true},
    {id: 'al', name: 'Al', image: 'images/al.png', shortcode: 'af', species: 'Gorilla', gender: 'Male', personality: 'Lazy', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'alfonso', name: 'Alfonso', image: 'images/alfonso.png', shortcode: 'ag', species: 'Alligator', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'alice', name: 'Alice', image: 'images/alice.png', shortcode: 'ah', species: 'Koala', gender: 'Female', personality: 'Normal', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'alli', name: 'Alli', image: 'images/alli.png', shortcode: 'ai', species: 'Alligator', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'amelia', name: 'Amelia', image: 'images/amelia.png', shortcode: 'aj', species: 'Eagle', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'anabelle', name: 'Anabelle', image: 'images/anabelle.png', shortcode: 'ak', species: 'Anteater', gender: 'Female', personality: 'Peppy', games: ['ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'analog', name: 'Analog', image: 'images/analog.png', shortcode: 'al', species: 'Penguin', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'anchovy', name: 'Anchovy', image: 'images/anchovy.png', shortcode: 'am', species: 'Bird', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'angus', name: 'Angus', image: 'images/angus.png', shortcode: 'an', species: 'Bull', gender: 'Male', personality: 'Cranky', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'anicotti', name: 'Anicotti', image: 'images/anicotti.png', shortcode: 'ao', species: 'Mouse', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'ankha', name: 'Ankha', image: 'images/ankha.png', shortcode: 'ap', species: 'Cat', gender: 'Female', personality: 'Snooty', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'annalisa', name: 'Annalisa', image: 'images/annalisa.png', shortcode: 'aq', species: 'Anteater', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'annalise', name: 'Annalise', image: 'images/annalise.png', shortcode: 'ar', species: 'Horse', gender: 'Female', personality: 'Snooty', games: ['ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'antonio', name: 'Antonio', image: 'images/antonio.png', shortcode: 'as', species: 'Anteater', gender: 'Male', personality: 'Jock', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'apollo', name: 'Apollo', image: 'images/apollo.png', shortcode: 'at', species: 'Eagle', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'apple', name: 'Apple', image: 'images/apple.png', shortcode: 'au', species: 'Hamster', gender: 'Female', personality: 'Peppy', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'astrid', name: 'Astrid', image: 'images/astrid.png', shortcode: 'av', species: 'Kangaroo', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'aurora', name: 'Aurora', image: 'images/aurora.png', shortcode: 'aw', species: 'Penguin', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'ava', name: 'Ava', image: 'images/ava.png', shortcode: 'ax', species: 'Chicken', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'avery', name: 'Avery', image: 'images/avery.png', shortcode: 'ay', species: 'Eagle', gender: 'Male', personality: 'Cranky', games: ['ac', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'axel', name: 'Axel', image: 'images/axel.png', shortcode: 'az', species: 'Elephant', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'aziz', name: 'Aziz', image: 'images/aziz.png', shortcode: 'ba', species: 'Lion', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'baabara', name: 'Baabara', image: 'images/baabara.png', shortcode: 'bb', species: 'Sheep', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'bam', name: 'Bam', image: 'images/bam.png', shortcode: 'bc', species: 'Deer', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'bangle', name: 'Bangle', image: 'images/bangle.png', shortcode: 'bd', species: 'Tiger', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'barold', name: 'Barold', image: 'images/barold.png', shortcode: 'be', species: 'Cub', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'bea', name: 'Bea', image: 'images/bea.png', shortcode: 'bf', species: 'Dog', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'beardo', name: 'Beardo', image: 'images/beardo.png', shortcode: 'bg', species: 'Bear', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'beau', name: 'Beau', image: 'images/beau.png', shortcode: 'bh', species: 'Deer', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'becky', name: 'Becky', image: 'images/becky.png', shortcode: 'bi', species: 'Chicken', gender: 'Female', personality: 'Snooty', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'bella', name: 'Bella', image: 'images/bella.png', shortcode: 'bj', species: 'Mouse', gender: 'Female', personality: 'Peppy', games: ['ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'belle', name: 'Belle', image: 'images/belle.png', shortcode: 'bk', species: 'Cow', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'benedict', name: 'Benedict', image: 'images/benedict.png', shortcode: 'bl', species: 'Chicken', gender: 'Male', personality: 'Lazy', games: ['ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'benjamin', name: 'Benjamin', image: 'images/benjamin.png', shortcode: 'bm', species: 'Dog', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'bertha', name: 'Bertha', image: 'images/bertha.png', shortcode: 'bn', species: 'Hippo', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'bessie', name: 'Bessie', image: 'images/bessie.png', shortcode: 'bo', species: 'Cow', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'bettina', name: 'Bettina', image: 'images/bettina.png', shortcode: 'bp', species: 'Mouse', gender: 'Female', personality: 'Normal', games: ['cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'betty', name: 'Betty', image: 'images/betty.png', shortcode: 'bq', species: 'Chicken', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'bianca', name: 'Bianca', image: 'images/bianca.png', shortcode: 'br', species: 'Tiger', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'biff', name: 'Biff', image: 'images/biff.png', shortcode: 'bs', species: 'Hippo', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'big-top', name: 'Big Top', image: 'images/big-top.png', shortcode: 'bt', species: 'Elephant', gender: 'Male', personality: 'Lazy', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'bill', name: 'Bill', image: 'images/bill.png', shortcode: 'bu', species: 'Duck', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'billy', name: 'Billy', image: 'images/billy.png', shortcode: 'bv', species: 'Goat', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'biskit', name: 'Biskit', image: 'images/biskit.png', shortcode: 'bw', species: 'Dog', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'bitty', name: 'Bitty', image: 'images/bitty.png', shortcode: 'bx', species: 'Hippo', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'blaire', name: 'Blaire', image: 'images/blaire.png', shortcode: 'by', species: 'Squirrel', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'blanche', name: 'Blanche', image: 'images/blanche.png', shortcode: 'bz', species: 'Ostrich', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'bluebear', name: 'Bluebear', image: 'images/bluebear.png', shortcode: 'ca', species: 'Cub', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'bob', name: 'Bob', image: 'images/bob.png', shortcode: 'cb', species: 'Cat', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'bonbon', name: 'Bonbon', image: 'images/bonbon.png', shortcode: 'cc', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'bones', name: 'Bones', image: 'images/bones.png', shortcode: 'cd', species: 'Dog', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'boomer', name: 'Boomer', image: 'images/boomer.png', shortcode: 'ce', species: 'Penguin', gender: 'Male', personality: 'Lazy', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'boone', name: 'Boone', image: 'images/boone.png', shortcode: 'cf', species: 'Gorilla', gender: 'Male', personality: 'Jock', games: ['ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'boots', name: 'Boots', image: 'images/boots.png', shortcode: 'cg', species: 'Alligator', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'boris', name: 'Boris', image: 'images/boris.png', shortcode: 'ch', species: 'Pig', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'bow', name: 'Bow', image: 'images/bow.png', shortcode: 'ci', species: 'Dog', gender: 'Male', personality: 'Lazy', games: ['ac'], special: false, jpn: true},
    {id: 'boyd', name: 'Boyd', image: 'images/boyd.png', shortcode: 'cj', species: 'Gorilla', gender: 'Male', personality: 'Cranky', games: ['ac', 'nl'], special: false, jpn: false},
    {id: 'bree', name: 'Bree', image: 'images/bree.png', shortcode: 'ck', species: 'Mouse', gender: 'Female', personality: 'Snooty', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'broccolo', name: 'Broccolo', image: 'images/broccolo.png', shortcode: 'cl', species: 'Mouse', gender: 'Male', personality: 'Lazy', games: ['ac', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'broffina', name: 'Broffina', image: 'images/broffina.png', shortcode: 'cm', species: 'Chicken', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'bruce', name: 'Bruce', image: 'images/bruce.png', shortcode: 'cn', species: 'Deer', gender: 'Male', personality: 'Cranky', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'bubbles', name: 'Bubbles', image: 'images/bubbles.png', shortcode: 'co', species: 'Hippo', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'buck', name: 'Buck', image: 'images/buck.png', shortcode: 'cp', species: 'Horse', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'bud', name: 'Bud', image: 'images/bud.png', shortcode: 'cq', species: 'Lion', gender: 'Male', personality: 'Jock', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'bunnie', name: 'Bunnie', image: 'images/bunnie.png', shortcode: 'cr', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'butch', name: 'Butch', image: 'images/butch.png', shortcode: 'cs', species: 'Dog', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'buzz', name: 'Buzz', image: 'images/buzz.png', shortcode: 'ct', species: 'Eagle', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'cally', name: 'Cally', image: 'images/cally.png', shortcode: 'cu', species: 'Squirrel', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'camofrog', name: 'Camofrog', image: 'images/camofrog.png', shortcode: 'cv', species: 'Frog', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'canberra', name: 'Canberra', image: 'images/canberra.png', shortcode: 'cw', species: 'Koala', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'candi', name: 'Candi', image: 'images/candi.png', shortcode: 'cx', species: 'Mouse', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'carmen-mouse', name: 'Carmen - mouse', image: 'images/carmen-mouse.png', shortcode: 'cy', species: 'Mouse', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'carmen-rabbit', name: 'Carmen - rabbit', image: 'images/carmen-rabbit.png', shortcode: 'cz', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'caroline', name: 'Caroline', image: 'images/caroline.png', shortcode: 'da', species: 'Squirrel', gender: 'Female', personality: 'Normal', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'carrie', name: 'Carrie', image: 'images/carrie.png', shortcode: 'db', species: 'Kangaroo', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'carrot', name: 'Carrot', image: 'images/carrot.png', shortcode: 'dc', species: 'Cow', gender: 'Female', personality: 'Normal', games: ['ac'], special: false, jpn: true},
    {id: 'cashmere', name: 'Cashmere', image: 'images/cashmere.png', shortcode: 'dd', species: 'Sheep', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'cece', name: 'Cece', image: 'images/cece.png', shortcode: 'de', species: 'Squirrel', gender: 'Female', personality: 'Peppy', games: ['nl'], special: false, jpn: false},
    {id: 'celia', name: 'Celia', image: 'images/celia.png', shortcode: 'df', species: 'Eagle', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'cesar', name: 'Cesar', image: 'images/cesar.png', shortcode: 'dg', species: 'Gorilla', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'chadder', name: 'Chadder', image: 'images/chadder.png', shortcode: 'dh', species: 'Mouse', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'chai', name: 'Chai', image: 'images/chai.png', shortcode: 'di', species: 'Elephant', gender: 'Female', personality: 'Peppy', games: ['nl', 'pc'], special: false, jpn: false},
    {id: 'champ', name: 'Champ', image: 'images/champ.png', shortcode: 'dj', species: 'Monkey', gender: 'Male', personality: 'Jock', games: ['ww', 'cf'], special: false, jpn: false},
    {id: 'champagne', name: 'Champagne', image: 'images/champagne.png', shortcode: 'dk', species: 'Dog', gender: 'Male', personality: 'Cranky', games: ['ac'], special: false, jpn: true},
    {id: 'charlise', name: 'Charlise', image: 'images/charlise.png', shortcode: 'dl', species: 'Bear', gender: 'Female', personality: 'Uchi', games: ['ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'chelsea', name: 'Chelsea', image: 'images/chelsea.png', shortcode: 'dm', species: 'Deer', gender: 'Female', personality: 'Normal', games: ['nl', 'pc'], special: false, jpn: false},
    {id: 'cheri', name: 'Cheri', image: 'images/cheri.png', shortcode: 'dn', species: 'Cub', gender: 'Female', personality: 'Peppy', games: ['ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'cherry', name: 'Cherry', image: 'images/cherry.png', shortcode: 'do', species: 'Dog', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'chester', name: 'Chester', image: 'images/chester.png', shortcode: 'dp', species: 'Cub', gender: 'Male', personality: 'Lazy', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'chevre', name: 'Chevre', image: 'images/chevre.png', shortcode: 'dq', species: 'Goat', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'chico', name: 'Chico', image: 'images/chico.png', shortcode: 'dr', species: 'Mouse', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'chief', name: 'Chief', image: 'images/chief.png', shortcode: 'ds', species: 'Wolf', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'chops', name: 'Chops', image: 'images/chops.png', shortcode: 'dt', species: 'Pig', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'chow', name: 'Chow', image: 'images/chow.png', shortcode: 'du', species: 'Bear', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'chrissy', name: 'Chrissy', image: 'images/chrissy.png', shortcode: 'dv', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['ac', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'chuck', name: 'Chuck', image: 'images/chuck.png', shortcode: 'dw', species: 'Bull', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'clara', name: 'Clara', image: 'images/clara.png', shortcode: 'dx', species: 'Hippo', gender: 'Female', personality: 'Normal', games: ['ac'], special: false, jpn: true},
    {id: 'claude', name: 'Claude', image: 'images/claude.png', shortcode: 'dy', species: 'Rabbit', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'claudia', name: 'Claudia', image: 'images/claudia.png', shortcode: 'dz', species: 'Tiger', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'clay', name: 'Clay', image: 'images/clay.png', shortcode: 'ea', species: 'Hamster', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'cleo', name: 'Cleo', image: 'images/cleo.png', shortcode: 'eb', species: 'Horse', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'clyde', name: 'Clyde', image: 'images/clyde.png', shortcode: 'ec', species: 'Horse', gender: 'Male', personality: 'Lazy', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'coach', name: 'Coach', image: 'images/coach.png', shortcode: 'ed', species: 'Bull', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'cobb', name: 'Cobb', image: 'images/cobb.png', shortcode: 'ee', species: 'Pig', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'coco', name: 'Coco', image: 'images/coco.png', shortcode: 'ef', species: 'Rabbit', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'cole', name: 'Cole', image: 'images/cole.png', shortcode: 'eg', species: 'Rabbit', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'colton', name: 'Colton', image: 'images/colton.png', shortcode: 'eh', species: 'Horse', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'cookie', name: 'Cookie', image: 'images/cookie.png', shortcode: 'ei', species: 'Dog', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'cousteau', name: 'Cousteau', image: 'images/cousteau.png', shortcode: 'ej', species: 'Frog', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'cranston', name: 'Cranston', image: 'images/cranston.png', shortcode: 'ek', species: 'Ostrich', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'croque', name: 'Croque', image: 'images/croque.png', shortcode: 'el', species: 'Frog', gender: 'Male', personality: 'Cranky', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'cube', name: 'Cube', image: 'images/cube.png', shortcode: 'em', species: 'Penguin', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'cupcake', name: 'Cupcake', image: 'images/cupcake.png', shortcode: 'en', species: 'Cub', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'curlos', name: 'Curlos', image: 'images/curlos.png', shortcode: 'eo', species: 'Sheep', gender: 'Male', personality: 'Smug', games: ['ac', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'curly', name: 'Curly', image: 'images/curly.png', shortcode: 'ep', species: 'Pig', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'curt', name: 'Curt', image: 'images/curt.png', shortcode: 'eq', species: 'Bear', gender: 'Male', personality: 'Cranky', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'cyrano', name: 'Cyrano', image: 'images/cyrano.png', shortcode: 'er', species: 'Anteater', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'daisy', name: 'Daisy', image: 'images/daisy.png', shortcode: 'es', species: 'Dog', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'deena', name: 'Deena', image: 'images/deena.png', shortcode: 'et', species: 'Duck', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'deirdre', name: 'Deirdre', image: 'images/deirdre.png', shortcode: 'eu', species: 'Deer', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'del', name: 'Del', image: 'images/del.png', shortcode: 'ev', species: 'Alligator', gender: 'Male', personality: 'Cranky', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'deli', name: 'Deli', image: 'images/deli.png', shortcode: 'ew', species: 'Monkey', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'derwin', name: 'Derwin', image: 'images/derwin.png', shortcode: 'ex', species: 'Duck', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'diana', name: 'Diana', image: 'images/diana.png', shortcode: 'ey', species: 'Deer', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'diva', name: 'Diva', image: 'images/diva.png', shortcode: 'ez', species: 'Frog', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'dizzy', name: 'Dizzy', image: 'images/dizzy.png', shortcode: 'fa', species: 'Elephant', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'dobie', name: 'Dobie', image: 'images/dobie.png', shortcode: 'fb', species: 'Wolf', gender: 'Male', personality: 'Cranky', games: ['ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'doc', name: 'Doc', image: 'images/doc.png', shortcode: 'fc', species: 'Rabbit', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'dora', name: 'Dora', image: 'images/dora.png', shortcode: 'fd', species: 'Mouse', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'dotty', name: 'Dotty', image: 'images/dotty.png', shortcode: 'fe', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'dozer', name: 'Dozer', image: 'images/dozer.png', shortcode: 'ff', species: 'Bear', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'drago', name: 'Drago', image: 'images/drago.png', shortcode: 'fg', species: 'Alligator', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'drake', name: 'Drake', image: 'images/drake.png', shortcode: 'fh', species: 'Duck', gender: 'Male', personality: 'Lazy', games: ['ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'drift', name: 'Drift', image: 'images/drift.png', shortcode: 'fi', species: 'Frog', gender: 'Male', personality: 'Jock', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'ed', name: 'Ed', image: 'images/ed.png', shortcode: 'fj', species: 'Horse', gender: 'Male', personality: 'Smug', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'egbert', name: 'Egbert', image: 'images/egbert.png', shortcode: 'fk', species: 'Chicken', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'elina', name: 'Elina', image: 'images/elina.png', shortcode: 'fl', species: 'Elephant', gender: 'Female', personality: 'Snooty', games: ['ac'], special: false, jpn: false},
    {id: 'elise', name: 'Elise', image: 'images/elise.png', shortcode: 'fm', species: 'Monkey', gender: 'Female', personality: 'Snooty', games: ['ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'ellie', name: 'Ellie', image: 'images/ellie.png', shortcode: 'fn', species: 'Elephant', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'elmer', name: 'Elmer', image: 'images/elmer.png', shortcode: 'fo', species: 'Horse', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'eloise', name: 'Eloise', image: 'images/eloise.png', shortcode: 'fp', species: 'Elephant', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'elvis', name: 'Elvis', image: 'images/elvis.png', shortcode: 'fq', species: 'Lion', gender: 'Male', personality: 'Cranky', games: ['ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'emerald', name: 'Emerald', image: 'images/emerald.png', shortcode: 'fr', species: 'Frog', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'epona', name: 'Epona', image: 'images/epona.png', shortcode: 'fs', species: 'Horse', gender: 'Female', personality: 'Peppy', games: ['nl'], special: false, jpn: false},
    {id: 'erik', name: 'Erik', image: 'images/erik.png', shortcode: 'ft', species: 'Deer', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'etoile', name: 'Etoile', image: 'images/etoile.png', shortcode: 'fu', species: 'Sheep', gender: 'Female', personality: 'Normal', games: ['nl', 'pc'], special: false, jpn: false},
    {id: 'eugene', name: 'Eugene', image: 'images/eugene.png', shortcode: 'fv', species: 'Koala', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'eunice', name: 'Eunice', image: 'images/eunice.png', shortcode: 'fw', species: 'Sheep', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'faith', name: 'Faith', image: 'images/faith.png', shortcode: 'fx', species: 'Koala', gender: 'Female', personality: 'Normal', games: ['ac'], special: false, jpn: false},
    {id: 'fang', name: 'Fang', image: 'images/fang.png', shortcode: 'fy', species: 'Wolf', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'fauna', name: 'Fauna', image: 'images/fauna.png', shortcode: 'fz', species: 'Deer', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'felicity', name: 'Felicity', image: 'images/felicity.png', shortcode: 'ga', species: 'Cat', gender: 'Female', personality: 'Peppy', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'felyne', name: 'Felyne', image: 'images/felyne.png', shortcode: 'gb', species: 'Cat', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'filbert', name: 'Filbert', image: 'images/filbert.png', shortcode: 'gc', species: 'Squirrel', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'filly', name: 'Filly', image: 'images/filly.png', shortcode: 'gd', species: 'Horse', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'flash', name: 'Flash', image: 'images/flash.png', shortcode: 'ge', species: 'Bird', gender: 'Male', personality: 'Cranky', games: ['ac'], special: false, jpn: false},
    {id: 'flip', name: 'Flip', image: 'images/flip.png', shortcode: 'gf', species: 'Monkey', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'flo', name: 'Flo', image: 'images/flo.png', shortcode: 'gg', species: 'Penguin', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'flora', name: 'Flora', image: 'images/flora.png', shortcode: 'gh', species: 'Ostrich', gender: 'Female', personality: 'Peppy', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'flossie', name: 'Flossie', image: 'images/flossie.png', shortcode: 'gi', species: 'Mouse', gender: 'Female', personality: 'Peppy', games: ['ac'], special: false, jpn: false},
    {id: 'flurry', name: 'Flurry', image: 'images/flurry.png', shortcode: 'gj', species: 'Hamster', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'francine', name: 'Francine', image: 'images/francine.png', shortcode: 'gk', species: 'Rabbit', gender: 'Female', personality: 'Snooty', games: ['ac', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'frank', name: 'Frank', image: 'images/frank.png', shortcode: 'gl', species: 'Eagle', gender: 'Male', personality: 'Cranky', games: ['ac', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'freckles', name: 'Freckles', image: 'images/freckles.png', shortcode: 'gm', species: 'Duck', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'freya', name: 'Freya', image: 'images/freya.png', shortcode: 'gn', species: 'Wolf', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'friga', name: 'Friga', image: 'images/friga.png', shortcode: 'go', species: 'Penguin', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'frita', name: 'Frita', image: 'images/frita.png', shortcode: 'gp', species: 'Sheep', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'frobert', name: 'Frobert', image: 'images/frobert.png', shortcode: 'gq', species: 'Frog', gender: 'Male', personality: 'Jock', games: ['ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'fruity', name: 'Fruity', image: 'images/fruity.png', shortcode: 'gr', species: 'Duck', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'fuchsia', name: 'Fuchsia', image: 'images/fuchsia.png', shortcode: 'gs', species: 'Deer', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'gabi', name: 'Gabi', image: 'images/gabi.png', shortcode: 'gt', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'gala', name: 'Gala', image: 'images/gala.png', shortcode: 'gu', species: 'Pig', gender: 'Female', personality: 'Normal', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'ganon', name: 'Ganon', image: 'images/ganon.png', shortcode: 'gv', species: 'Pig', gender: 'Male', personality: 'Cranky', games: ['nl'], special: false, jpn: false},
    {id: 'gaston', name: 'Gaston', image: 'images/gaston.png', shortcode: 'gw', species: 'Rabbit', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'gayle', name: 'Gayle', image: 'images/gayle.png', shortcode: 'gx', species: 'Alligator', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'gen', name: 'Gen', image: 'images/gen.png', shortcode: 'gy', species: 'Sheep', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'genji', name: 'Genji', image: 'images/genji.png', shortcode: 'gz', species: 'Rabbit', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'gigi', name: 'Gigi', image: 'images/gigi.png', shortcode: 'ha', species: 'Frog', gender: 'Female', personality: 'Snooty', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'gladys', name: 'Gladys', image: 'images/gladys.png', shortcode: 'hb', species: 'Ostrich', gender: 'Female', personality: 'Normal', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'gloria', name: 'Gloria', image: 'images/gloria.png', shortcode: 'hc', species: 'Duck', gender: 'Female', personality: 'Snooty', games: ['cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'goldie', name: 'Goldie', image: 'images/goldie.png', shortcode: 'hd', species: 'Dog', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'gonzo', name: 'Gonzo', image: 'images/gonzo.png', shortcode: 'he', species: 'Koala', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'goose', name: 'Goose', image: 'images/goose.png', shortcode: 'hf', species: 'Chicken', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'graham', name: 'Graham', image: 'images/graham.png', shortcode: 'hg', species: 'Hamster', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'greta', name: 'Greta', image: 'images/greta.png', shortcode: 'hh', species: 'Mouse', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'grizzly', name: 'Grizzly', image: 'images/grizzly.png', shortcode: 'hi', species: 'Bear', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'groucho', name: 'Groucho', image: 'images/groucho.png', shortcode: 'hj', species: 'Bear', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'gruff', name: 'Gruff', image: 'images/gruff.png', shortcode: 'hk', species: 'Goat', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'gwen', name: 'Gwen', image: 'images/gwen.png', shortcode: 'hl', species: 'Penguin', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'hambo', name: 'Hambo', image: 'images/hambo.png', shortcode: 'hm', species: 'Pig', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'hamlet', name: 'Hamlet', image: 'images/hamlet.png', shortcode: 'hn', species: 'Hamster', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'hamphrey', name: 'Hamphrey', image: 'images/hamphrey.png', shortcode: 'ho', species: 'Hamster', gender: 'Male', personality: 'Cranky', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'hank', name: 'Hank', image: 'images/hank.png', shortcode: 'hp', species: 'Chicken', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'hans', name: 'Hans', image: 'images/hans.png', shortcode: 'hq', species: 'Gorilla', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'harry', name: 'Harry', image: 'images/harry.png', shortcode: 'hr', species: 'Hippo', gender: 'Male', personality: 'Cranky', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'hazel', name: 'Hazel', image: 'images/hazel.png', shortcode: 'hs', species: 'Squirrel', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'hector', name: 'Hector', image: 'images/hector.png', shortcode: 'ht', species: 'Chicken', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'henry', name: 'Henry', image: 'images/henry.png', shortcode: 'hu', species: 'Frog', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'hippeux', name: 'Hippeux', image: 'images/hippeux.png', shortcode: 'hv', species: 'Hippo', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'holden', name: 'Holden', image: 'images/holden.png', shortcode: 'hw', species: 'Hamster', gender: 'Male', personality: 'Jock', games: ['nl'], special: false, jpn: false},
    {id: 'hopkins', name: 'Hopkins', image: 'images/hopkins.png', shortcode: 'hx', species: 'Rabbit', gender: 'Male', personality: 'Lazy', games: ['ac', 'nl', 'pc', 'nh'], special: false, jpn: false},
    {id: 'hopper', name: 'Hopper', image: 'images/hopper.png', shortcode: 'hy', species: 'Penguin', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'hornsby', name: 'Hornsby', image: 'images/hornsby.png', shortcode: 'hz', species: 'Rhino', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'huck', name: 'Huck', image: 'images/huck.png', shortcode: 'ia', species: 'Frog', gender: 'Male', personality: 'Smug', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'huggy', name: 'Huggy', image: 'images/huggy.png', shortcode: 'ib', species: 'Koala', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'hugh', name: 'Hugh', image: 'images/hugh.png', shortcode: 'ic', species: 'Pig', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'iggly', name: 'Iggly', image: 'images/iggly.png', shortcode: 'id', species: 'Penguin', gender: 'Male', personality: 'Jock', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'iggy', name: 'Iggy', image: 'images/iggy.png', shortcode: 'ie', species: 'Goat', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'ike', name: 'Ike', image: 'images/ike.png', shortcode: 'if', species: 'Bear', gender: 'Male', personality: 'Cranky', games: ['ac', 'nl'], special: false, jpn: false},
    {id: 'inkwell', name: 'Inkwell', image: 'images/inkwell.png', shortcode: 'ig', species: 'Octopus', gender: 'Male', personality: 'Jock', games: ['nl'], special: false, jpn: false},
    {id: 'jacques', name: 'Jacques', image: 'images/jacques.png', shortcode: 'ih', species: 'Bird', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'jacob', name: 'Jacob', image: 'images/jacob.png', shortcode: 'ii', species: 'Bird', gender: 'Male', personality: 'Lazy', games: ['ac', 'nl'], special: false, jpn: false},
    {id: 'jambette', name: 'Jambette', image: 'images/jambette.png', shortcode: 'ij', species: 'Frog', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'jane', name: 'Jane', image: 'images/jane.png', shortcode: 'ik', species: 'Gorilla', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'jay', name: 'Jay', image: 'images/jay.png', shortcode: 'il', species: 'Bird', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'jeremiah', name: 'Jeremiah', image: 'images/jeremiah.png', shortcode: 'im', species: 'Frog', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'jitters', name: 'Jitters', image: 'images/jitters.png', shortcode: 'in', species: 'Bird', gender: 'Male', personality: 'Jock', games: ['ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'joe', name: 'Joe', image: 'images/joe.png', shortcode: 'io', species: 'Bird', gender: 'Male', personality: 'Cranky', games: ['ac'], special: false, jpn: true},
    {id: 'joey', name: 'Joey', image: 'images/joey.png', shortcode: 'ip', species: 'Duck', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'jubei', name: 'Jubei', image: 'images/jubei.png', shortcode: 'iq', species: 'Lion', gender: 'Male', personality: 'Cranky', games: ['ac'], special: false, jpn: true},
    {id: 'julia', name: 'Julia', image: 'images/julia.png', shortcode: 'ir', species: 'Ostrich', gender: 'Female', personality: 'Snooty', games: ['ac', 'nl', 'pc', 'nh'], special: false, jpn: false},
    {id: 'julian', name: 'Julian', image: 'images/julian.png', shortcode: 'is', species: 'Horse', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'june', name: 'June', image: 'images/june.png', shortcode: 'it', species: 'Cub', gender: 'Female', personality: 'Normal', games: ['ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'kabuki', name: 'Kabuki', image: 'images/kabuki.png', shortcode: 'iu', species: 'Cat', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'katt', name: 'Katt', image: 'images/katt.png', shortcode: 'iv', species: 'Cat', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'keaton', name: 'Keaton', image: 'images/keaton.png', shortcode: 'iw', species: 'Eagle', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'ken', name: 'Ken', image: 'images/ken.png', shortcode: 'ix', species: 'Chicken', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'ketchup', name: 'Ketchup', image: 'images/ketchup.png', shortcode: 'iy', species: 'Duck', gender: 'Female', personality: 'Peppy', games: ['ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'kevin', name: 'Kevin', image: 'images/kevin.png', shortcode: 'iz', species: 'Pig', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'kid-cat', name: 'Kid Cat', image: 'images/kid-cat.png', shortcode: 'ja', species: 'Cat', gender: 'Male', personality: 'Jock', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'kidd', name: 'Kidd', image: 'images/kidd.png', shortcode: 'jb', species: 'Goat', gender: 'Male', personality: 'Smug', games: ['ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'kiki', name: 'Kiki', image: 'images/kiki.png', shortcode: 'jc', species: 'Cat', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'kit', name: 'Kit', image: 'images/kit.png', shortcode: 'jd', species: 'Squirrel', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'kitt', name: 'Kitt', image: 'images/kitt.png', shortcode: 'je', species: 'Kangaroo', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'kitty', name: 'Kitty', image: 'images/kitty.png', shortcode: 'jf', species: 'Cat', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'klaus', name: 'Klaus', image: 'images/klaus.png', shortcode: 'jg', species: 'Bear', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'knox', name: 'Knox', image: 'images/knox.png', shortcode: 'jh', species: 'Chicken', gender: 'Male', personality: 'Cranky', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'kody', name: 'Kody', image: 'images/kody.png', shortcode: 'ji', species: 'Cub', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'koharu', name: 'Koharu', image: 'images/koharu.png', shortcode: 'jj', species: 'Kangaroo', gender: 'Female', personality: 'Peppy', games: ['ac'], special: false, jpn: true},
    {id: 'kyle', name: 'Kyle', image: 'images/kyle.png', shortcode: 'jk', species: 'Wolf', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'leigh', name: 'Leigh', image: 'images/leigh.png', shortcode: 'jl', species: 'Chicken', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'leonardo', name: 'Leonardo', image: 'images/leonardo.png', shortcode: 'jm', species: 'Tiger', gender: 'Male', personality: 'Jock', games: ['ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'leopold', name: 'Leopold', image: 'images/leopold.png', shortcode: 'jn', species: 'Lion', gender: 'Male', personality: 'Smug', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'lily', name: 'Lily', image: 'images/lily.png', shortcode: 'jo', species: 'Frog', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'limberg', name: 'Limberg', image: 'images/limberg.png', shortcode: 'jp', species: 'Mouse', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'lionel', name: 'Lionel', image: 'images/lionel.png', shortcode: 'jq', species: 'Lion', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'liz', name: 'Liz', image: 'images/liz.png', shortcode: 'jr', species: 'Alligator', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'lobo', name: 'Lobo', image: 'images/lobo.png', shortcode: 'js', species: 'Wolf', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'lolly', name: 'Lolly', image: 'images/lolly.png', shortcode: 'jt', species: 'Cat', gender: 'Female', personality: 'Normal', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'lopez', name: 'Lopez', image: 'images/lopez.png', shortcode: 'ju', species: 'Deer', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'louie', name: 'Louie', image: 'images/louie.png', shortcode: 'jv', species: 'Gorilla', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'lucha', name: 'Lucha', image: 'images/lucha.png', shortcode: 'jw', species: 'Bird', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'lucky', name: 'Lucky', image: 'images/lucky.png', shortcode: 'jx', species: 'Dog', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'lucy', name: 'Lucy', image: 'images/lucy.png', shortcode: 'jy', species: 'Pig', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'lulu-anteater', name: 'Lulu - anteater', image: 'images/lulu-anteater.png', shortcode: 'jz', species: 'Anteater', gender: 'Female', personality: 'Snooty', games: ['ac'], special: false, jpn: true},
    {id: 'lulu-hippo', name: 'Lulu - hippo', image: 'images/lulu-hippo.png', shortcode: 'ka', species: 'Hippo', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'lyman', name: 'Lyman', image: 'images/lyman.png', shortcode: 'kb', species: 'Koala', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'mac', name: 'Mac', image: 'images/mac.png', shortcode: 'kc', species: 'Dog', gender: 'Male', personality: 'Jock', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'madam-rosa', name: 'Madam Rosa', image: 'images/madam-rosa.png', shortcode: 'kd', species: 'Bird', gender: 'Female', personality: 'Snooty', games: ['ac'], special: false, jpn: true},
    {id: 'maddie', name: 'Maddie', image: 'images/maddie.png', shortcode: 'ke', species: 'Dog', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'maelle', name: 'Maelle', image: 'images/maelle.png', shortcode: 'kf', species: 'Duck', gender: 'Female', personality: 'Snooty', games: ['ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'maggie', name: 'Maggie', image: 'images/maggie.png', shortcode: 'kg', species: 'Pig', gender: 'Female', personality: 'Normal', games: ['ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'mallary', name: 'Mallary', image: 'images/mallary.png', shortcode: 'kh', species: 'Duck', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'maple', name: 'Maple', image: 'images/maple.png', shortcode: 'ki', species: 'Cub', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'marcel', name: 'Marcel', image: 'images/marcel.png', shortcode: 'kj', species: 'Dog', gender: 'Male', personality: 'Lazy', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'marcie', name: 'Marcie', image: 'images/marcie.png', shortcode: 'kk', species: 'Kangaroo', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'marcy', name: 'Marcy', image: 'images/marcy.png', shortcode: 'kl', species: 'Kangaroo', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'margie', name: 'Margie', image: 'images/margie.png', shortcode: 'km', species: 'Elephant', gender: 'Female', personality: 'Normal', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'marina', name: 'Marina', image: 'images/marina.png', shortcode: 'kn', species: 'Octopus', gender: 'Female', personality: 'Normal', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'marshal', name: 'Marshal', image: 'images/marshal.png', shortcode: 'ko', species: 'Squirrel', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'marty', name: 'Marty', image: 'images/marty.png', shortcode: 'kp', species: 'Cub', gender: 'Male', personality: 'Lazy', games: ['nl', 'pc'], special: false, jpn: false},
    {id: 'masa', name: 'Masa', image: 'images/masa.png', shortcode: 'kq', species: 'Dog', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'mathilda', name: 'Mathilda', image: 'images/mathilda.png', shortcode: 'kr', species: 'Kangaroo', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'medli', name: 'Medli', image: 'images/medli.png', shortcode: 'ks', species: 'Bird', gender: 'Female', personality: 'Normal', games: ['nl'], special: false, jpn: false},
    {id: 'megumi', name: 'Megumi', image: 'images/megumi.png', shortcode: 'kt', species: 'Dog', gender: 'Female', personality: 'Peppy', games: ['ac'], special: false, jpn: true},
    {id: 'melba', name: 'Melba', image: 'images/melba.png', shortcode: 'ku', species: 'Koala', gender: 'Female', personality: 'Normal', games: ['ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'meow', name: 'Meow', image: 'images/meow.png', shortcode: 'kv', species: 'Cat', gender: 'Female', personality: 'Peppy', games: ['ac'], special: false, jpn: true},
    {id: 'merengue', name: 'Merengue', image: 'images/merengue.png', shortcode: 'kw', species: 'Rhino', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'merry', name: 'Merry', image: 'images/merry.png', shortcode: 'kx', species: 'Cat', gender: 'Female', personality: 'Peppy', games: ['ac', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'midge', name: 'Midge', image: 'images/midge.png', shortcode: 'ky', species: 'Bird', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'mint', name: 'Mint', image: 'images/mint.png', shortcode: 'kz', species: 'Squirrel', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'mira', name: 'Mira', image: 'images/mira.png', shortcode: 'la', species: 'Rabbit', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'miranda', name: 'Miranda', image: 'images/miranda.png', shortcode: 'lb', species: 'Duck', gender: 'Female', personality: 'Snooty', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'mitzi', name: 'Mitzi', image: 'images/mitzi.png', shortcode: 'lc', species: 'Cat', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'moe', name: 'Moe', image: 'images/moe.png', shortcode: 'ld', species: 'Cat', gender: 'Male', personality: 'Lazy', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'molly', name: 'Molly', image: 'images/molly.png', shortcode: 'le', species: 'Duck', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'monique', name: 'Monique', image: 'images/monique.png', shortcode: 'lf', species: 'Cat', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'monty', name: 'Monty', image: 'images/monty.png', shortcode: 'lg', species: 'Monkey', gender: 'Male', personality: 'Cranky', games: ['ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'moose', name: 'Moose', image: 'images/moose.png', shortcode: 'lh', species: 'Mouse', gender: 'Male', personality: 'Jock', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'mott', name: 'Mott', image: 'images/mott.png', shortcode: 'li', species: 'Lion', gender: 'Male', personality: 'Jock', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'muffy', name: 'Muffy', image: 'images/muffy.png', shortcode: 'lj', species: 'Sheep', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'murphy', name: 'Murphy', image: 'images/murphy.png', shortcode: 'lk', species: 'Cub', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'nan', name: 'Nan', image: 'images/nan.png', shortcode: 'll', species: 'Goat', gender: 'Female', personality: 'Normal', games: ['ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'nana', name: 'Nana', image: 'images/nana.png', shortcode: 'lm', species: 'Monkey', gender: 'Female', personality: 'Normal', games: ['ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'naomi', name: 'Naomi', image: 'images/naomi.png', shortcode: 'ln', species: 'Cow', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'nate', name: 'Nate', image: 'images/nate.png', shortcode: 'lo', species: 'Bear', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'nibbles', name: 'Nibbles', image: 'images/nibbles.png', shortcode: 'lp', species: 'Squirrel', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'nindori', name: 'Nindori', image: 'images/nindori.png', shortcode: 'lq', species: 'Ostrich', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'nobuo', name: 'Nobuo', image: 'images/nobuo.png', shortcode: 'lr', species: 'Penguin', gender: 'Male', personality: 'Lazy', games: ['ac'], special: false, jpn: true},
    {id: 'norma', name: 'Norma', image: 'images/norma.png', shortcode: 'ls', species: 'Cow', gender: 'Female', personality: 'Normal', games: ['ac', 'nl'], special: false, jpn: false},
    {id: 'nosegay', name: 'Nosegay', image: 'images/nosegay.png', shortcode: 'lt', species: 'Anteater', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'o-hare', name: 'O\'Hare', image: 'images/o-hare.png', shortcode: 'lu', species: 'Rabbit', gender: 'Male', personality: 'Smug', games: ['ac', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'octavian', name: 'Octavian', image: 'images/octavian.png', shortcode: 'lv', species: 'Octopus', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'olaf', name: 'Olaf', image: 'images/olaf.png', shortcode: 'lw', species: 'Anteater', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'olive', name: 'Olive', image: 'images/olive.png', shortcode: 'lx', species: 'Cub', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'olivia', name: 'Olivia', image: 'images/olivia.png', shortcode: 'ly', species: 'Cat', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'opal', name: 'Opal', image: 'images/opal.png', shortcode: 'lz', species: 'Elephant', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'otis', name: 'Otis', image: 'images/otis.png', shortcode: 'ma', species: 'Bird', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'oxford', name: 'Oxford', image: 'images/oxford.png', shortcode: 'mb', species: 'Bull', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'ozzie', name: 'Ozzie', image: 'images/ozzie.png', shortcode: 'mc', species: 'Koala', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'pancetti', name: 'Pancetti', image: 'images/pancetti.png', shortcode: 'md', species: 'Pig', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'pango', name: 'Pango', image: 'images/pango.png', shortcode: 'me', species: 'Anteater', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'paolo', name: 'Paolo', image: 'images/paolo.png', shortcode: 'mf', species: 'Elephant', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'papi', name: 'Papi', image: 'images/papi.png', shortcode: 'mg', species: 'Horse', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'pashmina', name: 'Pashmina', image: 'images/pashmina.png', shortcode: 'mh', species: 'Goat', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'pate', name: 'Pate', image: 'images/pate.png', shortcode: 'mi', species: 'Duck', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'patricia', name: 'Patricia', image: 'images/patricia.png', shortcode: 'mj', species: 'Rhino', gender: 'Female', personality: 'Normal', games: ['ac'], special: false, jpn: true},
    {id: 'patty', name: 'Patty', image: 'images/patty.png', shortcode: 'mk', species: 'Cow', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'paula', name: 'Paula', image: 'images/paula.png', shortcode: 'ml', species: 'Bear', gender: 'Female', personality: 'Uchi', games: ['ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'peaches', name: 'Peaches', image: 'images/peaches.png', shortcode: 'mm', species: 'Horse', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'peanut', name: 'Peanut', image: 'images/peanut.png', shortcode: 'mn', species: 'Squirrel', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'pecan', name: 'Pecan', image: 'images/pecan.png', shortcode: 'mo', species: 'Squirrel', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'peck', name: 'Peck', image: 'images/peck.png', shortcode: 'mp', species: 'Bird', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'peewee', name: 'Peewee', image: 'images/peewee.png', shortcode: 'mq', species: 'Gorilla', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'peggy', name: 'Peggy', image: 'images/peggy.png', shortcode: 'mr', species: 'Pig', gender: 'Female', personality: 'Peppy', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'pekoe', name: 'Pekoe', image: 'images/pekoe.png', shortcode: 'ms', species: 'Cub', gender: 'Female', personality: 'Normal', games: ['cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'penelope', name: 'Penelope', image: 'images/penelope.png', shortcode: 'mt', species: 'Mouse', gender: 'Female', personality: 'Peppy', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'penny', name: 'Penny', image: 'images/penny.png', shortcode: 'mu', species: 'Mouse', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'petunia-cow', name: 'Petunia - cow', image: 'images/petunia-cow.png', shortcode: 'mv', species: 'Cow', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'petunia-rhino', name: 'Petunia - rhino', image: 'images/petunia-rhino.png', shortcode: 'mw', species: 'Rhino', gender: 'Female', personality: 'Snooty', games: ['ac'], special: false, jpn: true},
    {id: 'phil', name: 'Phil', image: 'images/phil.png', shortcode: 'mx', species: 'Ostrich', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'phoebe', name: 'Phoebe', image: 'images/phoebe.png', shortcode: 'my', species: 'Ostrich', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'pierce', name: 'Pierce', image: 'images/pierce.png', shortcode: 'mz', species: 'Eagle', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'pierre', name: 'Pierre', image: 'images/pierre.png', shortcode: 'na', species: 'Cat', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'pietro', name: 'Pietro', image: 'images/pietro.png', shortcode: 'nb', species: 'Sheep', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'pigleg', name: 'Pigleg', image: 'images/pigleg.png', shortcode: 'nc', species: 'Pig', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: false},
    {id: 'pinky', name: 'Pinky', image: 'images/pinky.png', shortcode: 'nd', species: 'Bear', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'piper', name: 'Piper', image: 'images/piper.png', shortcode: 'ne', species: 'Bird', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'pippy', name: 'Pippy', image: 'images/pippy.png', shortcode: 'nf', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'pironkon', name: 'Pironkon', image: 'images/pironkon.png', shortcode: 'ng', species: 'Alligator', gender: 'Male', personality: 'Lazy', games: ['ac'], special: false, jpn: true},
    {id: 'plucky', name: 'Plucky', image: 'images/plucky.png', shortcode: 'nh', species: 'Chicken', gender: 'Female', personality: 'Uchi', games: ['ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'poko', name: 'Poko', image: 'images/poko.png', shortcode: 'ni', species: 'Cub', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'pompom', name: 'Pompom', image: 'images/pompom.png', shortcode: 'nj', species: 'Duck', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'poncho', name: 'Poncho', image: 'images/poncho.png', shortcode: 'nk', species: 'Cub', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'poppy', name: 'Poppy', image: 'images/poppy.png', shortcode: 'nl', species: 'Squirrel', gender: 'Female', personality: 'Normal', games: ['cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'portia', name: 'Portia', image: 'images/portia.png', shortcode: 'nm', species: 'Dog', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'prince', name: 'Prince', image: 'images/prince.png', shortcode: 'nn', species: 'Frog', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'puck', name: 'Puck', image: 'images/puck.png', shortcode: 'no', species: 'Penguin', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'puddles', name: 'Puddles', image: 'images/puddles.png', shortcode: 'np', species: 'Frog', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'pudge', name: 'Pudge', image: 'images/pudge.png', shortcode: 'nq', species: 'Cub', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'punchy', name: 'Punchy', image: 'images/punchy.png', shortcode: 'nr', species: 'Cat', gender: 'Male', personality: 'Lazy', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'purrl', name: 'Purrl', image: 'images/purrl.png', shortcode: 'ns', species: 'Cat', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'queenie', name: 'Queenie', image: 'images/queenie.png', shortcode: 'nt', species: 'Ostrich', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'quetzal', name: 'Quetzal', image: 'images/quetzal.png', shortcode: 'nu', species: 'Eagle', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'quillson', name: 'Quillson', image: 'images/quillson.png', shortcode: 'nv', species: 'Duck', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'raddle', name: 'Raddle', image: 'images/raddle.png', shortcode: 'nw', species: 'Frog', gender: 'Male', personality: 'Lazy', games: ['ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'rasher', name: 'Rasher', image: 'images/rasher.png', shortcode: 'nx', species: 'Pig', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'renee', name: 'Renee', image: 'images/renee.png', shortcode: 'ny', species: 'Rhino', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'rex', name: 'Rex', image: 'images/rex.png', shortcode: 'nz', species: 'Lion', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'rhoda', name: 'Rhoda', image: 'images/rhoda.png', shortcode: 'oa', species: 'Chicken', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'rhonda', name: 'Rhonda', image: 'images/rhonda.png', shortcode: 'ob', species: 'Rhino', gender: 'Female', personality: 'Normal', games: ['ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'ribbot', name: 'Ribbot', image: 'images/ribbot.png', shortcode: 'oc', species: 'Frog', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'ricky', name: 'Ricky', image: 'images/ricky.png', shortcode: 'od', species: 'Squirrel', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'rilla', name: 'Rilla', image: 'images/rilla.png', shortcode: 'oe', species: 'Gorilla', gender: 'Female', personality: 'Peppy', games: ['nl', 'pc'], special: false, jpn: false},
    {id: 'rio', name: 'Rio', image: 'images/rio.png', shortcode: 'of', species: 'Ostrich', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'rizzo', name: 'Rizzo', image: 'images/rizzo.png', shortcode: 'og', species: 'Mouse', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'roald', name: 'Roald', image: 'images/roald.png', shortcode: 'oh', species: 'Penguin', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'robin', name: 'Robin', image: 'images/robin.png', shortcode: 'oi', species: 'Bird', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'rocco', name: 'Rocco', image: 'images/rocco.png', shortcode: 'oj', species: 'Hippo', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'rocket', name: 'Rocket', image: 'images/rocket.png', shortcode: 'ok', species: 'Gorilla', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'rod', name: 'Rod', image: 'images/rod.png', shortcode: 'ol', species: 'Mouse', gender: 'Male', personality: 'Jock', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'rodeo', name: 'Rodeo', image: 'images/rodeo.png', shortcode: 'om', species: 'Bull', gender: 'Male', personality: 'Lazy', games: ['ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'rodney', name: 'Rodney', image: 'images/rodney.png', shortcode: 'on', species: 'Hamster', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'rolf', name: 'Rolf', image: 'images/rolf.png', shortcode: 'oo', species: 'Tiger', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'rollo', name: 'Rollo', image: 'images/rollo.png', shortcode: 'op', species: 'Hippo', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'rooney', name: 'Rooney', image: 'images/rooney.png', shortcode: 'oq', species: 'Kangaroo', gender: 'Male', personality: 'Cranky', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'rory', name: 'Rory', image: 'images/rory.png', shortcode: 'or', species: 'Lion', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'roscoe', name: 'Roscoe', image: 'images/roscoe.png', shortcode: 'os', species: 'Horse', gender: 'Male', personality: 'Cranky', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'rosie', name: 'Rosie', image: 'images/rosie.png', shortcode: 'ot', species: 'Cat', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'rowan', name: 'Rowan', image: 'images/rowan.png', shortcode: 'ou', species: 'Tiger', gender: 'Male', personality: 'Jock', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'ruby', name: 'Ruby', image: 'images/ruby.png', shortcode: 'ov', species: 'Rabbit', gender: 'Female', personality: 'Peppy', games: ['ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'rudy', name: 'Rudy', image: 'images/rudy.png', shortcode: 'ow', species: 'Cat', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'sally', name: 'Sally', image: 'images/sally.png', shortcode: 'ox', species: 'Squirrel', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'samson', name: 'Samson', image: 'images/samson.png', shortcode: 'oy', species: 'Mouse', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'sandy', name: 'Sandy', image: 'images/sandy.png', shortcode: 'oz', species: 'Ostrich', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'pc', 'nh'], special: false, jpn: false},
    {id: 'savannah', name: 'Savannah', image: 'images/savannah.png', shortcode: 'pa', species: 'Horse', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'scoot', name: 'Scoot', image: 'images/scoot.png', shortcode: 'pb', species: 'Duck', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'shari', name: 'Shari', image: 'images/shari.png', shortcode: 'pc', species: 'Monkey', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'sheldon', name: 'Sheldon', image: 'images/sheldon.png', shortcode: 'pd', species: 'Squirrel', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'shep', name: 'Shep', image: 'images/shep.png', shortcode: 'pe', species: 'Dog', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'shinabiru', name: 'Shinabiru', image: 'images/shinabiru.png', shortcode: 'pf', species: 'Duck', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'shoukichi', name: 'Shoukichi', image: 'images/shoukichi.png', shortcode: 'pg', species: 'Bird', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'simon', name: 'Simon', image: 'images/simon.png', shortcode: 'ph', species: 'Monkey', gender: 'Male', personality: 'Lazy', games: ['ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'skye', name: 'Skye', image: 'images/skye.png', shortcode: 'pi', species: 'Wolf', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'sly', name: 'Sly', image: 'images/sly.png', shortcode: 'pj', species: 'Alligator', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'snake', name: 'Snake', image: 'images/snake.png', shortcode: 'pk', species: 'Rabbit', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'snooty', name: 'Snooty', image: 'images/snooty.png', shortcode: 'pl', species: 'Anteater', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'soleil', name: 'Soleil', image: 'images/soleil.png', shortcode: 'pm', species: 'Hamster', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'sparro', name: 'Sparro', image: 'images/sparro.png', shortcode: 'pn', species: 'Bird', gender: 'Male', personality: 'Jock', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'spike', name: 'Spike', image: 'images/spike.png', shortcode: 'po', species: 'Rhino', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl', 'pc', 'nh'], special: false, jpn: false},
    {id: 'spork', name: 'Spork', image: 'images/spork.png', shortcode: 'pp', species: 'Pig', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'sprinkle', name: 'Sprinkle', image: 'images/sprinkle.png', shortcode: 'pq', species: 'Penguin', gender: 'Female', personality: 'Peppy', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'sprocket', name: 'Sprocket', image: 'images/sprocket.png', shortcode: 'pr', species: 'Ostrich', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'static', name: 'Static', image: 'images/static.png', shortcode: 'ps', species: 'Squirrel', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'stella', name: 'Stella', image: 'images/stella.png', shortcode: 'pt', species: 'Sheep', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'nl', 'pc', 'nh'], special: false, jpn: false},
    {id: 'sterling', name: 'Sterling', image: 'images/sterling.png', shortcode: 'pu', species: 'Eagle', gender: 'Male', personality: 'Jock', games: ['cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'stinky', name: 'Stinky', image: 'images/stinky.png', shortcode: 'pv', species: 'Cat', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'stitches', name: 'Stitches', image: 'images/stitches.png', shortcode: 'pw', species: 'Cub', gender: 'Male', personality: 'Lazy', games: ['ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'stu', name: 'Stu', image: 'images/stu.png', shortcode: 'px', species: 'Bull', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'sue-e', name: 'Sue E', image: 'images/sue-e.png', shortcode: 'py', species: 'Pig', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'sunny', name: 'Sunny', image: 'images/sunny.png', shortcode: 'pz', species: 'Frog', gender: 'Female', personality: 'Normal', games: ['ac'], special: false, jpn: true},
    {id: 'sven', name: 'Sven', image: 'images/sven.png', shortcode: 'qa', species: 'Goat', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'sydney', name: 'Sydney', image: 'images/sydney.png', shortcode: 'qb', species: 'Koala', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'sylvana', name: 'Sylvana', image: 'images/sylvana.png', shortcode: 'qc', species: 'Squirrel', gender: 'Female', personality: 'Normal', games: ['ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'sylvia', name: 'Sylvia', image: 'images/sylvia.png', shortcode: 'qd', species: 'Kangaroo', gender: 'Female', personality: 'Uchi', games: ['ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 't-bone', name: 'T-Bone', image: 'images/t-bone.png', shortcode: 'qe', species: 'Bull', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'tabby', name: 'Tabby', image: 'images/tabby.png', shortcode: 'qf', species: 'Cat', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'tad', name: 'Tad', image: 'images/tad.png', shortcode: 'qg', species: 'Frog', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl', 'pc'], special: false, jpn: false},
    {id: 'tammi', name: 'Tammi', image: 'images/tammi.png', shortcode: 'qh', species: 'Monkey', gender: 'Female', personality: 'Peppy', games: ['ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'tammy', name: 'Tammy', image: 'images/tammy.png', shortcode: 'qi', species: 'Cub', gender: 'Female', personality: 'Uchi', games: ['nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'tangy', name: 'Tangy', image: 'images/tangy.png', shortcode: 'qj', species: 'Cat', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'tank', name: 'Tank', image: 'images/tank.png', shortcode: 'qk', species: 'Rhino', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'tarou', name: 'Tarou', image: 'images/tarou.png', shortcode: 'ql', species: 'Wolf', gender: 'Male', personality: 'Jock', games: ['ac'], special: false, jpn: true},
    {id: 'tasha', name: 'Tasha', image: 'images/tasha.png', shortcode: 'qm', species: 'Squirrel', gender: 'Female', personality: 'Snooty', games: ['ac', 'nl', 'pc', 'nh'], special: false, jpn: false},
    {id: 'teddy', name: 'Teddy', image: 'images/teddy.png', shortcode: 'qn', species: 'Bear', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'tex', name: 'Tex', image: 'images/tex.png', shortcode: 'qo', species: 'Penguin', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'tia', name: 'Tia', image: 'images/tia.png', shortcode: 'qp', species: 'Elephant', gender: 'Female', personality: 'Normal', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'tiara', name: 'Tiara', image: 'images/tiara.png', shortcode: 'qq', species: 'Rhino', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'tiffany', name: 'Tiffany', image: 'images/tiffany.png', shortcode: 'qr', species: 'Rabbit', gender: 'Female', personality: 'Snooty', games: ['ac', 'ww', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'timbra', name: 'Timbra', image: 'images/timbra.png', shortcode: 'qs', species: 'Sheep', gender: 'Female', personality: 'Snooty', games: ['nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'tipper', name: 'Tipper', image: 'images/tipper.png', shortcode: 'qt', species: 'Cow', gender: 'Female', personality: 'Snooty', games: ['ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'toby', name: 'Toby', image: 'images/toby.png', shortcode: 'qu', species: 'Rabbit', gender: 'Male', personality: 'Smug', games: ['nl', 'pc'], special: false, jpn: false},
    {id: 'tom', name: 'Tom', image: 'images/tom.png', shortcode: 'qv', species: 'Cat', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'truffles', name: 'Truffles', image: 'images/truffles.png', shortcode: 'qw', species: 'Pig', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'tucker', name: 'Tucker', image: 'images/tucker.png', shortcode: 'qx', species: 'Elephant', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'tutu', name: 'Tutu', image: 'images/tutu.png', shortcode: 'qy', species: 'Bear', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'twiggy', name: 'Twiggy', image: 'images/twiggy.png', shortcode: 'qz', species: 'Bird', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'twirp', name: 'Twirp', image: 'images/twirp.png', shortcode: 'ra', species: 'Bird', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'tybalt', name: 'Tybalt', image: 'images/tybalt.png', shortcode: 'rb', species: 'Tiger', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'ursala', name: 'Ursala', image: 'images/ursala.png', shortcode: 'rc', species: 'Bear', gender: 'Female', personality: 'Uchi', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'valise', name: 'Valise', image: 'images/valise.png', shortcode: 'rd', species: 'Kangaroo', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'velma', name: 'Velma', image: 'images/velma.png', shortcode: 're', species: 'Goat', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'verdun', name: 'Verdun', image: 'images/verdun.png', shortcode: 'rf', species: 'Bull', gender: 'Male', personality: 'Cranky', games: ['ac'], special: false, jpn: true},
    {id: 'vesta', name: 'Vesta', image: 'images/vesta.png', shortcode: 'rg', species: 'Sheep', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'vic', name: 'Vic', image: 'images/vic.png', shortcode: 'rh', species: 'Bull', gender: 'Male', personality: 'Cranky', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'viche', name: 'Viche', image: 'images/viche.png', shortcode: 'ri', species: 'Squirrel', gender: 'Female', personality: 'Normal', games: ['nl'], special: false, jpn: false},
    {id: 'victoria', name: 'Victoria', image: 'images/victoria.png', shortcode: 'rj', species: 'Horse', gender: 'Female', personality: 'Peppy', games: ['ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'violet', name: 'Violet', image: 'images/violet.png', shortcode: 'rk', species: 'Gorilla', gender: 'Female', personality: 'Snooty', games: ['ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'vivian', name: 'Vivian', image: 'images/vivian.png', shortcode: 'rl', species: 'Wolf', gender: 'Female', personality: 'Snooty', games: ['ac', 'nl', 'nh'], special: false, jpn: false},
    {id: 'vladimir', name: 'Vladimir', image: 'images/vladimir.png', shortcode: 'rm', species: 'Cub', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'w-link', name: 'W. Link', image: 'images/w-link.png', shortcode: 'rn', species: 'Wolf', gender: 'Male', personality: 'Smug', games: ['nl'], special: false, jpn: false},
    {id: 'wade', name: 'Wade', image: 'images/wade.png', shortcode: 'ro', species: 'Penguin', gender: 'Male', personality: 'Lazy', games: ['ac', 'nl'], special: false, jpn: false},
    {id: 'walker', name: 'Walker', image: 'images/walker.png', shortcode: 'rp', species: 'Dog', gender: 'Male', personality: 'Lazy', games: ['ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'walt', name: 'Walt', image: 'images/walt.png', shortcode: 'rq', species: 'Kangaroo', gender: 'Male', personality: 'Cranky', games: ['nl', 'hhd'], special: false, jpn: false},
    {id: 'wart-jr', name: 'Wart Jr', image: 'images/wart-jr.png', shortcode: 'rr', species: 'Frog', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'weber', name: 'Weber', image: 'images/weber.png', shortcode: 'rs', species: 'Duck', gender: 'Male', personality: 'Lazy', games: ['dnm', 'ac', 'nl'], special: false, jpn: false},
    {id: 'wendy', name: 'Wendy', image: 'images/wendy.png', shortcode: 'rt', species: 'Sheep', gender: 'Female', personality: 'Peppy', games: ['cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'whitney', name: 'Whitney', image: 'images/whitney.png', shortcode: 'ru', species: 'Wolf', gender: 'Female', personality: 'Snooty', games: ['ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'willow', name: 'Willow', image: 'images/willow.png', shortcode: 'rv', species: 'Sheep', gender: 'Female', personality: 'Snooty', games: ['ac', 'cf', 'nl', 'hhd', 'nh'], special: false, jpn: false},
    {id: 'winnie', name: 'Winnie', image: 'images/winnie.png', shortcode: 'rw', species: 'Horse', gender: 'Female', personality: 'Peppy', games: ['dnm', 'ac', 'cf', 'nl', 'hhd'], special: false, jpn: false},
    {id: 'wolfgang', name: 'Wolfgang', image: 'images/wolfgang.png', shortcode: 'rx', species: 'Wolf', gender: 'Male', personality: 'Cranky', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc', 'nh'], special: false, jpn: false},
    {id: 'woolio', name: 'Woolio', image: 'images/woolio.png', shortcode: 'ry', species: 'Sheep', gender: 'Male', personality: 'Jock', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'yodel', name: 'Yodel', image: 'images/yodel.png', shortcode: 'rz', species: 'Gorilla', gender: 'Male', personality: 'Lazy', games: ['ac'], special: false, jpn: false},
    {id: 'yuka', name: 'Yuka', image: 'images/yuka.png', shortcode: 'sa', species: 'Koala', gender: 'Female', personality: 'Snooty', games: ['dnm', 'ac', 'ww', 'cf', 'nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'zell', name: 'Zell', image: 'images/zell.png', shortcode: 'sb', species: 'Deer', gender: 'Male', personality: 'Smug', games: ['nl', 'hhd', 'pc'], special: false, jpn: false},
    {id: 'zoe', name: 'Zoe', image: 'images/zoe.png', shortcode: 'sc', species: 'Anteater', gender: 'Female', personality: 'Normal', games: ['dnm', 'ac'], special: false, jpn: false},
    {id: 'zucker', name: 'Zucker', image: 'images/zucker.png', shortcode: 'sd', species: 'Octopus', gender: 'Male', personality: 'Lazy', games: ['nl', 'hhd', 'nh'], special: false, jpn: false}
]

var acgames = ["dnm", "ac", "ww", "cf", "nl", "hhd", "pc", "nh"];

var myPicker = new picker.Picker({
    items: items,
    shortcodeLength: 2,
    defaultSettings: {
        minBatchSize: 2,
        maxBatchSize: 20,
        games: acgames,
        includeJPN: true
    },
    getFilteredItems: function(settings) {
        var filteredList = [];
        for (var i = 0; i < items.length; i++) {
            // Check if any games are included in current filter:
            var gameMatch = false;
            var jpnMatch = false;
            for (var j = 0; j < items[i].games.length; j++) {
                if (items[i].jpn == true) jpnMatch = true;
                if (settings.games.indexOf(items[i].games[j]) != -1) {
                    gameMatch = true;
                    break;
                }
            }
            if (jpnMatch && (settings.includeJPN == false)) continue;
            if (gameMatch) filteredList.push(items[i].id);
        }
        return filteredList;
    }
});

var pickerUI = new PickerUI(myPicker, {
    elements: {
        pick: "#pick",
        pass: "#pass",
        undo: "#undo",
        redo: "#redo",
        evaluating: "#evaluating",
        favorites: "#favorites",
        shortcodeLink: "#shortcode-link",
        sharedListContainer: "#shared-list-modal",
        sharedList: "#shared-list",
        sharedListContinue: "#shared-list-continue",
        sharedListSkip: ".shared-list-skip",
        settings: {
            minBatchSize: '#min-batch-size',
            maxBatchSize: '#max-batch-size',
            games: ".games",
            includeJPN: "#include-jpn"
        }
    },
    onUpdate: function(updateType) {
        setPickerWidth();
    }
});

pickerUI.initialize();

/* Sortable favorites - you can safely remove this, and the Sortable.min.js script, if you don't want to be able to sort your favorite list. */
var sortable = new Sortable(pickerUI.elem.favorites.get(0), {
    draggable: '.item',
    animation: 100,
    onStart: function() {
        pickerUI.elem.favorites.addClass("sorting");
    },
    onEnd: function() {
        pickerUI.elem.favorites.removeClass("sorting");
    },
    onUpdate: function() {
        myPicker.setFavorites(pickerUI.elem.favorites.children().map(function() {
            return pickerUI.getItem(this);
        }).get());
        pickerUI.update(true);
    }
});
/* End sortable favorites */

/* Toggle settings block */
$(".toggle").on('click', function() {
    $($(this).attr("href")).slideToggle();
    return false;
});

/* Games filter */
pickerUI.elem.settings.games.on('change', function() {
    var games = pickerUI.getSetting('games');

    if (games.length < acgames.length && games.length > 0) {
        $("#games-all").prop("indeterminate", true);
    } else {
        $("#games-all").prop("indeterminate", false);
    }

    if (games.length === acgames.length) {
        $("#games-all").prop("checked", true);
    } else if (games.length === 0) {
        $("#games-all").prop("checked", false);
    }
});

$("#games-all").on('change', function() {
    pickerUI.setSetting('games', $(this).prop("checked") ? acgames : []);
    myPicker.setSettings(pickerUI.getSettings());
    pickerUI.update(true, 'setting');
});

document.getElementById("reset").addEventListener("click", () => {pickerUI.reset()});

function setPickerWidth() {
    var evaluating = myPicker.state.arrays.evaluating;
    pickerUI.elem.evaluating.width(evaluating.length ? getBatchWidth(evaluating.length, 5) * (pickerUI.elem.evaluating.children().width() + 12) : '100%');
}

$(window).on('resize', setPickerWidth);

function getBatchWidth(batchSize, maxWidth) {
    /**
     * Calculate how many sprites wide the display area for the Pokémon
     * should be, for the given batch size.
     * We want the closest thing possible to a square, but prefer perfect
     * rectangles to imperfect squares.
     */
    // First, factor the batch size.
    var root = Math.sqrt(batchSize);
    var i, factor = 1;
    for (i = 2; i <= root; i++) {
        // The highest number up to i that batchSize is divisible by is factor.
        if (batchSize % i === 0) {
            factor = i;
        }
    }
    // If this would lead to the width being more than three times greater than the height, use the same batch width as the number above.
    if (3 * factor < batchSize / factor) {
        return getBatchWidth(batchSize + 1, maxWidth);
    }
    else {
        return Math.min(5, batchSize / factor);
    }
}

/* Background colors */

function changeColor(event) {
    document.body.style.backgroundImage = event.target.value;
}

for (var button of document.getElementsByName("bg-color")) {
    button.addEventListener('change', changeColor);
}


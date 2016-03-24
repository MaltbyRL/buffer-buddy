'use strict';


app.controller('homeCtrl', function($scope, $sce, $http) {

  console.log('homeCTRL');
  // Get the modal
  var modal = document.getElementById('myModal');
  // Open/close Modal
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  // open modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  $scope.openIframe = (game) => {
    $scope.getGameByUrl = $sce.trustAsResourceUrl(game.Url);
    console.log(game.Url)
    modal.style.display = "block";
    console.log("game:", $scope.getGameByUrl);
    $scope.frame = true
    $('iframe').css('height', $(window).height() + 'px');

  }

  // $scope.updateGameList = () => {
    $http.get("api/git-games/git-games").then((res) => {
      console.log(res.data.games)
      $scope.games = res.data.games
    });
  // }









  //
  //
  //
  //
  // var games = [{
  //     Name: "Desperate Gods",
  //     GithubURL: "https://github.com/David20321/FTJ",
  //     Url: "http://www.wolfire.com/desperate-gods",
  //     Description: "Free online board game that was designed to be played just like a board game in real-life: no rules are enforced by the computer."
  //   }, {
  //     Name: "Lichess",
  //     GithubURL: "https://github.com/ornicar/lila",
  //     Url: "http://lichess.org/",
  //     Description: "Free chess game using HTML5 &amp; websockets, built with Scala, Play 2.1, MongoDB and Elasticsearch."
  //   }, {
  //     Name: "Alge&apos;s Escapade",
  //     GithubURL: "https://github.com/Dave-and-Mike/game-off-2012",
  //     Url: "http://dave-and-mike.github.io/game-off-2012/",
  //     Description: "HTML5, JavaScript, GameJs arcade game where you control an Algae."
  //   }, {
  //     Name: "Alien Invasion",
  //     GithubURL: "https://github.com/cykod/AlienInvasion",
  //     Url: "http://cykod.github.io/AlienInvasion/",
  //     Description: "Demo Game for Mobile HTML5 Game Development."
  //   }, {
  //     Name: "Arashi",
  //     GithubURL: "https://github.com/stephank/arashi-js",
  //     Url: "http://stephank.github.io/arashi-js/",
  //     Description: "Arashi is a clone of the Arcade game Tempest."
  //   }, {
  //   Name: "Asteroids",
  //   GithubURL: "http://github.com/dmcinnes/HTML5-Asteroids",
  //   Url: "http://dougmcinnes.com/html-5-asteroids/",
  //   Description: "Pure JavaScript asteroids."
  //   }, {
  //   Name: "Avabranch",
  //   GithubURL: "https://github.com/Zolmeister/avabranch",
  //   Url: "http://avabranch.zolmeister.com/",
  //   Description: "GitHub Game Off 2012 entry."
  //   }, {
  //   Name: "Ball And Wall",
  //   GithubURL: "https://github.com/budnix/ball-and-wall",
  //   Url: "http://ballandwall.com/",
  //   Description: "Pure JavaScript arkanoid style game."
  //   }, {
  //   Name: "Breakout",
  //   GithubURL: "https://github.com/Couchfriends/breakout",
  //   Url: "http://cdn.couchfriends.com/games/breakout/",
  //   Description: "Breakout multiplayer with HTML5."
  //   }, {
  //   Name: "Captain Rogers",
  //   GithubURL: "https://github.com/EnclaveGames/Captain-Rogers",
  //   Url: "http://enclavegames.com/games/captain-rogers/",
  //   Description: "Captain Rogers: Asteroid Belt of Sirius"
  //   }, {
  //   Name: "Ceros Snake",
  //   GithubURL: "https://github.com/mjhasbach/ceros-snake",
  //   Url: "http://ceros-snake.hasba.ch/",
  //   Description: "A remake of the iconic 70&apos;s Snake game."
  //   }, {
  //   Name: "CHANG&#x20AC;",
  //   GithubURL: "https://github.com/RothschildGames/change",
  //   Url: "http://change-game.herokuapp.com/",
  //   Description: "Intense game about the extreme life of supermarket cashiers."
  //   }, {
  //   Name: "Circus Charlie",
  //   GithubURL: "https://github.com/eugenioclrc/circushtml5",
  //   Url: "http://eugenioclrc.github.io/circushtml5",
  //   Description: "HTML5 tribute created in Phaser."
  //   }, {
  //   Name: "Clumsy Bird",
  //   GithubURL: "https://github.com/ellisonleao/clumsy-bird",
  //   Url: "http://www.varunpant.com/static/resources/CrappyBird/index.html",
  //   Description: "Flappy Bird clone in JavaScript using MelonJS."
  //   }, {
  //   Name: "Codename Lumberjack",
  //   GithubURL: "https://github.com/arkeus/Codename-Lumberjack",
  //   Url: "http://projects.iarke.us/codenamelumberjack/",
  //   Description: "Simple flash game written using Actionscript 3.0 and Flixel."
  //   }, {
  //   Name: "Coffee Snake",
  //   GithubURL: "https://github.com/dommmel/coffee-snake",
  //   Url: "http://dommmel.github.com/coffee-snake/",
  //   Description: "HTML5 snake game written in coffee script."
  //   }, {
  //   Name: "Coil",
  //   GithubURL: "https://github.com/leereilly/Coil",
  //   Url: "http://hakim.se/experiments/html5/coil/",
  //   Description: "HTML5 canvas game where you defeat enemies by wrapping enemies in your trail."
  //   }, {
  //   Name: "Color Quest",
  //   GithubURL: "https://github.com/redbluegames/game-off-2013",
  //   Url: "http://redbluegames.com/game-off-2013/",
  //   Description: "Infinite runner following a black and white pixel&apos;s quest to change into a color pixel."
  //   }, {
  //   Name: "Core Commiter",
  //   GithubURL: "https://github.com/vladikoff/game-off-2012",
  //   Url: "http://committer.meteor.com/",
  //   Description: "GitHub Game Off 2012 Entry."
  //   }, {
  //   Name: "Crappy Bird",
  //   GithubURL: "https://github.com/varunpant/CrappyBird",
  //   Url: "http://www.varunpant.com/static/resources/CrappyBird/index.html",
  //   Description: "Flappy Bird clone in JavaScript and Canvas2D API."
  //   }, {
  //   Name: "Custom Tetris",
  //   GithubURL: "https://github.com/ondras/custom-tetris",
  //   Url: "http://ondras.github.io/custom-tetris/",
  //   Description: "Play the classic Tetris game the way you like it."
  //   }, {
  //   Name: "Digger",
  //   GithubURL: "https://github.com/lutzroeder/digger",
  //   Url: "http://www.lutzroeder.com/html5/digger/",
  //   Description: "HTML5 version of a Boulderdash game."
  //   }, {
  //   Name: "Drakonas",
  //   GithubURL: "https://github.com/Casmo/Drakonas",
  //   Url: "http://www.fellicht.nl/games/drakonas/",
  //   Description: "Classic shoot &apos;em up game build with the Three.js library."
  //   }, {
  //   Name: "Drill Bunny",
  //   GithubURL: "https://github.com/DreamShowAdventures/LudumDare29",
  //   Url: "http://dreamshowadventures.github.io/LudumDare29/",
  //   Description: "Written in JavaScript and using the great Phaser library."
  //   }, {
  //   Name: "DuckHunt JS",
  //   GithubURL: "https://github.com/MattSurabian/DuckHunt-JS",
  //   Url: "http://mattsurabian.com/duckhunt/",
  //   Description: "DuckHunt ported to JS and HTML5 with a level creator."
  //   }, {
  //   Name: "Emberwind",
  //   GithubURL: "https://github.com/operasoftware/Emberwind",
  //   Url: "http://operasoftware.github.com/Emberwind/",
  //   Description: "HTML5 port of the indie platform game Emberwind."
  //   }, {
  //   Name: "ExecutiveMan",
  //   GithubURL: "https://github.com/CamHenlin/ExecutiveMan",
  //   Url: "http://executive-man.com/",
  //   Description: "JavaScript MegaMan clone."
  //   }, {
  //   Name: "Fluid Table Tennis",
  //   GithubURL: "https://github.com/anirudhjoshi/fluid_table_tennis",
  //   Url: "http://anirudhjoshi.github.com/fluid_table_tennis",
  //   Description: "Renders a table tennis game interacting with a full-color real-time fluid simulation at 60 FPS."
  //   }, {
  //   Name: "FlxInvaders",
  //   GithubURL: "https://github.com/AdamAtomic/Flx-Invaders",
  //   Url: "http://flixel.org/flxinvaders/",
  //   Description: "Very simple Flixel game inspired by the Taito classic."
  //   }, {
  //   Name: "FlxTeroids",
  //   GithubURL: "https://github.com/AdamAtomic/FlxTeroids",
  //   Url: "http://www.flixel.org/flxteroids/",
  //   Description: "Very simple Flixel game inspired by the classic arcade shooter."
  //   }, {
  //   Name: "Grave Robbers",
  //   GithubURL: "https://github.com/AdamAtomic/GraveRobbers",
  //   Url: "http://adamatomic.com/graverobbers",
  //   Description: "Sort of GIRP-inspired tower defense."
  //   }, {
  //   Name: "Heal &apos;em All",
  //   GithubURL: "https://github.com/krzysu/game-off-2013",
  //   Url: "http://games.myviews.pl/heal-em-all/",
  //   Description: "Imagine, what if the cure exists? What if zombies plague can be stoped? Explore old, abandoned graveyard, heal as many zombies as you can, and find your way out. But be careful not to become one of them."
  //   }, {
  //   Name: "HotFix",
  //   GithubURL: "https://github.com/sdrdis/hotfix",
  //   Url: "http://sdrdis.github.com/hotfix/",
  //   Description: "Help Hotfix collect stargazers and avoid enemies. Collect commits to upgrade hotfix and add new features."
  //   }, {
  //   Name: "hurry!",
  //   GithubURL: "https://github.com/hughsk/ludum-dare-27",
  //   Url: "http://hughsk.io/ludum-dare-27/",
  //   Description: "Small but speedy arcade shooter."
  //   }, {
  //   Name: "Hyperspace Garbage Collector",
  //   GithubURL: "https://github.com/razh/game-off-2013",
  //   Url: "http://razh.github.io/game-off-2013/",
  //   Description: "General Hyperspace Waste Management Solutions."
  //   }, {
  //   Name: "Jekyll &amp; Hyde Collide",
  //   GithubURL: "https://github.com/awesome-interactive/game-off-2013",
  //   Url: "http://awesome-interactive.github.io/game-off-2013/ExportedGame.html",
  //   Description: "Multi-layered infinite side-scroller."
  //   }, {
  //   Name: "Mario 5 HTML",
  //   GithubURL: "https://github.com/robertkleffner/mariohtml5",
  //   Url: "http://rawrbitrary.com/arcade/infinite-mario-bros-in-html5/",
  //   Description: "Infinite Mario in HTML5 JavaScript"
  //   }, {
  //   Name: "Mega Girl",
  //   GithubURL: "https://github.com/ddionisio/game-off-2013",
  //   Url: "http://www.renegadeware.com/web_games/megagirl/",
  //   Description: "Megaman inspired game."
  //   }, {
  //   Name: "Masonry JavaScript Tetris Clone",
  //   GithubURL: "https://github.com/gamedolphin/Masonry-JavaScript-Tetris-Clone",
  //   Url: "http://gamedolph.in/sample-page/masonry-tetris-clone/",
  //   Description: "Tetris clone created using HTML5/JavaScript/Phaser."
  //   }, {
  //   Name: "Mode",
  //   GithubURL: "https://github.com/AdamAtomic/Mode",
  //   Url: "http://www.adamatomic.com/mode/",
  //   Description: "Small(but sadly not that simple) demo game built on the Flixel framework."
  //   }, {
  //   Name: "Monster Wants Candy",
  //   GithubURL: "https://github.com/EnclaveGames/Monster-Wants-Candy-demo",
  //   Url: "http://candy-demo.enclavegames.com/",
  //   Description: "Simple HTML5 game created with Phaser 2.0.7."
  //   }, {
  //   Name: "Newton Adventure",
  //   GithubURL: "https://github.com/devnewton/newton_adventure",
  //   Url: "http://play.bci.im/newton_adventure/",
  //   Description: "Play Newton, a very special hero who has the power to change gravity direction!"
  //   }, {
  //   Name: "Octocat Jump",
  //   GithubURL: "https://github.com/ogoshen/game-off-2012",
  //   Url: "http://ogoshen.github.io/game-off-2012/",
  //   Description: "GitHub Game Off 2012 Entry."
  //   }, {
  //   Name: "Onslaught Arena",
  //   GithubURL: "https://github.com/lostdecade/onslaught_arena",
  //   Url: "http://arcade.lostdecadegames.com/onslaught_arena/",
  //   Description: "Fight off hordes of classic medieval monsters in this fast paced arcade shooter!"
  //   }, {
  //   Name: "Pappu Pakia",
  //   GithubURL: "https://github.com/mindd-it/pappu-pakia",
  //   Description: "Addictive game where you guide little Pappu around obstacles while collecting coins, stars, and berries and avoiding enemies known as Pakias."
  //   }, {
  //   Name: "PolyBranch",
  //   GithubURL: "https://github.com/gbatha/PolyBranch",
  //   Description: "Minimalist 3D game. Dodging branches may seem easy at first, but how long can you hold up as you approach terminal velocity?"
  //   }, {
  //   Name: "Protocol 390",
  //   GithubURL: "https://github.com/josegallegos07/game-off-2013",
  //   Description: "To survive in People&apos;s Park, you must supply the prophet with change."
  //   }, {
  //   Name: "Raging Gardens",
  //   GithubURL: "https://github.com/petarov/game-off-2012",
  //   Url: "http://petarov.github.io/game-off-2012/",
  //   Description: "Javascript/HTML5 web browser game where a a hungry (ninja) rabbit farts too often."
  //   }, {
  //   Name: "Ski Free",
  //   GithubURL: "https://github.com/basicallydan/skifree.js",
  //   Url: "http://basicallydan.github.com/skifree.js",
  //   Description: "JavaScript port of the classic PC Game, Skifree."
  //   }, {
  //   Name: "Snake",
  //   GithubURL: "https://github.com/jrgdiz/snake",
  //   Url: "http://diz.es/snake/",
  //   Description: "Clone of the classic Snake game."
  //   }, {
  //   Name: "Space-Shooter",
  //   GithubURL: "https://github.com/Couchfriends/Space-Shooter",
  //   Url: "http://couchfriends.com/games/5",
  //   Description: "A classic shoot&apos;em up space shooter build in HTML5 with multiplayer."
  //   }, {
  //   Name: "SORADES 13K",
  //   GithubURL: "https://github.com/maettig/starship-sorades-13k",
  //   Url: "http://maettig.com/code/canvas/starship-sorades-13k/",
  //   Description: "Scrolling shooter in the vein of &quot;Raptor: Call of the Shadows&quot; and &quot;Warning Forever&quot;."
  //   }, {
  //   Name: "Space Crusade",
  //   GithubURL: "https://github.com/Loopeex/space-crusade",
  //   Url: "http://games.loopeex.com/space-crusade",
  //   Description: "HTML5 game developped with PhaserJS Framework."
  //   }, {
  //   Name: "Space Invaders",
  //   GithubURL: "https://github.com/StrykerKKD/SpaceInvaders",
  //   Url: "http://strykerkkd.github.io/SpaceInvaders/",
  //   Description: "Remake of Space Invaders in require.js."
  //   }, {
  //   Name: "Super Mario Bros",
  //   GithubURL: "https://github.com/martindrapeau/backbone-game-engine",
  //   Url: "http://martindrapeau.github.io/backbone-game-engine/super-mario-bros/index.html",
  //   Description: "Super Mario Bros level one written with Backbone Game Engine."
  //   }, {
  //   Name: "Survivor",
  //   GithubURL: "https://github.com/scottschiller/SURVIVOR",
  //   Url: "http://www.schillmania.com/survivor/",
  //   Description: "Playable HTML + CSS + JavaScript remake of a space-based &quot;shoot-&apos;em-up&quot; arcade game for Atari / Commodore 64 from 1982, including a level editor and design tool."
  //   }, {
  //   Name: "zedinvaders",
  //   GithubURL: "https://github.com/salvatorecapolupo/zedinvaders",
  //   Url: "http://zedfumetto.it/zedinvaders/game.html",
  //   Description: "Game is based on our original comic ZED, seen inside &quot;zero-episode&quot; called &quot;Game Over&quot;."
  //   }, {
  //   Name: "Roguish",
  //   GithubURL: "https://github.com/CamHenlin/Roguish",
  //   Url: "http://henlin.org/roguish/",
  //   Description: "RPG/Rogue-like game created in JavaScript."
  //   }, {
  //   Name: "Room for Change",
  //   GithubURL: "https://github.com/antionio/game-off-2013",
  //   Url: "http://www.sturdyhelmetgames.com/roomforchange_html",
  //   Description: "Randomly generated action RPG."
  //   }, {
  //   Name: "BrowserQuest",
  //   GithubURL: "https://github.com/mozilla/BrowserQuest",
  //   Url: "http://browserquest.mozilla.org/",
  //   Description: "HTML5/JavaScript multiplayer game experiment."
  //   }, {
  //   Name: "Command &amp; Conquer",
  //   GithubURL: "https://github.com/adityaravishankar/command-and-conquer",
  //   Url: "http://www.adityaravishankar.com/projects/games/command-and-conquer/",
  //   Description: "Clone of the popular RTS."
  //   }, {
  //   Name: "Freeciv-web",
  //   GithubURL: "https://github.com/freeciv/freeciv-web",
  //   Url: "http://play.freeciv.org/",
  //   Description: "An turn-based strategy game implemented in HTML5."
  //   }, {
  //   Name: "StarCraft",
  //   GithubURL: "https://github.com/gloomyson/StarCraft",
  //   Url: "http://gloomyson.github.io/StarCraft/",
  //   Description: "Classic RTS StarCraft BroodWar using HTML5."
  //   }, {
  //   Name: "Tower Defense",
  //   GithubURL: "https://github.com/Casmo/tower-defense",
  //   Url: "http://www.fellicht.nl/games/tower-defense/",
  //   Description: "3D Tower Defense build with Three.js in HTML5."
  //   }, {
  //   Name: "HexGL",
  //   GithubURL: "https://github.com/BKcore/HexGL",
  //   Url: "http://hexgl.bkcore.com/",
  //   Description: "Futuristic HTML5 racing game by Thibaut Despoulain using HTML5, Javascript and WebGL."
  //   }, {
  //   Name: "Trigger Rally Online Edition",
  //   GithubURL: "https://github.com/CodeArtemis/TriggerRally",
  //   Url: "https://triggerrally.com/",
  //   Description: "Fast arcade rally racing."
  //   }, {
  //   Name: "3d.city",
  //   GithubURL: "https://github.com/lo-th/3d.city",
  //   Url: "http://lo-th.github.io/3d.city/index.html",
  //   Description: "3d city builder game."
  //   }, {
  //   Name: "Blk Game",
  //   GithubURL: "https://github.com/morozd/blk-game",
  //   Url: "http://benvanik.github.io/blk-game/",
  //   Description: "Multiplayer Javascript/WebGL voxel world game demo."
  //   }, {
  //   Name: "0hh0",
  //   GithubURL: "https://github.com/Q42/0hn0",
  //   Url: "http://0hh0.com",
  //   Description: "Companion game to 0hh1 by Q42."
  //   }, {
  //   Name: "0hh1",
  //   GithubURL: "https://github.com/Q42/0hh1",
  //   Url: "http://0hh1.com",
  //   Description: "Lovely little logic game by Q42."
  //   }, {
  //   Name: "2048",
  //   GithubURL: "https://github.com/gabrielecirulli/2048",
  //   Url: "http://gabrielecirulli.github.io/2048/",
  //   Description: "Sliding addition game"
  //   }, {
  //   Name: "A Dark Room",
  //   GithubURL: "https://github.com/Continuities/adarkroom",
  //   Url: "http://adarkroom.doublespeakgames.com/",
  //   Description: "Minimalist Text Adventure game written in JavaScript."
  //   }, {
  //   Name: "Astry",
  //   GithubURL: "https://github.com/wwwtyro/Astray",
  //   Url: "http://wwwtyro.github.io/Astray/",
  //   Description: "WebGL maze game built with Three.js and Box2dWeb."
  //   }, {
  //   Name: "Beatrix",
  //   GithubURL: "https://github.com/cxong/Beatrix",
  //   Url: "http://gamejolt.com/games/puzzle/beatrix/27454/",
  //   Description: "Music game where you arrange the drums to catch the beats and play the right rhythm."
  //   }, {
  //   Name: "BitBot",
  //   GithubURL: "https://github.com/recardona/BitBot",
  //   Url: "http://recardona.github.io/BitBot/",
  //   Description: "HTML/JS game where you control a bot, which must sense, plan, and act."
  //   }, {
  //   Name: "Blockrain.js",
  //   GithubURL: "https://github.com/Aerolab/blockrain.js",
  //   Url: "http://aerolab.github.io/blockrain.js/",
  //   Description: "Embed &amp; play the classic game on your site. Simple as that."
  //   }, {
  //   Name: "Branching Out",
  //   GithubURL: "https://github.com/thehen/game-off-2012",
  //   Url: "http://henryhoffman.com/branchingout/",
  //   Description: "Minimalist game about leaving home."
  //   }, {
  //   Name: "Clone Man",
  //   GithubURL: "https://github.com/adhicl/game-off-2012",
  //   Url: "http://www.kongregate.com/games/Sorobaid/clone-man",
  //   Description: "Puzzle, memory, retro game with simple graphics."
  //   }, {
  //   Name: "cube-composer",
  //   GithubURL: "https://github.com/sharkdp/cube-composer",
  //   Url: "http://david-peter.de/cube-composer",
  //   Description: "A puzzle game inspired by functional programming."
  //   }, {
  //   Name: "Drunken Viking",
  //   GithubURL: "https://github.com/cxong/DrunkenViking",
  //   Url: "http://congusbongus.itch.io/drunken-viking",
  //   Description: "Retrace your drunken rampage in reverse time."
  //   }, {
  //   Name: "Ending",
  //   GithubURL: "http://robotacid.com/flash/ending",
  //   Url: "http://robotacid.com/flash/ending/",
  //   Description: "Roguelike puzzle game."
  //   }, {
  //   Name: "For King",
  //   GithubURL: "https://github.com/AD1337/ForKingGame",
  //   Url: "http://www.newgrounds.com/dump/item/1cc54f046fa51768d8169e65121b0af0",
  //   Description: "Puzzle platformer game about a king in search for his lost crown."
  //   }, {
  //   Name: "Genetic Drift",
  //   GithubURL: "https://github.com/DancingBanana/genetic-drift",
  //   Url: "http://www.genetic-drift.com/",
  //   Description: "Victor, an annoyed janitor dealing with a lot of annoyed clones and the problems that inevitably arise from genetic duplication. Will he make it home to feed his faithful pet companion?."
  //   }, {
  //   Name: "Hextris",
  //   GithubURL: "https://github.com/Hextris/hextris",
  //   Url: "http://hextris.io/",
  //   Description: "Addictive puzzle game inspired by Tetris."
  //   }, {
  //   Name: "Infectors",
  //   GithubURL: "https://github.com/satanas/infectors",
  //   Url: "http://satanas.github.io/infectors/",
  //   Description: "Sokoban-like puzzle game developed with Phaser."
  //   }, {
  //   Name: "Lost! Beneath the Surface",
  //   GithubURL: "https://github.com/gamedolphin/Lost-Beneath-The-Surface",
  //   Url: "http://gamedolph.in/sample-page/lost-beneath-the-surface/",
  //   Description: "You&apos;re a firefly lost in the dark, beneath the surface and must find a way out of the mazes created by the horrors in the dark."
  //   }, {
  //   Name: "Maze 3D",
  //   GithubURL: "https://github.com/demonixis/Maze3D",
  //   Url: "http://demonixis.github.io/Maze3D/",
  //   Description: "A 3D maze game."
  //   }, {
  //   Name: "Monkey Rally",
  //   GithubURL: "https://github.com/antila/ludum-dare-28",
  //   Url: "http://antila.github.io/ludum-dare-28/",
  //   Description: "JavaScript game created for the Ludum Dare #28 jam."
  //   }, {
  //   Name: "Ned Et Les Maki",
  //   GithubURL: "https://github.com/devnewton/nedetlesmaki",
  //   Url: "http://play.bci.im/nedetlesmaki/",
  //   Description: "Puzzle game with isometric 3D graphics inspired by Sokoban."
  //   }, {
  //   Name: "Orbium",
  //   GithubURL: "https://github.com/bni/orbium",
  //   Url: "http://jsway.se/m/",
  //   Description: "Modern version of the 90&apos;s game Log!cal."
  //   }, {
  //   Name: "Parity",
  //   GithubURL: "https://github.com/abejfehr/parity",
  //   Description: "A numbers puzzle game."
  //   }, {
  //   Name: "Pond",
  //   GithubURL: "https://github.com/Zolmeister/pond",
  //   Description: "A narrow fellow in the Pond."
  //   }, {
  //   Name: "Pop Pop Win",
  //   GithubURL: "https://github.com/dart-lang/pop-pop-win",
  //   Description: "Implementation of Minesweeper in Dart."
  //   }, {
  //   Name: "Prism",
  //   GithubURL: "https://github.com/Zolmeister/prism",
  //   Description: "Match all the colors."
  //   }, {
  //   Name: "Push and Fork",
  //   GithubURL: "https://github.com/Octocarina/game-off-2012",
  //   Description: "Puzzle game in which you carry a fork, push blocks, and go back in time.."
  //   }, {
  //   Name: "Sliding Puzzle",
  //   GithubURL: "https://github.com/gamedolphin/sliding_puzzle",
  //   Url: "http://gamedolph.in/sample-page/sliding-puzzle/",
  //   Description: "Sliding blocks puzzle game."
  //   }, {
  //   Name: "Swap",
  //   GithubURL: "https://github.com/nmoroze/swap",
  //   Url: "http://nmoroze.github.io/swap/",
  //   Description: "New(award winning) take on the classic tile-based puzzle game, where you change which character you&apos;re controlling to reach your goal."
  //   }, {
  //   Name: "TransCube",
  //   GithubURL: "https://github.com/jeroenverfallie/ggo13-transcube",
  //   Url: "http://code.jeroenverfallie.be/ggo13-transcube/",
  //   Description: "2d puzzle platformer based on the concept of transforming into different &quot;blocks&quot;, with their unique properties, and making you way to the end of the level with the provided transformations."
  //   }, {
  //   Name: "untrusted",
  //   GithubURL: "https://github.com/AlexNisnevich/untrusted",
  //   Url: "http://alex.nisnevich.com/untrusted/",
  //   Description: "Meta-JavaScript adventure game by Alex Nisnevich and Greg Shuflin."
  //   }, {
  //   Name: "Matching Pairs",
  //   GithubURL: "https://github.com/gamedolphin/matching-pairs",
  //   Url: "http://gamedolph.in/sample-page/matching-pairs/",
  //   Description: "Made in HTML5 using Phaser as the framework, original assets and generated music."
  //   }, {
  //   Name: "Zoko",
  //   GithubURL: "https://github.com/lulea/game-off-2012",
  //   Url: "http://lulea.github.io/game-off-2012/",
  //   Description: "3D version of Sokoban."
  //   }, {
  //   Name: "Zop",
  //   GithubURL: "https://github.com/Zolmeister/zop",
  //   Url: "https://zop.zolmeister.com/",
  //   Description: "Connect like colors."
  //   }, {
  //   Name: "Particle Clicker",
  //   GithubURL: "https://github.com/particle-clicker/particle-clicker",
  //   Description: "Addictive incremental game that teaches players the history of high energy particle physics."
  //   }, {
  //   Name: "binb",
  //   GithubURL: "https://github.com/lpinca/binb",
  //   Url: "https://binb.co",
  //   Description: "Competitive, multiplayer, realtime, guess the song game."
  //   }, {
  //   Name: "Dental Defender: Saga of the Candy Horde",
  //   GithubURL: "https://github.com/cshepp/candyjam/",
  //   Url: "http://cas002.itch.io/dental-defenders-saga-of-the-candy-horde",
  //   Description: "HTML5 shooter/tower defense game for the #CandyJam."
  //   }, {
  //   Name: "Psiral",
  //   GithubURL: "https://github.com/petarov/game-off-2013",
  //   Description: "JavaScript/HTML5 game, GitHub Game Off 2 winner."
  //   }, {
  //   Name: "CyberPong",
  //   GithubURL: "https://github.com/dreamtocode/Cyber-Pong",
  //   Url: "http://cyber-pong.bitballoon.com/",
  //   Description: "Unusual Ping Pong game, adaptable with Makey Makey Kit."
  //   }, {
  //   Name: "Squirts",
  //   GithubURL: "https://github.com/KrofDrakula/squirts",
  //   Url: "http://is.gd/squirts",
  //   Description: "Well-known indie game implemented in JavaScript."
  //   }, {
  //   Name: "The Killer",
  //   GithubURL: "https://github.com/JordanMagnuson/The-Killer",
  //   Url: "http://www.gametrekking.com/the-games/cambodia/the-killer/play-now",
  //   Description: "Flash/ActionScript3-based &quot;nongame&quot;."
  //   }, {
  //   Name: "Turkey Cooking Simulator",
  //   GithubURL: "https://github.com/fernjager/game-off-2013",
  //   Url: "http://fernjager.github.io/game-off-2013/index.html",
  //   Description: "You have been invited to craft the centerpiece of the American thanksgiving dinner, the turkey. Woo your girlfriend / boyfriend and be judged by your future in-laws! Apply your culinary expertise to impress your family."
  //   }, {
  //   Name: "Open Meridian",
  //   GithubURL: "https://github.com/OpenMeridian/Meridian59",
  //   Url: "http://openmeridian.org",
  //   Description: "The first 3D MMORPG, released in 1996 and open sourced in 2012. Forked in 2013, Actively developed."
  //   }, {
  //   Name: "Meridian 59",
  //   GithubURL: "https://github.com/Meridian59/Meridian59",
  //   Url: "http://www.meridian59.com",
  //   Description: "The first 3D MMORPG, released in 1996 and open sourced in 2012. The original codebase for Meridian 59, less frequently updated."
  //   }, {
  //   Name: "Stendhal",
  //   GithubURL: "https://github.com/arianne/stendhal",
  //   Url: "https://stendhalgame.org",
  //   Description: "a fun friendly and free 2D multiplayer online adventure game with an old school feel."
  //   }, {
  //   Name: "Elemental One",
  //   GithubURL: "https://github.com/voithos/elemental-one",
  //   Url: "http://skepsi.me/elemental-one/",
  //   Description: "Built with the Phaser HTML5 game framework."
  //   }, {
  //   Name: "Last Colony",
  //   GithubURL: "https://github.com/adityaravishankar/last-colony",
  //   Url: "http://www.adityaravishankar.com/projects/games/lastcolony/",
  //   Description: "RTS game with both a single player campaign mode as well as a multiplayer mode, created entirely in HTML5 and JavaScript."
  //   }, {
  //   Name: "FlxCollisions",
  //   GithubURL: "https://github.com/gamebytes/FlxCollisions",
  //   Url: "http://flixel.org/flxcollisions/",
  //   Description: "Simple set of 2d physics + collision demos for flixel v2.0."
  //   }]
  // $scope.games = games

});

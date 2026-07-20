const spinSE = new Audio("sounds/1.mp3");
const getSE = new Audio("sounds/2.mp3");
const completeSE =
new Audio("sounds/3.mp3");

spinSE.currentTime = 0;


const button =
document.getElementById("spinButton");

const gacha =
document.getElementById("gacha");

const newBadge =
document.getElementById("newBadge");

const resetButton =
document.getElementById("resetButton");
const rankText =
document.getElementById("rankText");

const prizes = [

{
    id:1,
    name:"猫のキーホルダー",
    image:"images/prizes/1.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:2,
    name:"猫のアクリルキーホルダー",
    image:"images/prizes/2.jpg",
    rank:"N",
    rarity:"★★",
    obtained:false
},

{
    id:3,
    name:"人間の生首",
    image:"images/prizes/3.jpg",
    rank:"N",
    rarity:"★★★",
    obtained:false
},

{
    id:4,
    name:"歯ブラシ",
    image:"images/prizes/4.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:5,
    name:"タピオカ",
    image:"images/prizes/5.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:6,
    name:"抹茶タピオカ",
    image:"images/prizes/6.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:7,
    name:"革のストラップ",
    image:"images/prizes/7.jpg",
    rank:"N",
    rarity:"★★",
    obtained:false
},

{
    id:8,
    name:"スーパーボール",
    image:"images/prizes/8.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:9,
    name:"ポケットティッシュ",
    image:"images/prizes/9.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:10,
    name:"ワイヤレスイヤホン",
    image:"images/prizes/10.jpg",
    rank:"N",
    rarity:"★★★",
    obtained:false
},

{
    id:11,
    name:"ごみ",
    image:"images/prizes/11.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:12,
    name:"ガチャガチャ",
    image:"images/prizes/12.jpg",
    rank:"N",
    rarity:"★★★",
    obtained:false
},

{
    id:13,
    name:"くまのぬいぐるみ",
    image:"images/prizes/13.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:14,
    name:"オサレなキーホルダー",
    image:"images/prizes/14.jpg",
    rank:"N",
    rarity:"★★",
    obtained:false
},

{
    id:15,
    name:"栗",
    image:"images/prizes/15.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:16,
    name:"ぷよぷよ玉",
    image:"images/prizes/16.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:17,
    name:"スノードーム",
    image:"images/prizes/17.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:18,
    name:"溶岩のスノードーム",
    image:"images/prizes/18.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:19,
    name:"犬のスクイーズ",
    image:"images/prizes/19.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:20,
    name:"謎のサプリ",
    image:"images/prizes/20.jpg",
    rank:"N",
    rarity:"★★★",
    obtained:false
},

{
    id:21,
    name:"ドーナツ",
    image:"images/prizes/21.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:22,
    name:"ただのひも",
    image:"images/prizes/22.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:23,
    name:"きゅうり",
    image:"images/prizes/23.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:24,
    name:"おもちゃの宝石",
    image:"images/prizes/24.jpg",
    rank:"N",
    rarity:"★★",
    obtained:false
},

{
    id:25,
    name:"ポテト",
    image:"images/prizes/25.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:26,
    name:"へんなの",
    image:"images/prizes/26.jpg",
    rank:"N",
    rarity:"★★",
    obtained:false
},

{
    id:27,
    name:"小豆",
    image:"images/prizes/27.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:28,
    name:"ジュース",
    image:"images/prizes/28.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:29,
    name:"ブルーチーズ",
    image:"images/prizes/29.jpg",
    rank:"N",
    rarity:"★★",
    obtained:false
},

{
    id:30,
    name:"指輪",
    image:"images/prizes/30.jpg",
    rank:"N",
    rarity:"★★★",
    obtained:false
},


{
    id:31,
    name:"ローション",
    image:"images/prizes/31.jpg",
    rank:"N",
    rarity:"★★★",
    obtained:false
},

{
    id:32,
    name:"ベル",
    image:"images/prizes/32.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:33,
    name:"ロロアたんのねんどろいど",
    image:"images/prizes/33.jpg",
    rank:"N",
    rarity:"★★★",
    obtained:false
},

{
    id:34,
    name:"マウス",
    image:"images/prizes/34.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:35,
    name:"へんなキーホルダー",
    image:"images/prizes/35.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:36,
    name:"毛玉",
    image:"images/prizes/36.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:37,
    name:"猫のフィギュア",
    image:"images/prizes/37.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:38,
    name:"リモコン",
    image:"images/prizes/38.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:39,
    name:"なんかのふた",
    image:"images/prizes/39.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:40,
    name:"クリップ",
    image:"images/prizes/40.jpg",
    rank:"N",
    rarity:"★",
    obtained:false
},

{
    id:41,
    name:"ニンテンドースイッチ2",
    image:"images/prizes/41.jpg",
    rank:"R",
    rarity:"★★★★",
    obtained:false
},

{
    id:42,
    name:"どこでもドア",
    image:"images/prizes/42.jpg",
    rank:"R",
    rarity:"★★★★",
    obtained:false
},

{
    id:43,
    name:"巨大グミ",
    image:"images/prizes/43.jpg",
    rank:"R",
    rarity:"★★★★",
    obtained:false
},

{
    id:44,
    name:"白い粉",
    image:"images/prizes/44.jpg",
    rank:"R",
    rarity:"★★★★",
    obtained:false
},

{
    id:45,
    name:"ティーチくん",
    image:"images/prizes/45.jpg",
    rank:"R",
    rarity:"★★★★",
    obtained:false
},

{
    id:46,
    name:"モノホンのダイヤモンド",
    image:"images/prizes/46.jpg",
    rank:"R",
    rarity:"★★★★",
    obtained:false
},

{
    id:47,
    name:"鍵",
    image:"images/prizes/47.jpg",
    rank:"R",
    rarity:"★★★★",
    obtained:false
},

{
    id:48,
    name:"大谷翔平のサイン",
    image:"images/prizes/48.jpg",
    rank:"S",
    rarity:"★★★★★",
    obtained:false
},

{
    id:49,
    name:"ブラックホール",
    image:"images/prizes/49.jpg",
    rank:"S",
    rarity:"★★★★★",
    obtained:false
},

{
    id:50,
    name:"権力",
    image:"images/prizes/50.jpg",
    rank:"S",
    rarity:"★★★★★",
    obtained:false
},
];
let completed = false;

const prizeImage =
document.getElementById("prizeImage");

const prizeName =
document.getElementById("prizeName");

const resultPanel =
document.getElementById("resultPanel");


const closeButton =
document.getElementById("closeButton");

const collectionButton =
document.getElementById("collectionButton");

const collectionPanel =
document.getElementById("collectionPanel");

const collectionClose =
document.getElementById("collectionClose");

const collectionList =
document.getElementById("collectionList");

const completeRate =
document.getElementById("completeRate");

const completeMessage =
document.getElementById("completeMessage");


button.onclick = function(){

    spinSE.currentTime = 0;
    spinSE.play();

    // ボタンを押せなくする
    button.disabled = true;

    gacha.classList.add("shake");

    const random = Math.random();

let rank;

if(random < 0.80){

    rank = "N";

}
else if(random < 0.97){

    rank = "R";

}
else{

    rank = "S";

}

const list =
prizes.filter(
    prize => prize.rank === rank
);

const prize =
list[
    Math.floor(
        Math.random()*list.length
    )
];

setTimeout(function(){

    const wasObtained = prize.obtained;


prize.obtained = true;

saveGame();
updateCollection();

if(!wasObtained){

    setTimeout(function(){

        newBadge.style.display = "block";

    },500);

}else{

    newBadge.style.display = "none";

}

const isComplete =
prizes.every(prize => prize.obtained);

if(isComplete && !completed){

    completed = true;

    completeSE.currentTime = 0;
    completeSE.play();

    completeMessage.style.display =
    "block";

    completeMessage.innerHTML =

    `
    コンプリートおめでとう！！
    `;

}else{

    getSE.currentTime = 0;
    getSE.play();

    completeMessage.style.display =
    "none";

}

  
  

prizeImage.src = prize.image;

prizeName.textContent =
prize.name + " をゲットした！";

if(prize.rank == "N"){

    rankText.style.display =
    "none";

}
else if(prize.rank == "R"){

    rankText.style.display =
    "block";

    rankText.textContent =
    "レア！!";

    rankText.style.color =
    "#00A2FF";

}
else{

    rankText.style.display =
    "block";

    rankText.textContent =
    "シークレット！！";

    rankText.style.color =
    "#FFD700";

}


    resultPanel.style.top = "50%";

},2000);

    setTimeout(function(){

        gacha.classList.remove("shake");

    },2000);

}

closeButton.onclick = function(){

    completeMessage.style.display =
"none";

    newBadge.style.display = "none";

    rankText.style.display = "none";

    resultPanel.style.top = "-1000px";

    // ボタンをもう一度押せるようにする
    button.disabled = false;

}

collectionButton.onclick = function(){

    updateCollection();

    collectionPanel.style.top = "50px";

}
collectionClose.onclick = function(){

   collectionPanel.style.top = "-750px";
}

resetButton.onclick = function(){

    const result = confirm(
        "本当にコレクションをリセットしますか？"
    );

    if(!result){

        return;

    }

    localStorage.removeItem(
        "gachaSave"
    );

    for(const prize of prizes){

        prize.obtained = false;

    }

    completed = false;

    newBadge.style.display = "none";

    updateCollection();

    alert(
        "コレクションをリセットしました"
    );

}

function updateCollection(){

    collectionList.innerHTML = "";

    let obtainedCount = 0;

    for(const prize of prizes){

        const item =
        document.createElement("div");

        item.className =
        "collectionItem";

        if(prize.obtained){

            obtainedCount++;

            item.innerHTML =

            `
            <img src="${prize.image}">

            <div>

                <b>No.${String(prize.id).padStart(3,"0")}</b>

                <br>

                ${prize.name}

            </div>

            <div>

                ${prize.rarity}

            </div>
            `;

        }else{

            item.innerHTML =

            `
            <div>

                🔒 No.${String(prize.id).padStart(3,"0")}

            </div>

            <div>

                ??????

            </div>

            <div>

                ?

            </div>
            `;

        }

        collectionList.appendChild(item);

    }

    const percent =

    Math.floor(

        obtainedCount /
        prizes.length
        *100

    );

    completeRate.innerHTML =

    `
    コンプリート率

    <br><br>

    ${obtainedCount} / ${prizes.length}

    <br><br>

    ${percent}%
    `;

}


function saveGame(){

    const saveData = [];

    for(const prize of prizes){

        saveData.push(prize.obtained);

    }

    localStorage.setItem(

        "gachaSave",

        JSON.stringify(saveData)

    );

}

function loadGame(){

    const saveData =

    localStorage.getItem("gachaSave");

    if(saveData == null){

    updateCollection();

    return;

}

    const obtainedList =

    JSON.parse(saveData);

    for(

        let i = 0;

        i < prizes.length;

        i++

    ){

        prizes[i].obtained =

        obtainedList[i];

    }

    
updateCollection();
}

// ファイルの一番最後
loadGame();
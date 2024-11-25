let sound; // 音声ファイルを格納する変数

function preload() {
  // 音声ファイルをロード（ファイル名をアップロード後に適宜変更）
  sound = loadSound('demoday_kimodaru2.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 画面全体をキャンバスに設定
  background(255); // 背景色を白に設定
  
  // 再生ボタンの作成
  let playButton = createButton('再生');
  playButton.position(width / 2 - 250, height / 2 - 125); // ボタンの位置（中心に配置）
  playButton.size(500, 250); // ボタンのサイズを5倍に拡大
  playButton.style('font-size', '80px'); // ボタンの文字サイズを大きく設定
  playButton.style('font-weight', 'bold'); // 文字を太字に設定（見やすくするため）
  
  // ボタンがクリックされたときに音声を再生/停止するイベント
  playButton.mousePressed(() => {
    if (sound.isPlaying()) {
      sound.stop(); // 音声を停止
    } else {
      sound.play(); // 音声を再生
    }
  });
}

function draw() {
  // 背景の再描画（クリック後もボタンが見えるようにする）
  background(255); // 背景色を白に設定
}

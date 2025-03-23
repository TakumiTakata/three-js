import * as THREE from 'three';

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#mycanvas")
});
const width = 960;
const height = 540;
renderer.setSize(width, height);
renderer.setPixelRatio(devicePixelRatio); // デバイスピクセル比を設定（スマホのぼやけ防止）

// シーンを作成
const scene =new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(
    45, // 画角
    width / height, // アスペクト比
    1, // 描画開始距離
    10000 //描画終了距離
);

camera.position.set(0, 0, 1000); // カメラの初期位置（X座標,Y座標,Z座標）

// 形状を作成(ジオメトリ)
const geometry = new THREE.BoxGeometry(300, 300, 300) // 幅、高さ、奥行き

// 色、質感を作成(マテリアル)
const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
})

// ボックスを作成（メッシュ）
const box = new THREE.Mesh(geometry, material); // ジオメトリ,マテリアル

// シーンにメッシュを追加
scene.add(box);

// ライトを追加
const light = new THREE.DirectionalLight(0xffffff0); //平行光源
light.intesity = 2; //光の強さを2倍に
light.position.set(1, 1, 1); // ライトの方向

// シーンにライトを追加
scene.add(light);

// 描写する
tick();

function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // レンダリング
    renderer.render(scene, camera);
}

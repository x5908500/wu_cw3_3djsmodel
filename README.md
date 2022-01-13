# 3js_model contribute by Woody Wu

Make the threejs-scroll-animation-demo model changeable
reference from 
https://www.youtube.com/watch?v=Q7AOvWpIVHU
https://github.com/fireship-io/threejs-scroll-animation-demo

and make it can add custom model by reference from 
https://www.youtube.com/watch?v=ZUviQP1L9uw
https://github.com/masonprotsman/Blender_Threejs_tutorial

Simply repalace it ('./model/E.glb' )meanwhile put new one in model folder, can also change the position variables after x y z 


function loadGLTF() {
    let balloonLoader = new THREE.GLTFLoader();

      balloonLoader.load('./model/E.glb', (glb) => {
        Mesh = glb.scene;
        Mesh.scale.set(0.5,0.5,0.5);
        scene.add(Mesh);
        Mesh.position.x = 1;
        Mesh.position.y = 10;
        Mesh.position.z = 15;
      
    });
    
}


To add new models 
for example add the 5th model in this project



write definition before the function
let Mesh5;

 then copy whole function rename it to loadGLTF5 or whatever you want 


function loadGLTF5() {
    let balloonLoader = new THREE.GLTFLoader();

    balloonLoader.load('./model/E.glb', (glb) => {
        Mesh5 = glb.scene;
        Mesh5.scale.set(0.5,0.5,0.5);
        scene.add(Mesh);
        Mesh5.position.x = 1;
        Mesh5.position.y = 10;
        Mesh5.position.z = 15;
      
    });  
    
}
    


and put loadGLTF5(); after init() at buttom to load the function

example:

init();
loadGLTF5();


recomand add model in .glb format so it combine with the texture together 

simple page so css inside the index.html 

live example http://upbqb.com/3js/

To Run it  

open floder with vscode then install

vscode live server extention if you don‘t have one 

and then right click index.html choose open with live server or visit http://127.0.0.1:5500/index.html

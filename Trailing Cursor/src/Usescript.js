window.addEventListener('DOMContentLoaded',()=>{
    let coord={
        x:0,
        y:0
    }
const Trail = document.querySelectorAll('.CursorTrail')
Trail.forEach(item=> {
    item.x=0;
    item.y=0;
});

    window.addEventListener('mousemove',(e)=>{
        coord.x = e.clientX
        coord.y = e.clientY

        
    })
    function TrailEffect(){
    let X=coord.x
    let Y=coord.y
        Trail.forEach(function(item,index){
            item.style.left= X-7 + 'px'
            item.style.top= Y-7 + 'px'
        item.x = X;
        item.y = Y
        const NextTrail = Trail[index+1]||Trail[0];
        X+=(NextTrail.x - X)*0.3;
        Y+=(NextTrail.y - Y)*0.3;
    })
    requestAnimationFrame(TrailEffect)
    }
    TrailEffect();
})
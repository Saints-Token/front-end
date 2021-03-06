function draw() {
    var canvas = document.getElementById("piechart");
    var ctx = canvas.getContext("2d");
    
    var colors = ['#FFFFFF','#C59528', '#5B6065', ];
    var angles = [Math.PI * 0.4, Math.PI * 1, Math.PI * 0.6];
    var offset = 10;
    var beginAngle = 0;
    var endAngle = 0;
    var offsetX, offsetY, medianAngle;
    
    for(var i = 0; i < angles.length; i = i + 1) {
        beginAngle = endAngle;
        endAngle = endAngle + angles[i];
        medianAngle = (endAngle + beginAngle) / 2;
        offsetX = Math.cos(medianAngle) * offset;
        offsetY = Math.sin(medianAngle) * offset;
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(200 + offsetX, 200 + offsetY);
        ctx.arc(200 + offsetX, 200 + offsetY, 120, beginAngle, endAngle);
        ctx.lineTo(200 + offsetX, 200 + offsetY);
        ctx.stroke();
        ctx.fill();
    }
    }

    window.onload = draw;
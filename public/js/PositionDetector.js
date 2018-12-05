(function(){

    //detect a postion where both arms are up (go forward)
        function detectTpos(handLeftJointPoint, 
            handRightJointPoint, 
            shoulderLeftJointPoint, 
            shoulderRightJointPoint, 
            elbowLeftJointPoint, 
            elbowRightJointPoint) {
            var handLeftX = handLeftJointPoint.depthX;
            var handLeftY = handLeftJointPoint.depthY;

            var handRightY = handRightJointPoint.depthY;
            var handRightX = handRightJointPoint.depthX;

            var shoulderRightY = shoulderRightJointPoint.depthY;
            var shoulderRightX = shoulderRightJointPoint.depthX;

            var shoulderLeftY = shoulderLeftJointPoint.depthY;
            var shoulderLeftX = shoulderLeftJointPoint.depthX;

            var elbowLeftX = elbowLeftJointPoint.depthX;
            var elbowLeftY = elbowLeftJointPoint.depthY;

            var elbowRightY = elbowRightJointPoint.depthY;
            var elbowRightX = elbowRightJointPoint.depthX;

            var relativeHandLeftX = handLeftX - shoulderLeftX;
            var relativeHandLeftY = handLeftY - shoulderLeftY;

            var relativeHandRightY = handRightY - shoulderRightY;
            var relativeHandRightX = handRightX - shoulderRightX;

            var relativeElbowLeftX = elbowLeftX - shoulderLeftX;
            var relativeElbowLeftY = elbowLeftY - shoulderLeftY;

            var relativeElbowRightY = elbowRightY - shoulderRightY;
            var relativeElbowRightX = elbowRightX - shoulderRightX;

            var relativeShoulders = shoulderLeftY - shoulderRightY;
            //console.log(relativeHandRightY);
            if (Math.abs(relativeShoulders) < 0.1) {
                if ((Math.abs(relativeElbowRightY) < 0.1) && (Math.abs(relativeElbowLeftY) < 0.1) 
                    && (Math.abs(relativeHandRightY) < 0.1) && (Math.abs(relativeHandLeftY) < 0.1) 
                    && (Math.abs(relativeElbowRightX) > 0.1) && (Math.abs(relativeElbowLeftX) > 0.1) 
                    && (Math.abs(relativeHandRightX) > 0.1) && (Math.abs(relativeHandLeftX) > 0.1)) {
                    //console.log("T pos detected !!");
                    // draw semi transparent hand cicles
                    ctx.fillStyle = '#00ff00';
                    ctx.fillRect(shoulderRightJointPoint.depthX * 640, shoulderRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(shoulderLeftJointPoint.depthX * 640, shoulderLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowRightJointPoint.depthX * 640, elbowRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowLeftJointPoint.depthX * 640, elbowLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handLeftJointPoint.depthX * 640, handLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handRightJointPoint.depthX * 640, handRightJointPoint.depthY * 360, 10, 10);
                }
            }
        }

        //detect a postion where right arm is up, left arm is down (go right)
        function detectHRpos(handLeftJointPoint, 
            handRightJointPoint, 
            shoulderLeftJointPoint, 
            shoulderRightJointPoint, 
            elbowLeftJointPoint, 
            elbowRightJointPoint, 
            spineBaseJointPoint) {
            var handLeftX = handLeftJointPoint.depthX;
            var handLeftY = handLeftJointPoint.depthY;

            var handRightY = handRightJointPoint.depthY;
            var handRightX = handRightJointPoint.depthX;

            var shoulderRightY = shoulderRightJointPoint.depthY;
            var shoulderRightX = shoulderRightJointPoint.depthX;

            var shoulderLeftY = shoulderLeftJointPoint.depthY;
            var shoulderLeftX = shoulderLeftJointPoint.depthX;

            var elbowLeftX = elbowLeftJointPoint.depthX;
            var elbowLeftY = elbowLeftJointPoint.depthY;

            var elbowRightY = elbowRightJointPoint.depthY;
            var elbowRightX = elbowRightJointPoint.depthX;

            var spineBaseX = spineBaseJointPoint.depthX;
            var spineBaseY = spineBaseJointPoint.depthY;

            var relativeHandLeftX = handLeftX - shoulderLeftX;
            var relativeHandLeftY = handLeftY - shoulderLeftY;

            var relativeHandRightY = handRightY - shoulderRightY;
            var relativeHandRightX = handRightX - shoulderRightX;

            var relativeElbowLeftX = elbowLeftX - shoulderLeftX;
            var relativeElbowLeftY = elbowLeftY - shoulderLeftY;

            var relativeElbowRightY = elbowRightY - shoulderRightY;
            var relativeElbowRightX = elbowRightX - shoulderRightX;

            var relativeHandToSpine = handLeftY - spineBaseY;
            //console.log(relativeHandToSpine);

            var relativeShoulders = shoulderLeftY - shoulderRightY;
            //console.log(relativeHandRightY);
            if (Math.abs(relativeShoulders) < 0.1) {
                if ((Math.abs(relativeElbowRightY) < 0.1) && (Math.abs(relativeElbowRightX) > 0.1) 
                    && (Math.abs(relativeHandRightY) < 0.1) && (Math.abs(relativeHandRightX) > 0.1) 
                    && (Math.abs(relativeHandToSpine) < 0.05) && (Math.abs(relativeElbowLeftX) < 0.1) 
                    && (Math.abs(relativeHandLeftX) < 0.1) ) {
                    //console.log("T pos detected !!");
                    // draw semi transparent hand cicles
                    ctx.fillStyle = '#0000ff';
                    ctx.fillRect(shoulderRightJointPoint.depthX * 640, shoulderRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(shoulderLeftJointPoint.depthX * 640, shoulderLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowRightJointPoint.depthX * 640, elbowRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowLeftJointPoint.depthX * 640, elbowLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handLeftJointPoint.depthX * 640, handLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handRightJointPoint.depthX * 640, handRightJointPoint.depthY * 360, 10, 10);
                }
            }
        }

        //detect a postion where left arm is up, rigth arm is down (go left)
        function detectHLpos(handLeftJointPoint, 
            handRightJointPoint, 
            shoulderLeftJointPoint, 
            shoulderRightJointPoint, 
            elbowLeftJointPoint, 
            elbowRightJointPoint, 
            spineBaseJointPoint) {
            var handLeftX = handLeftJointPoint.depthX;
            var handLeftY = handLeftJointPoint.depthY;

            var handRightY = handRightJointPoint.depthY;
            var handRightX = handRightJointPoint.depthX;

            var shoulderRightY = shoulderRightJointPoint.depthY;
            var shoulderRightX = shoulderRightJointPoint.depthX;

            var shoulderLeftY = shoulderLeftJointPoint.depthY;
            var shoulderLeftX = shoulderLeftJointPoint.depthX;

            var elbowLeftX = elbowLeftJointPoint.depthX;
            var elbowLeftY = elbowLeftJointPoint.depthY;

            var elbowRightY = elbowRightJointPoint.depthY;
            var elbowRightX = elbowRightJointPoint.depthX;

            var spineBaseX = spineBaseJointPoint.depthX;
            var spineBaseY = spineBaseJointPoint.depthY;

            var relativeHandLeftX = handLeftX - shoulderLeftX;
            var relativeHandLeftY = handLeftY - shoulderLeftY;

            var relativeHandRightY = handRightY - shoulderRightY;
            var relativeHandRightX = handRightX - shoulderRightX;

            var relativeElbowLeftX = elbowLeftX - shoulderLeftX;
            var relativeElbowLeftY = elbowLeftY - shoulderLeftY;

            var relativeElbowRightY = elbowRightY - shoulderRightY;
            var relativeElbowRightX = elbowRightX - shoulderRightX;

            var relativeHandToSpine = handRightY - spineBaseY;
            //console.log(relativeHandToSpine);

            var relativeShoulders = shoulderLeftY - shoulderRightY;
            //console.log(relativeHandRightY);
            if (Math.abs(relativeShoulders) < 0.1) {
                if ((Math.abs(relativeElbowLeftY) < 0.1) && (Math.abs(relativeElbowLeftX) > 0.1) 
                    && (Math.abs(relativeHandLeftY) < 0.1) && (Math.abs(relativeHandLeftX) > 0.1) 
                    && (Math.abs(relativeHandToSpine) < 0.05) && (Math.abs(relativeElbowRightX) < 0.1) 
                    && (Math.abs(relativeHandRightX) < 0.1) ) {
                    //console.log("T pos detected !!");
                    // draw semi transparent hand cicles
                    ctx.fillStyle = '#00ffff';
                    ctx.fillRect(shoulderRightJointPoint.depthX * 640, shoulderRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(shoulderLeftJointPoint.depthX * 640, shoulderLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowRightJointPoint.depthX * 640, elbowRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowLeftJointPoint.depthX * 640, elbowLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handLeftJointPoint.depthX * 640, handLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handRightJointPoint.depthX * 640, handRightJointPoint.depthY * 360, 10, 10);
                }
            }
        }

         //detect a postion where both arms are up, hand at head level (stop)
        function detectStopPos(handLeftJointPoint, 
            handRightJointPoint, 
            shoulderLeftJointPoint, 
            shoulderRightJointPoint, 
            elbowLeftJointPoint, 
            elbowRightJointPoint,
            headJointPoint) {
            var handLeftX = handLeftJointPoint.depthX;
            var handLeftY = handLeftJointPoint.depthY;

            var handRightY = handRightJointPoint.depthY;
            var handRightX = handRightJointPoint.depthX;

            var shoulderRightY = shoulderRightJointPoint.depthY;
            var shoulderRightX = shoulderRightJointPoint.depthX;

            var shoulderLeftY = shoulderLeftJointPoint.depthY;
            var shoulderLeftX = shoulderLeftJointPoint.depthX;

            var elbowLeftX = elbowLeftJointPoint.depthX;
            var elbowLeftY = elbowLeftJointPoint.depthY;

            var elbowRightY = elbowRightJointPoint.depthY;
            var elbowRightX = elbowRightJointPoint.depthX;

            var headX = headJointPoint.depthX;
            var headY = headJointPoint.depthY;

            var relativeHandLeftX = handLeftX - elbowLeftX;
            //var relativeHandLeftY = handLeftY - shoulderLeftY;

            //var relativeHandRightY = handRightY - shoulderRightY;
            var relativeHandRightX = handRightX - elbowRightX;

            var relativeElbowLeftX = elbowLeftX - shoulderLeftX;
            var relativeElbowLeftY = elbowLeftY - shoulderLeftY;

            var relativeElbowRightY = elbowRightY - shoulderRightY;
            var relativeElbowRightX = elbowRightX - shoulderRightX;

            var relativeHandRightToHead = handRightY - headY;
            var relativeHandLeftToHead = handLeftY - headY;
            //console.log(relativeHandToSpine);

            var relativeShoulders = shoulderLeftY - shoulderRightY;
            //console.log(relativeHandRightY);
            if (Math.abs(relativeShoulders) < 0.1) {
                if ((Math.abs(relativeElbowLeftY) < 0.1) && (Math.abs(relativeElbowRightY) < 0.1) 
                    && (Math.abs(relativeElbowLeftX) > 0.1) && (Math.abs(relativeElbowRightX) > 0.1) 
                    && (Math.abs(relativeHandLeftX) < 0.1) && (Math.abs(relativeHandRightX) < 0.1) 
                    && (Math.abs(relativeHandRightToHead) < 0.1) && (Math.abs(relativeHandLeftToHead) < 0.1)) {
                    console.log("Stop pos detected !!");
                    // draw semi transparent hand cicles
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(shoulderRightJointPoint.depthX * 640, shoulderRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(shoulderLeftJointPoint.depthX * 640, shoulderLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowRightJointPoint.depthX * 640, elbowRightJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(elbowLeftJointPoint.depthX * 640, elbowLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handLeftJointPoint.depthX * 640, handLeftJointPoint.depthY * 360, 10, 10);
                    ctx.fillRect(handRightJointPoint.depthX * 640, handRightJointPoint.depthY * 360, 10, 10);
                }
            }
        }


})();
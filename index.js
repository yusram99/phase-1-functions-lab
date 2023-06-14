// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) *264;
    }
    
    function distanceTravelledInFeet(starBlock, endBlock) {
        return Math.abs(starBlock - endBlock) *264;
        }
       
        
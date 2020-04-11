function evenify(nums){
    for (let i = 0; i < nums.length; i++) {
        var element = nums[i];
        if(element%2==0){
            console.log(element, ':is even number');
        }
        else{
            console.log(element, ':is odd number');
        }
        
    }
   
    
}




nums = [12,22,32,31,23]
evenify(nums);

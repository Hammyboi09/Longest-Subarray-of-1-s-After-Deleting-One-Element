/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestSubarray = function(nums) {
    let count = 0;
    let array = []
    for(let i = 0;i<nums.length;i++){
        if(nums[i]==1){
            count++
        }else {
            array.push(count)
            count = 0
        }
    }
    if(count>0){
        array.push(count)
    }
    if(nums.length === count) return count-1

    let result = array[0]+array[1]
    for(let j=1;j<array.length-1;j++){
        if(array[j]+array[j+1] > result){
            result = array[j]+array[j+1] 
        }
    }

    return result
};
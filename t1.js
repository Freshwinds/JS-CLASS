/**
 * Created by freshwinds on 17-7-17.
 */
function get_re(test){
    var test_array=new Array();
    var temp_array=new Array();
    for(var i=1;i*i<=test;i++){
        if(test%i==0)
        {
            test_array.push(i);
            temp_array.push(test/i);
        }
    }
    var len1=test_array.length;
    var len2=temp_array.length;
    if(test_array[len1-1]===temp_array[len2-1]) {
        temp_array.pop();
    }
    temp_array.reverse();
    return test_array.concat(temp_array);
}

console.log(get_re(25));
function flatten(input) {
  
  let res = []
  
  let util = (val,pat) =>{

    let temp = []
    
    for(let [key,value] of Object.entries(val))
    {
      let temp = []
      
      if(typeof value=='number')
      {
        if(pat.length==0)
          temp.push(key)
        else
          temp.push(pat+"."+key)
        temp.push(value)
        res.push(temp)
      }
      else if(Array.isArray(value)){
        
        for(let i of value){
          
          if(typeof i == 'object'){
            //{'h': 6}
            util(i,""+key)
            continue
          }
          
          let temp = []
          if(pat.length==0){
            temp.push(key)
          }
          else{
            temp.push(pat+"."+key)
          }
          temp.push(i)
          res.push(temp)
          
        }

      }
      else{
        
        for(let [okey,ovalue] of Object.entries(value))
        {

          if(typeof ovalue=='number'){
            // {
            //     'd': 4,
            //     'e': 5
            // }
            util(value,""+key)
            break
          }
          else{
            // console.log('final chk',ovalue,okey)
            util(ovalue,""+okey)
          }
          
        }
      }
      
    }
    
  }
  
  util(input,"")
  console.log('res',res)
  return res
  

}

module.exports = flatten;

// {
//   a:0,
//   b:[1,2,3],
//   g:{
//     h:[]
//   }
  
// }

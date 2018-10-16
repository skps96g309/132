$(function(){
        csmapi.set_endpoint ('http://140.113.199.200:9999');
        var profile = { 
            'dm_name': 'xiao',    
            'idf_list':[xiao_IDF],
            'odf_list':[xiao_ODF],    
        };  
    
        function xiao_IDF(){
            return Math.random();
        }   

        function xiao_ODF(data){
            if(data[2]<0)
                $('.ODF_value')[0].innerText=data;
            else
                $('.ODF_value')[0].innerText="";
        }   
    
/*******************************************************************/    
        function ida_init(){}
        var ida = { 
            'ida_init': ida_init,
        };  
        dai(profile,ida);    
});

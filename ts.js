function  prints(){
	setTimeout("prints()",1000 );
	var iDays = "2021-11-27"
	var date1= '2021/11/27 21:10:00';  //��ʼʱ��
       var date2 = new Date();    //����ʱ��
       var date3 = date2.getTime() - new Date(date1).getTime();   //ʱ���ĺ�����     
 
       //------------------------------
 
       //������������
       var days=Math.floor(date3/(24*3600*1000))
 
       //�����Сʱ��
 
       var leave1=date2%(24*3600*1000)    //����������ʣ��ĺ�����
       var hours=Math.floor(leave1/(3600*1000))
       //������������
       // var leave2=leave1%(3600*1000)        //����Сʱ����ʣ��ĺ�����
	   var leave2=date2%(3600*1000)
       var minutes=Math.floor(leave2/(60*1000))
       //�����������
       // var leave3=leave2%(60*1000)      //�����������ʣ��ĺ�����
	   var leave3=date2%(60*1000) 
       var seconds=Math.round(leave3/1000)
	   var back = days+"\u5929"+hours+"\u5c0f\u65f6"+minutes+"\u5206\u949f"+seconds+"\u79d2"
	   var test = back;
	   // var  div1 = document.getElementById("d2");
	   // div1	.write(test+back);
	   for(var i = 0 ;i<test.length-1;i++){
		   console.log("i");
		
	     document.getElementById("d2").innerHTML=back;
}
	   
};

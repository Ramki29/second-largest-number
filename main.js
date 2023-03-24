var a=[17,-3,5,12,17,10,-11];
var large=a[0];
var c=0;
for(i=1; i<a.length; i++)
	{
	if(large<a[i])
		{
		large=a[i];
		}
	}	
	console.log(large);	

for(j=0; j<a.length; j++)
	{
	if(c<a[j]&&a[j]!=large)
		{	
			c=a[j];
		}	
	}
console.log(c);	


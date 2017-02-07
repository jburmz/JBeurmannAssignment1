//Toggle hero image on click//

function CycleHero()
{
	var heroImage = document.getElementById("hero");
	
	var druid = document.getElementsByClassName("druid");
	var warrior = document.getElementsByClassName("warrior");
	var mage = document.getElementsByClassName("mage");
	var priest = document.getElementsByClassName("priest");
	
	if (druid.length > 0)
	{
		heroImage.src = "images/warrior.png";
		druid[0].className = "warrior";
	}
	
	else if (warrior.length > 0)
	{
		heroImage.src = "images/mage.png";
		warrior[0].className = "mage";
	}
	
	else if (mage.length > 0)
	{
		heroImage.src = "images/priest.png";
		mage[0].className = "priest";
	}
	else if (priest.length > 0)
	{
		heroImage.src = "images/druid.png";
		priest[0].className = "druid";
	}
	
}


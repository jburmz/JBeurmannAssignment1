//Display Druid hero icon by default
window.onload = function()
{
	var heroIcon = document.getElementsByClassName("druid")[0];
	//Add click EventListener to Cycle Hero icon
	heroIcon.addEventListener("click", CycleHero);
}

//Cycle the hero image displayed when it is clicked on
function CycleHero()
{
	var druid = document.getElementsByClassName("druid");
	var warrior = document.getElementsByClassName("warrior");
	var mage = document.getElementsByClassName("mage");
	var priest = document.getElementsByClassName("priest");
	
	if (druid.length > 0)
	{
		druid[0].className = "warrior";
	}
	
	else if (warrior.length > 0)
	{
		warrior[0].className = "mage";
	}
	
	else if (mage.length > 0)
	{
		mage[0].className = "priest";
	}
	else if (priest.length > 0)
	{
		priest[0].className = "druid";
	}
	
}

	
	
const expandedForm = (num) =>
	num
		.toString()
		.split("")
		.reverse()
		.map((a, i) => a * Math.pow(10, i))
		.filter((a) => a > 0)
		.reverse()
		.join(" + ");

expandedForm(30407090);
expandedForm(10);
expandedForm(245);
expandedForm(90767);
expandedForm(3482994);

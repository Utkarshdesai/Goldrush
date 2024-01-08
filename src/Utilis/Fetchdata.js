
export const exerciseoptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bbdfca9a2mshb0129cc38791da5p13079ejsnb2cf92492b23',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeoptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bbdfca9a2mshb0129cc38791da5p13079ejsnb2cf92492b23',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
}


  export const fetchexercise  = async (url ,options ) => {
    const res =  await fetch (url ,options);
    const data = await res.json();
    return data;
  } 

 
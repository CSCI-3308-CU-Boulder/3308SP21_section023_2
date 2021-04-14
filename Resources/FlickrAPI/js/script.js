 //Name: Brenden Garcia
 // Function: Results()
 // Inputs: numSearch - Number of Searches, wordSearch - The Search Word
 // Purpose: Results will take in numSearch and wordSearch. Then use a for loop to iterate numSearch amount of times,
 // create our bootstrap card types and populate them with information that we are extracting from Flickr via our API request.
 // Functionality: Similar to imlpementation from our NYTimes API, in order to create rows of four we are using a var card_row_count,
 // that will create a new row once we have reached four cards in one row.

function results(){

    var itemRow;
    var wordSearch = document.getElementById("searchTxt").value;
    var numSearch = parseInt(document.getElementById("number").value);
    var ele = document.getElementById("fill");
    var api_key = 'e1974f80c53b6718345a5e8c4f370487';
    var card_row_count = 0;


    $(document).ready(function() {
        var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key+'&tags='+wordSearch+'&per+page='+numSearch+'&format=json&nojsoncallback=1&extras=url_q';
        $.ajax({
            url:url,
            dataType:'json'
        })
            .then(function(data) {
                console.log(data)
                for(var i = 0; i < numSearch; i++) {
                    if(card_row_count == 0) {
                        itemRow = document.createElement("div");
                        itemRow.setAttribute('class', 'row justify-content-md-center');
                    }

                    var title = document.createTextNode(data.photos.photo[i].title);

                    var columns = document.createElement("div");
                    columns.setAttribute('class','col-sm-2');

                    var cbody = document.createElement("div");
                    cbody.setAttribute('class', 'card-body');

                    var card = document.createElement("div");
                    card.setAttribute('class', 'card');

                    var img = document.createElement("img");

                    img.setAttribute('class', 'card-img-top');
                    img.setAttribute('src', data.photos.photo[i].url_q);
                    card.appendChild(img);
                    cbody.appendChild(title);
                    card.appendChild(cbody);
                    columns.appendChild(card);
                    itemRow.appendChild(columns);
                    card_row_count++;

                    if(card_row_count == 4){
                        ele.appendChild(itemRow);
                        ele.appendChild(document.createElement("br"));
                        card_row_count = 0;
      }
     }
   })
 })
}

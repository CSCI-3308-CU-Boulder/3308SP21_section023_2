function createCard(userID, url, fullName, birthDate , gender, bio)
{
  // Get all the info submitted by the modal form and create a card with all those attributes
  var container = document.getElementById('item_card_holder');
  var newCard = document.createElement('div');
  newCard.classList = 'card';
  var item_id = itemID;
  var card_id = item_id;
  var name = fullName;
  var img = url;
  var age = birthDate;
  var bio = bio;
  var gender = gender;
  var tag_content = ``;
  if(item_tags.length != 0)
  {
    tag_content += `
    <br><br>`;
    for(var i = 0; i < item_tags.length; i++)
    {
      tag_content += `
      <span class="label ${item_tags[i]}">${item_tags[i]}</span>`;
    }
  }

  // May need to add the <div class="col-auto mb-3"> to keep it in format
  var content = `
  <div id="${userID}" class="card" style="width: 20rem;">
    <img src="${img}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text"><b>Quantity: </b>${location}</p>
      <p class="card-text">${gender}</p>
      <p class="card-text">${age}</p>
      <p class="card-text">${email}</p>
      <input type="button" data-id="${card_id}" class="open-delete_item btn btn-outline-danger" data-toggle="modal" data-target="#delete_item" value="Remove Item"/>
      ${tag_content}
    </div>
  </div>
  `;

  container.innerHTML += content;
}

// Handler that deals with remove item calls
$(document).on("click", ".open-delete_item", function () {
     itemToDelete = $(this).data('id');
});

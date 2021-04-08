function readURL(input, target)
{
    document.getElementById(target).style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById(target).src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

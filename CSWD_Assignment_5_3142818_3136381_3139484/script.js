/*Author's Page */
const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide()
{
    counter+=1;
    slidefun(counter);
}
function plusSlides(n)
{
    counter+=n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n)
{
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer()
{
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n)
{
    let i;
    for(i = 0; i < myslide.length; i++)
    {
        myslide[i].style.display = "none";
    }
    for(i = 0; i < dot.length; i++)
    {
        dot[i].classList.remove('active');
    }
    if(n > myslide.length)
    {
        counter = 1;
    }
    if(n < 1)
    {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}

/*End of Author page */

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav_links ul').classList.toggle('show');
});

/*Start of Contact page*/
function validateAndPreview() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Display the preview section
        document.getElementById('previewName').innerText = name;
        document.getElementById('previewEmail').innerText = email;
        document.getElementById('previewMessage').innerText = message;
        document.getElementById('messagePreview').style.display = 'block';
        document.getElementById('contactForm').style.display = 'none';
    } else {
        alert('Please fill out all fields.');
    }
}

function hidePreview() {
    document.getElementById('messagePreview').style.display = 'none';
    document.getElementById('contactForm').style.display = 'block';
}
/* End of Contact page */

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
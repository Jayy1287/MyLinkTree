const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
    console.error (err)
    }


}

shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click', copyText))

    const shareButtons1 = document.querySelectorAll('.share-button')
    console.log(shareButtons1)
    
    async function copyText1(e) {
    //prevent button going to site
        e.preventDefault()
        const link = this.getAttribute('link')
        console.log(link)
        try {
            await navigator.clipboard.writeText(link)
            alert("Copied the text: " + link)
        } catch (err) {
        console.error (err)
        }
    
    
    }
    
    shareButtons1.forEach(shareButton1 => 
        shareButton1.addEventListener('click', copyText))
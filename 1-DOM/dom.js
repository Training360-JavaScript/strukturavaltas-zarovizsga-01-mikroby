function manipulateDom() {

    const quoteAll = document.querySelectorAll('.quote');

    quoteAll.forEach(element => {
        element.style.borderColor = 'blue';
        element.style.backgroundColor = 'lightblue';
        element.style.fontStyle = 'italic';
    });
};

export { manipulateDom };
const IMAGESINCAROUSELLE = 9

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
function CarouselleTile() {
    let outPut = []
    for (let step = 0; step < IMAGESINCAROUSELLE; step++) {
        outPut[step] = <div key={step} id={'heroImage' + (step + 1)} className='heroImage'></div>
        console.log(outPut)
    }
    return (
    <div className="hCarouselle">
        {shuffle(outPut)}
    </div>
    )
}

export default function Home() {
    return (
        <div>
            <CarouselleTile/>
            
            <div className="sericeTileContainer">
                <div className="servicesTile">
                    <h1 className="Title">Accounting Services</h1>
                    <div className="subText">We'll take care of your accounting and tax so you can focus on other things.</div>
                </div>
                <div className="servicesTile">
                    <h1 className="Title">Mentoring Services</h1>
                    <div className="subText">Let us proviode mentoring services which will improve your business with targeted advice.</div>
                </div>
                <div className="servicesTile">
                    <h1 className="Title">Xero Support</h1>
                    <div className="subText">We use beauatiful accounting software to streamline and support your business.</div>
                </div>
            </div>
        </div>
        
    );
}
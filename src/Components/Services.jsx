export default function Services(props) {
    return (
        <div className="servicesContainer">
            <div className="servicesContainerInner">
                <div className="top">
                <h4>{props.mainHeader}</h4>
                    {props.mainText}<br /><br /><br />
                </div>
                <div className="bottom">
                    <div className="b1">
                        <h4>{props.b1HText}</h4>
                        {props.b1Text}<br /><br /><br />
                    </div>
                    <div className="b2">
                        <h4>{props.b2HText}</h4>
                        {props.b2Text}<br /><br /><br />
                    </div>
                    <div className="b3">
                        <h4>{props.b3HText}</h4>
                        {props.b3Text}<br /><br /><br />
                    </div>
                    <div className="b4">
                        <h4>{props.b4HText}</h4>
                        {props.b4Text}<br /><br /><br />
                    </div>
                    <div className="b5">
                        <h4>{props.b5HText}</h4>
                        {props.b5Text}<br /><br /><br />
                    </div>
                </div>
            </div>
        </div>
    );
}
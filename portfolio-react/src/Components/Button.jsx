export default function About(props) {
    return (
        <a className="Button" id={props.id} onClick={props.onClick} href={props.href}>{props.text}{props.children}</a>
    );
}
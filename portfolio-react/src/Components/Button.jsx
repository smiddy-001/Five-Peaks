export default function Button(props) {
    return (
        <a className={"Button " + props.className} id={props.id} onClick={props.onClick} href={props.href}>{props.text}{props.children}</a>
    );
}
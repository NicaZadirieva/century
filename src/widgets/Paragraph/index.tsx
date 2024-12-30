import { ParagraphProps } from './Paragraph.props';

export default function Paragraph(props: ParagraphProps) {
    return (
        <p className={props.className}>{props.children}</p>
    );
}
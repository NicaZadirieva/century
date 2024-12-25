export default interface ButtonProps {
    className?: string;
    onClick: (event: MouseEvent) => void;
    children: React.ReactNode;
}
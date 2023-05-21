export const Button = ({ children, ...props }: any) => {
    return (
        <button className="rounded-full bg-yellow-400 px-8" {...props}>{children}</button>
    )
}
export const Button = ({ children, ...props }: any) => {
    return (
        <button className="rounded-full px-8 py-2 text-bluegrey bg-yellow hover:text-darkgrey hover:bg-lightyellow transition duration-300" {...props}>{children}</button>
    )
}
/** @jsxImportSource quarto-tsx */

// Unfortunately, there is currently a bug on Deno that requires
// .tsx files to start with that declaration. This also interferes
// with intellisense and IDE support for TSX. We apologize for
// the present inconvenience: https://github.com/denoland/deno/issues/14723

export function buildList(lst: number[])
{
    const elements = lst.map((number) => <li>{number}</li>);
    return <div><ul>
        {elements}
    </ul></div>;
}

export function buildCircles(lst: number[])
{
    const elements = lst.map((number: number, i: number) => <circle fill="gray" stroke="black" r={number} cx="50" cy={25 + i * 20}></circle>);
    return <svg width="100" height={lst.length * 20 + 50}>
        {elements}
    </svg>;
}
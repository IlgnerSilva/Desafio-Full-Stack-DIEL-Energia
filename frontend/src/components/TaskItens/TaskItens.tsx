interface Props {
    title: string;
}

export default function TaskItens(item: Props) {
    return (
        <div key={item.title} className="">
            <input type="checkbox" />
            <span>{item.title}</span>
        </div>
    )
}